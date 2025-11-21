const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const source = 'resources/icon.png';

// Android adaptive icon foreground sizes
const androidSizes = {
  mdpi: 48,
  hdpi: 72,
  xhdpi: 96,
  xxhdpi: 144,
  xxxhdpi: 192
};

async function generateIcons() {
  // Generate Android foreground icons
  for (const [density, size] of Object.entries(androidSizes)) {
    const outputPath = `android/app/src/main/res/mipmap-${density}/ic_launcher_foreground.png`;
    await sharp(source).resize(size, size).png().toFile(outputPath);
    console.log(`Generated ${outputPath}`);
  }

  // Generate iOS app icon (1024x1024)
  const iosOutput = 'ios/App/App/Assets.xcassets/AppIcon.appiconset/AppIcon-512@2x.png';
  await sharp(source).resize(1024, 1024).png().toFile(iosOutput);
  console.log(`Generated ${iosOutput}`);
}

generateIcons().catch(console.error);
