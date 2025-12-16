import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Generate a unique device ID for anonymous users
export function getDeviceId(): string {
  if (typeof window === "undefined") return "";

  let deviceId = localStorage.getItem("sipwiki_device_id");
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem("sipwiki_device_id", deviceId);
  }
  return deviceId;
}

// Format player count display
export function formatPlayerCount(min: number, max: number | null): string {
  if (max === null) {
    return `${min}+ players`;
  }
  if (min === max) {
    return `${min} players`;
  }
  return `${min}-${max} players`;
}

// Format drunkenness level
export function getDrunkennessLabel(level: 1 | 2 | 3 | 4 | 5): string {
  const labels: Record<number, string> = {
    1: "Light Buzz",
    2: "Tipsy",
    3: "Drunk",
    4: "Wasted",
    5: "Blackout Risk",
  };
  return labels[level];
}

// Format elapsed time
export function formatElapsedTime(startedAt: number): string {
  const elapsed = Date.now() - startedAt;
  const seconds = Math.floor(elapsed / 1000);
  const minutes = Math.floor(seconds / 60);
  const hours = Math.floor(minutes / 60);

  if (hours > 0) {
    return `${hours}h ${minutes % 60}m`;
  }
  if (minutes > 0) {
    return `${minutes}m ${seconds % 60}s`;
  }
  return `${seconds}s`;
}

// Check if session is older than 1 hour
export function isSessionExpired(startedAt: number): boolean {
  const ONE_HOUR = 60 * 60 * 1000;
  return Date.now() - startedAt > ONE_HOUR;
}

// Debounce function for search
export function debounce<T extends (...args: unknown[]) => unknown>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}
