"use client";

import React, { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { Cpu } from "lucide-react";

export interface ImageContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  src?: string;
  alt: string;
  aspectRatio?: "video" | "square" | "4/3" | "wide";
  withOverlay?: boolean;
  withGlow?: boolean;
  category?: string;
}

export const ImageContainer: React.FC<ImageContainerProps> = ({
  src,
  alt,
  aspectRatio = "video",
  withOverlay = true,
  withGlow = false,
  category,
  className,
  ...props
}) => {
  const [imageError, setImageError] = useState(false);

  const aspectStyles = {
    video: "aspect-video",
    square: "aspect-square",
    "4/3": "aspect-[4/3]",
    wide: "aspect-[21/9]",
  };

  const hasValidImage = src && !imageError;

  return (
    <div
      className={cn(
        "relative w-full overflow-hidden rounded-2xl bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80 group transition-colors",
        aspectStyles[aspectRatio],
        className
      )}
      {...props}
    >
      {/* Background Ambient Glow */}
      {withGlow && (
        <div className="absolute inset-0 bg-blue-600/10 blur-xl rounded-full pointer-events-none" />
      )}

      {hasValidImage ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          onError={() => setImageError(true)}
        />
      ) : (
        /* Fallback Tech Grid Container */
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-900 bg-grid-pattern p-6 text-center">
          <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-600 dark:text-blue-400 mb-3 shadow-inner">
            <Cpu className="w-6 h-6 animate-pulse" />
          </div>
          {category && (
            <span className="text-[11px] uppercase tracking-wider font-semibold text-blue-600 dark:text-blue-400/80">
              {category}
            </span>
          )}
          <span className="text-xs font-medium text-slate-500 dark:text-slate-400 mt-1 max-w-[200px] truncate">
            {alt}
          </span>
        </div>
      )}

      {/* Enterprise Gradient Scrim */}
      {withOverlay && (
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/20 to-transparent dark:from-slate-950 dark:via-slate-950/40 dark:to-transparent opacity-80 group-hover:opacity-50 transition-opacity duration-300 pointer-events-none" />
      )}
    </div>
  );
};
