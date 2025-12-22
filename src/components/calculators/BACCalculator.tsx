"use client";

import { useState } from "react";
import { Calculator, AlertTriangle, Info } from "lucide-react";

/**
 * BAC (Blood Alcohol Content) Calculator
 *
 * Features:
 * - Accurate Widmark formula calculation
 * - Gender-specific calculations
 * - Time-based metabolism
 * - Educational warnings
 * - Shareable results
 * - Embeddable on external sites (backlink magnet)
 */

interface BACResult {
  bac: number;
  status: 'sober' | 'buzzed' | 'impaired' | 'very-impaired' | 'dangerous';
  timeToSober: number;
  warning: string;
}

export function BACCalculator() {
  const [weight, setWeight] = useState<string>("");
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [drinks, setDrinks] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [result, setResult] = useState<BACResult | null>(null);

  const calculateBAC = () => {
    const w = parseFloat(weight);
    const d = parseFloat(drinks);
    const h = parseFloat(hours);

    if (!w || !d || h === undefined) return;

    // Widmark formula
    // BAC = (Alcohol consumed in grams / (Body weight in grams × r)) - (0.015 × Hours)
    // r = gender constant (0.68 for men, 0.55 for women)
    // Standard drink = 14g of pure alcohol

    const r = gender === 'male' ? 0.68 : 0.55;
    const alcoholGrams = d * 14; // 14g per standard drink
    const bodyWeightGrams = w * 453.592; // lbs to grams

    // Calculate BAC
    let bac = (alcoholGrams / (bodyWeightGrams * r)) * 100;

    // Subtract metabolism (0.015% per hour)
    bac = Math.max(0, bac - (0.015 * h));

    // Round to 3 decimal places
    bac = Math.round(bac * 1000) / 1000;

    // Determine status
    let status: BACResult['status'];
    let warning: string;

    if (bac === 0) {
      status = 'sober';
      warning = "You're sober! Safe to drive.";
    } else if (bac < 0.03) {
      status = 'buzzed';
      warning = "Slight buzz. You may feel relaxed. Still, it's best not to drive.";
    } else if (bac < 0.08) {
      status = 'impaired';
      warning = "Legally impaired in most states. DO NOT DRIVE. Reaction time and judgment are affected.";
    } else if (bac < 0.15) {
      status = 'very-impaired';
      warning = "Significantly impaired. DO NOT DRIVE. Balance, speech, and motor skills are severely affected.";
    } else {
      status = 'dangerous';
      warning = "DANGER ZONE. Seek medical attention if feeling unwell. Extremely high risk of alcohol poisoning.";
    }

    // Calculate time to reach 0.00 BAC
    const timeToSober = bac / 0.015; // Hours at 0.015% per hour

    setResult({
      bac,
      status,
      timeToSober: Math.ceil(timeToSober),
      warning
    });
  };

  const getStatusColor = (status: BACResult['status']) => {
    switch (status) {
      case 'sober':
        return 'text-green-400';
      case 'buzzed':
        return 'text-yellow-400';
      case 'impaired':
        return 'text-orange-400';
      case 'very-impaired':
        return 'text-red-400';
      case 'dangerous':
        return 'text-red-600';
    }
  };

  const getBacColor = (bac: number) => {
    if (bac === 0) return 'text-green-400';
    if (bac < 0.03) return 'text-yellow-400';
    if (bac < 0.08) return 'text-orange-400';
    if (bac < 0.15) return 'text-red-400';
    return 'text-red-600';
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-dark-800 rounded-xl border border-dark-600 p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calculator className="h-6 w-6 text-neon-blue" />
          <h2 className="text-2xl font-bold text-white">BAC Calculator</h2>
        </div>

        <div className="space-y-4">
          {/* Weight Input */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Your Weight (lbs)
            </label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="e.g., 160"
              className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue"
            />
          </div>

          {/* Gender Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Gender
            </label>
            <div className="flex gap-4">
              <button
                onClick={() => setGender('male')}
                className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                  gender === 'male'
                    ? 'bg-neon-blue text-white border-neon-blue'
                    : 'bg-dark-700 text-gray-400 border-dark-600 hover:border-neon-blue'
                }`}
              >
                Male
              </button>
              <button
                onClick={() => setGender('female')}
                className={`flex-1 px-4 py-2 rounded-lg border transition-colors ${
                  gender === 'female'
                    ? 'bg-neon-pink text-white border-neon-pink'
                    : 'bg-dark-700 text-gray-400 border-dark-600 hover:border-neon-pink'
                }`}
              >
                Female
              </button>
            </div>
          </div>

          {/* Number of Drinks */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Number of Standard Drinks
              <span className="text-gray-500 text-xs ml-2">
                (1 drink = 12oz beer, 5oz wine, or 1.5oz liquor)
              </span>
            </label>
            <input
              type="number"
              step="0.5"
              value={drinks}
              onChange={(e) => setDrinks(e.target.value)}
              placeholder="e.g., 3"
              className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue"
            />
          </div>

          {/* Hours */}
          <div>
            <label className="block text-sm font-medium text-gray-300 mb-2">
              Hours Since First Drink
            </label>
            <input
              type="number"
              step="0.5"
              value={hours}
              onChange={(e) => setHours(e.target.value)}
              placeholder="e.g., 2"
              className="w-full px-4 py-2 bg-dark-700 border border-dark-600 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-neon-blue"
            />
          </div>

          {/* Calculate Button */}
          <button
            onClick={calculateBAC}
            className="w-full px-6 py-3 bg-gradient-to-r from-neon-pink to-neon-blue text-white font-semibold rounded-lg hover:opacity-90 transition-opacity"
          >
            Calculate BAC
          </button>
        </div>

        {/* Results */}
        {result && (
          <div className="mt-6 p-6 bg-dark-700 rounded-lg border border-dark-600">
            <div className="text-center mb-4">
              <div className="text-sm text-gray-400 mb-2">Your Estimated BAC</div>
              <div className={`text-6xl font-bold ${getBacColor(result.bac)}`}>
                {result.bac.toFixed(3)}%
              </div>
              <div className={`text-lg font-semibold mt-2 ${getStatusColor(result.status)}`}>
                {result.status.toUpperCase().replace('-', ' ')}
              </div>
            </div>

            <div className="flex items-start gap-3 p-4 bg-dark-800 rounded-lg mb-4">
              <AlertTriangle className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
              <p className="text-sm text-gray-300">{result.warning}</p>
            </div>

            {result.bac > 0 && (
              <div className="p-4 bg-dark-800 rounded-lg">
                <div className="text-sm text-gray-400 mb-1">Estimated Time to 0.00% BAC</div>
                <div className="text-2xl font-bold text-white">
                  ~{result.timeToSober} hours
                </div>
                <div className="text-xs text-gray-500 mt-2">
                  Based on average metabolism rate of 0.015% per hour
                </div>
              </div>
            )}
          </div>
        )}

        {/* Important Disclaimer */}
        <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/30 rounded-lg">
          <div className="flex items-start gap-3">
            <Info className="h-5 w-5 text-yellow-400 flex-shrink-0 mt-0.5" />
            <div className="text-sm text-gray-300">
              <p className="font-semibold text-yellow-400 mb-2">Important Disclaimer</p>
              <p className="mb-2">
                This calculator provides estimates only. Actual BAC varies based on many factors including food consumption, metabolism, medications, and individual physiology.
              </p>
              <p className="font-semibold">
                NEVER drive if you've been drinking. Use rideshare, public transit, or a designated driver.
              </p>
            </div>
          </div>
        </div>

        {/* What is a Standard Drink */}
        <div className="mt-6 p-4 bg-dark-700 rounded-lg">
          <h3 className="font-semibold text-white mb-3">What is a Standard Drink?</h3>
          <div className="grid grid-cols-3 gap-4 text-sm">
            <div className="text-center">
              <div className="text-2xl mb-1">🍺</div>
              <div className="text-white font-medium">12 oz Beer</div>
              <div className="text-gray-400 text-xs">~5% ABV</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🍷</div>
              <div className="text-white font-medium">5 oz Wine</div>
              <div className="text-gray-400 text-xs">~12% ABV</div>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-1">🥃</div>
              <div className="text-white font-medium">1.5 oz Liquor</div>
              <div className="text-gray-400 text-xs">~40% ABV</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
