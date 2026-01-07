import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const GAMES_DIR = path.join(__dirname, '../public/games');
const QUALITY = 80;
const MAX_WIDTH = 1200; // Max width for game images

async function optimizeImages() {
  console.log('Starting image optimization...\n');

  const files = fs.readdirSync(GAMES_DIR).filter(f => f.endsWith('.png'));

  let totalOriginalSize = 0;
  let totalNewSize = 0;

  for (const file of files) {
    const inputPath = path.join(GAMES_DIR, file);
    const outputPath = path.join(GAMES_DIR, file); // Overwrite original
    const webpPath = path.join(GAMES_DIR, file.replace('.png', '.webp'));

    const originalStats = fs.statSync(inputPath);
    const originalSize = originalStats.size;
    totalOriginalSize += originalSize;

    try {
      // Get image metadata
      const metadata = await sharp(inputPath).metadata();

      // Resize if wider than MAX_WIDTH
      const resizeOptions = metadata.width > MAX_WIDTH
        ? { width: MAX_WIDTH, withoutEnlargement: true }
        : {};

      // Create optimized PNG (overwrite original)
      await sharp(inputPath)
        .resize(resizeOptions)
        .png({ quality: QUALITY, compressionLevel: 9 })
        .toFile(outputPath + '.tmp');

      // Create WebP version
      await sharp(inputPath)
        .resize(resizeOptions)
        .webp({ quality: QUALITY })
        .toFile(webpPath);

      // Replace original with optimized version
      fs.unlinkSync(inputPath);
      fs.renameSync(outputPath + '.tmp', outputPath);

      const newStats = fs.statSync(outputPath);
      const webpStats = fs.statSync(webpPath);
      const newSize = newStats.size;
      totalNewSize += newSize;

      const savings = ((originalSize - newSize) / originalSize * 100).toFixed(1);

      console.log(`✓ ${file}`);
      console.log(`  PNG: ${(originalSize / 1024 / 1024).toFixed(2)}MB → ${(newSize / 1024 / 1024).toFixed(2)}MB (${savings}% smaller)`);
      console.log(`  WebP: ${(webpStats.size / 1024 / 1024).toFixed(2)}MB`);

    } catch (err) {
      console.error(`✗ Error processing ${file}:`, err.message);
    }
  }

  console.log('\n' + '='.repeat(50));
  console.log(`Total: ${(totalOriginalSize / 1024 / 1024).toFixed(2)}MB → ${(totalNewSize / 1024 / 1024).toFixed(2)}MB`);
  console.log(`Savings: ${((totalOriginalSize - totalNewSize) / 1024 / 1024).toFixed(2)}MB (${((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)}%)`);
  console.log('='.repeat(50));
}

optimizeImages().catch(console.error);
