/**
 * Icon Generator Script
 * Run: npm run generate-icons
 *
 * This script generates PNG icons from the base SVG icon.
 * Requires: npm install --save-dev sharp
 */

const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sizes = [72, 96, 128, 144, 152, 192, 384, 512];
const inputSvg = path.join(__dirname, '../public/icons/icon.svg');
const outputDir = path.join(__dirname, '../public/icons');

async function generateIcons() {
  // Ensure output directory exists
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  console.log('Generating PWA icons...');

  for (const size of sizes) {
    const outputPath = path.join(outputDir, `icon-${size}x${size}.png`);

    await sharp(inputSvg)
      .resize(size, size)
      .png()
      .toFile(outputPath);

    console.log(`  Created: icon-${size}x${size}.png`);
  }

  // Generate Apple touch icon
  await sharp(inputSvg)
    .resize(180, 180)
    .png()
    .toFile(path.join(outputDir, '../apple-touch-icon.png'));
  console.log('  Created: apple-touch-icon.png');

  // Generate favicon
  await sharp(inputSvg)
    .resize(32, 32)
    .png()
    .toFile(path.join(outputDir, '../favicon-32x32.png'));
  console.log('  Created: favicon-32x32.png');

  await sharp(inputSvg)
    .resize(16, 16)
    .png()
    .toFile(path.join(outputDir, '../favicon-16x16.png'));
  console.log('  Created: favicon-16x16.png');

  console.log('\nDone! Icons generated successfully.');
}

generateIcons().catch(console.error);
