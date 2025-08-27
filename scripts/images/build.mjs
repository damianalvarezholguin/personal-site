import sharp from 'sharp';
import fs from 'fs';
fs.mkdirSync('public/images', { recursive: true });

await sharp('src/assets/photo.jpg')
  .resize(1200, 630, { fit: 'cover', position: 'attention' })
  .toFile('public/images/og.jpg');