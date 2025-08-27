import sharp from 'sharp';
import fs from 'fs';
import path from 'path';

const outDir = path.resolve('public');
fs.mkdirSync(outDir, { recursive: true });

const srcSvg = path.resolve('src/assets/favicon-source.svg');
const outSvg = path.join(outDir, 'favicon.svg');
const sizes = [16, 32, 180];

try {
  fs.copyFileSync(srcSvg, outSvg);

  for (const size of sizes) {
    const outRounded = path.join(outDir, `favicon-${size}-rounded.png`);
    const pngBuffer = await sharp(srcSvg).resize(size, size, { fit: 'cover' }).png().toBuffer();

  const rx = Math.max(2, Math.floor(size * 0.40));
    const maskSvg = `<?xml version="1.0" encoding="utf-8"?>\n<svg xmlns='http://www.w3.org/2000/svg' width='${size}' height='${size}'>\n  <rect width='${size}' height='${size}' rx='${rx}' ry='${rx}' fill='#fff'/>\n</svg>`;

    await sharp(pngBuffer)
      .composite([{ input: Buffer.from(maskSvg), blend: 'dest-in' }])
      .png()
      .toFile(outRounded);
  }
} catch (err) {
  console.error('Error generating favicons:', err);
  process.exit(1);
}