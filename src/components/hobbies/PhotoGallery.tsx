"use client"

import { useState } from "react"
import Image from "next/image"
import { Photo } from "@/utils/types/hobbyTypes"
import GradientBorder from "@/components/wrapper/GradientBorder"

interface PhotoGalleryProps {
  photos: Photo[]
}

export default function PhotoGallery({ photos }: PhotoGalleryProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null)

  const openLightbox = (index: number) => setLightboxIndex(index)
  const closeLightbox = () => setLightboxIndex(null)
  const prev = () =>
    setLightboxIndex((i) => (i === null ? null : (i - 1 + photos.length) % photos.length))
  const next = () =>
    setLightboxIndex((i) => (i === null ? null : (i + 1) % photos.length))

  return (
    <>
      {/* Masonry Gallery */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 mt-10 pb-20">
        {photos.map((photo, index) => (
          <div
            key={index}
            className="break-inside-avoid mb-4 cursor-pointer group relative"
            onClick={() => openLightbox(index)}
          >
            <GradientBorder rounded="3xl">
              <div className="relative w-full overflow-hidden rounded-3xl bg-primary-background-black">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  width={photo.width}
                  height={photo.height}
                  className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex flex-col justify-end p-5">
                  {photo.title && (
                    <p className="text-white font-semibold text-base leading-snug">
                      {photo.title}
                    </p>
                  )}
                  {photo.location && (
                    <p className="text-primary-cyan text-xs font-light mt-1">
                      📍 {photo.location}
                    </p>
                  )}
                  {photo.takenAt && (
                    <p className="text-text-secondary-light-gray text-xs font-light mt-0.5">
                      {photo.takenAt}
                    </p>
                  )}
                </div>
              </div>
            </GradientBorder>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          {/* Close */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white text-3xl font-light transition-colors z-10"
          >
            ✕
          </button>

          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); prev() }}
            className="absolute left-4 md:left-8 text-white/50 hover:text-white text-4xl font-thin transition-colors z-10 select-none"
          >
            ‹
          </button>

          {/* Image */}
          <div
            className="relative max-w-5xl max-h-[85vh] w-full mx-16 flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={photos[lightboxIndex].src}
              alt={photos[lightboxIndex].alt}
              width={photos[lightboxIndex].width}
              height={photos[lightboxIndex].height}
              className="object-contain max-h-[75vh] w-auto rounded-2xl"
              priority
            />
            {/* Caption */}
            <div className="mt-4 text-center">
              {photos[lightboxIndex].title && (
                <p className="text-white font-semibold text-lg">{photos[lightboxIndex].title}</p>
              )}
              {photos[lightboxIndex].location && (
                <p className="text-primary-cyan text-sm font-light mt-1">
                  📍 {photos[lightboxIndex].location}
                </p>
              )}
              <p className="text-text-secondary-light-gray text-xs font-light mt-1">
                {lightboxIndex + 1} / {photos.length}
              </p>
            </div>
          </div>

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); next() }}
            className="absolute right-4 md:right-8 text-white/50 hover:text-white text-4xl font-thin transition-colors z-10 select-none"
          >
            ›
          </button>
        </div>
      )}
    </>
  )
}
