import { VercelRequest, VercelResponse } from '@vercel/node';
import sharp from 'sharp';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  try {
    const { url, width = 800 } = req.query;

    if (!url || typeof url !== 'string') {
      return res.status(400).json({ error: 'URL is required' });
    }
    const response = await fetch(url);
    const buffer = await response.arrayBuffer();

    const optimizedImage = await sharp(Buffer.from(buffer))
      .resize(Number(width), null, {
        fit: 'inside',
        withoutEnlargement: true,
      })
      .webp({ quality: 80 })
      .toBuffer();

    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
    res.setHeader('Content-Type', 'image/webp');
    res.send(optimizedImage);
  } catch (error) {
    console.error('Image optimization error:', error);
    res.status(500).json({ error: 'Failed to optimize image' });
  }
} 