import { useState } from 'react';
import { cn } from '@/lib/utils';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className,
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  // Use Vercel's image optimization service
  const imageUrl = src.startsWith('http')
    ? `https://vercel-proxy.maikesi.vercel.app/api/image?url=${encodeURIComponent(src)}&width=${width || 800}`
    : src;

  return (
    <div className={cn(
      'overflow-hidden',
      isLoading ? 'animate-pulse bg-muted' : '',
      className
    )}>
      <img
        src={imageUrl}
        alt={alt}
        width={width}
        height={height}
        loading={priority ? 'eager' : 'lazy'}
        onLoad={() => setIsLoading(false)}
        className={cn(
          'duration-700 ease-in-out',
          isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0',
          className
        )}
        {...props}
      />
    </div>
  );
} 