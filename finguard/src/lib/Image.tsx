import React from 'react';

type Props = React.ImgHTMLAttributes<HTMLImageElement> & {
  src: string;
  alt: string;
  fill?: boolean;
  priority?: boolean;
  quality?: number;
  placeholder?: string;
  unoptimized?: boolean;
};

// Drop-in replacement for next/image in a plain React (Vite) app.
export default function Image({ fill, priority, quality, placeholder, unoptimized, style, loading, ...rest }: Props) {
  const fillStyle: React.CSSProperties = fill
    ? { position: 'absolute', inset: 0, width: '100%', height: '100%' }
    : {};
  return (
    <img
      {...rest}
      loading={priority ? 'eager' : loading ?? 'lazy'}
      decoding="async"
      style={{ ...fillStyle, ...style }}
    />
  );
}
