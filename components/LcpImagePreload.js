// /components/LcpImagePreload.js
import Head from 'next/head';

// Use ONLY for the same above-the-fold hero you render with <Image priority />
export default function LcpImagePreload({
  src,                         // e.g., '/img/law-books.webp' (same as hero)
  widths = [360, 414, 600, 750, 828], // must exist in images.deviceSizes
  sizes = '100vw',             // match the hero's sizes
  quality = 75,                // match images.quality (75 default)
  media = '(max-width: 480px)' // phones only → no desktop mismatches/warnings
}) {
  if (!src || !widths?.length) return null;

  const sorted = [...widths].sort((a, b) => a - b);
  const imagesrcset = sorted
    .map((w) => `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${quality} ${w}w`)
    .join(', ');

  // Reasonable largest phone candidate for legacy UAs:
  const href = `/_next/image?url=${encodeURIComponent(src)}&w=${sorted[sorted.length - 1]}&q=${quality}`;

  return (
    <Head>
    <link
      rel="preload"
      as="image"
      href={href}
      imagesrcset={imagesrcset}
      imagesizes={sizes}
      media={media}
      type="image/webp"        // ✅ explicit MIME
      fetchpriority="high"     // ✅ optional, helps Chrome prioritize
      crossOrigin=""
    />
  </Head>
  );
}