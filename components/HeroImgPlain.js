/* eslint-disable */
import React from 'react';

const DEVICE_SIZES = [360, 414, 540, 640, 750, 828];

const makeURL = (src, w, q = 48) =>
  `/_next/image?url=${encodeURIComponent(src)}&w=${w}&q=${q}`;

const makeSrcSet = (src, q = 48) =>
  DEVICE_SIZES.map((w) => `${makeURL(src, w, q)} ${w}w`).join(', ');

export default function HeroImgPlain({
  srcWebp,
  srcJpg,
  alt,
  width,
  height,
  sizes = '100vw',
  quality = 48,
  style,
}) {
  const ratio = width && height ? `${height} / ${width}` : '1 / 1';

  return (
    <div style={{ position: 'relative', width: '100%', aspectRatio: ratio, ...style }}>
      <picture>
        <source type="image/webp" srcSet={makeSrcSet(srcWebp || srcJpg, quality)} sizes={sizes} />
        <img
          src={makeURL(srcJpg, 828, quality)}      // default source kept small
          srcSet={makeSrcSet(srcJpg, quality)}
          sizes={sizes}
          alt={alt}
          fetchPriority="high"
          loading="eager"
          decoding="async"
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover' }}
        />
      </picture>
    </div>
  );
}