"use client";

import { useState } from "react";
import { Lightbox } from "./Lightbox";
import { ScrollAnimation } from "./ScrollAnimation";

type ProjectGalleryProps = {
  images: string[];
  title: string;
};

export function ProjectGallery({ images, title }: ProjectGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  return (
    <>
      <div className="basis-auto flex flex-nowrap gap-4 overflow-x-auto pb-4">
        {images.map((image, index) => (
          <ScrollAnimation key={image} delay={index * 0.1}>
            <button
              type="button"
              onClick={() => openLightbox(index)}
              className="block h-full w-full cursor-zoom-in overflow-hidden rounded-2xl border border-[var(--border)]"
            >
              <img
                src={image}
                alt={`${title} screenshot ${index + 1}`}
                className="h-full max-h-80 w-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </button>
          </ScrollAnimation>
        ))}
      </div>

      <Lightbox
        src={images[lightboxIndex ?? 0] ?? ""}
        alt={`${title} screenshot`}
        isOpen={lightboxIndex !== null}
        onClose={closeLightbox}
      />
    </>
  );
}
