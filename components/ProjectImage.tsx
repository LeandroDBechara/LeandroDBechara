"use client";

import Image from "next/image";
import { useState } from "react";

type ProjectImageProps = {
  src: string;
  alt: string;
  className?: string;
};

export function ProjectImage({ src, alt, className }: ProjectImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        className={`flex h-full min-h-48 w-full items-center justify-center rounded-xl border border-[var(--border)] bg-[linear-gradient(135deg,#111,#1a1a1a)] text-sm text-[var(--text-muted)] ${className ?? ""}`}
      >
        Screenshot placeholder
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={1200}
      height={800}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
