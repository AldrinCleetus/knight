"use client"

import { useState, useEffect, useCallback, useMemo } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Photo } from "@/utils/types/hobbyTypes"
import GradientBorder from "@/components/wrapper/GradientBorder"
import FullscreenImageViewer from "./FullscreenImageViewer"

interface PhotoGalleryProps {
  photos: Photo[]
  initialSlug?: string
}

const MetaItem = ({ label, value }: { label: string; value: string }) => (
  <div className="flex flex-col gap-1 p-3 rounded-2xl bg-capsule-background-gray/50 border border-white/5">
    <span className="text-[10px] uppercase tracking-wider text-text-secondary-light-gray font-light">
      {label}
    </span>
    <span className="text-xs md:text-sm text-white font-medium">{value}</span>
  </div>
)

export default function PhotoGallery({ photos, initialSlug }: PhotoGalleryProps) {
  const [selectedSlug, setSelectedSlug] = useState<string | null>(initialSlug || null)
  const [selectedLocation, setSelectedLocation] = useState<string>("All")
  const [isFullscreenViewerOpen, setIsFullscreenViewerOpen] = useState(false)
  const [downloadMenuOpen, setDownloadMenuOpen] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const selectedPhoto = photos.find((p) => p.slug === selectedSlug) || null

  // Sibling photos from the exact same location (for location collection strip in detail modal)
  const sameLocationPhotos = useMemo(() => {
    if (!selectedPhoto?.location) return []
    return photos.filter(
      (p) => p.location === selectedPhoto.location && p.slug !== selectedPhoto.slug
    )
  }, [photos, selectedPhoto])

  // Extract all unique locations for top filter bar
  const allLocations = useMemo(() => {
    const locSet = new Set<string>()
    photos.forEach((photo) => {
      if (photo.location) locSet.add(photo.location)
    })
    return ["All", ...Array.from(locSet)]
  }, [photos])

  // Filter photos by selected location
  const filteredPhotos = useMemo(() => {
    if (selectedLocation === "All") return photos
    return photos.filter((photo) => photo.location === selectedLocation)
  }, [photos, selectedLocation])

  const openPhoto = useCallback((slug: string) => {
    setSelectedSlug(slug)
    setDownloadMenuOpen(false)
    if (typeof window !== "undefined") {
      window.history.pushState({ slug }, "", `/hobbies/photography/${slug}`)
    }
  }, [])

  const closePhoto = useCallback(() => {
    setIsFullscreenViewerOpen(false)
    setSelectedSlug(null)
    setDownloadMenuOpen(false)
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", "/hobbies/photography")
    }
  }, [])

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = () => {
      if (typeof window !== "undefined") {
        const path = window.location.pathname
        const match = path.match(/\/hobbies\/photography\/([^/]+)/)
        if (match && match[1]) {
          setSelectedSlug(match[1])
        } else {
          setSelectedSlug(null)
        }
      }
    }

    window.addEventListener("popstate", handlePopState)
    return () => window.removeEventListener("popstate", handlePopState)
  }, [])

  // Handle Escape key to close
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && !isFullscreenViewerOpen) {
        closePhoto()
      }
    }
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [closePhoto, isFullscreenViewerOpen])

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedPhoto) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "unset"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [selectedPhoto])

  // Group filtered photos by year, and within year by location
  const groupedData = useMemo(() => {
    const yearMap: Record<string, Record<string, Photo[]>> = {}

    filteredPhotos.forEach((photo) => {
      let yr = "Other"
      if (photo.takenAt) {
        const match = photo.takenAt.match(/\b(19\d\d|20\d\d)\b/)
        yr = match ? match[1] : photo.takenAt
      }
      const loc = photo.locationGroup || photo.location || "General"

      if (!yearMap[yr]) yearMap[yr] = {}
      if (!yearMap[yr][loc]) yearMap[yr][loc] = []

      yearMap[yr][loc].push(photo)
    })

    const sortedYears = Object.keys(yearMap).sort((a, b) => {
      const numA = parseInt(a, 10)
      const numB = parseInt(b, 10)
      if (!isNaN(numA) && !isNaN(numB)) return numB - numA
      return a.localeCompare(b)
    })

    return sortedYears.map((year) => {
      const locationGroups = Object.keys(yearMap[year]).map((location) => ({
        location,
        photos: yearMap[year][location],
      }))
      const totalYearPhotos = locationGroups.reduce((acc, curr) => acc + curr.photos.length, 0)

      return {
        year,
        totalPhotos: totalYearPhotos,
        locations: locationGroups,
      }
    })
  }, [filteredPhotos])

  // Download logic
  const handleDownload = async (url: string, extension = "jpg") => {
    if (!selectedPhoto) return
    setIsDownloading(true)
    setDownloadMenuOpen(false)
    const filename = `${selectedPhoto.slug}.${extension}`

    try {
      const res = await fetch(url)
      const blob = await res.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = blobUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    } catch {
      const link = document.createElement("a")
      link.href = url
      link.download = filename
      link.target = "_blank"
      link.click()
    } finally {
      setIsDownloading(false)
    }
  }

  return (
    <>
      {/* Location Filter Pills (clean and minimal) */}
      {allLocations.length > 2 && (
        <div className="flex flex-wrap gap-2 items-center justify-center max-w-4xl mx-auto mt-6">
          {allLocations.map((loc) => {
            const isActive = selectedLocation === loc
            return (
              <button
                key={loc}
                onClick={() => setSelectedLocation(loc)}
                className={`text-xs px-3.5 py-1.5 rounded-full transition-all duration-200 ${
                  isActive
                    ? "bg-primary-cyan text-black font-semibold shadow-[0_0_12px_rgba(26,188,254,0.4)]"
                    : "bg-capsule-background-gray text-white/80 hover:text-white hover:bg-neutral-700"
                }`}
              >
                {loc === "All"
                  ? ".all_locations"
                  : `.${loc.toLowerCase().replace(/[^a-z0-9]+/g, "_")}`}
              </button>
            )
          })}
        </div>
      )}

      {/* Photo Gallery Sections Grouped by Year and Location */}
      <div className="flex flex-col gap-16 w-full mt-10 pb-20">
        {groupedData.map(({ year, totalPhotos, locations }) => (
          <section key={year} className="flex flex-col gap-8">
            {/* Year Separator Header */}
            <div className="flex items-center gap-4 pt-2">
              <span className="text-2xl md:text-3xl font-extrabold text-white tracking-tight">
                .{year}
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-r from-gradient-background-from via-gradient-background-to to-transparent" />
              <span className="text-xs text-text-secondary-light-gray font-light px-3.5 py-1 rounded-full bg-capsule-background-gray border border-white/5">
                {totalPhotos} {totalPhotos === 1 ? "photo" : "photos"}
              </span>
            </div>

            {/* Location Groups within this Year */}
            <div className="flex flex-col gap-10">
              {locations.map(({ location: locName, photos: locPhotos }) => (
                <div key={locName} className="flex flex-col gap-4">
                  {/* Location Sub-Header (Only shown if filtering is "All" and multiple locations exist) */}
                  {selectedLocation === "All" && (
                    <div className="flex items-center gap-2.5 pl-1">
                      <svg
                        className="w-3.5 h-3.5 text-primary-cyan flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                      <h3 className="text-sm font-mono text-white/90 tracking-wide font-medium">
                        .{locName.toLowerCase()}
                      </h3>
                      <span className="text-[10px] font-mono text-text-secondary-light-gray font-light px-2 py-0.5 rounded-full bg-capsule-background-gray/60 border border-white/5">
                        {locPhotos.length} {locPhotos.length === 1 ? "shot" : "shots"}
                      </span>
                    </div>
                  )}

                  {/* Masonry Columns for this Location */}
                  <div className="columns-1 sm:columns-2 lg:columns-3 gap-5">
                    {locPhotos.map((photo) => (
                      <div
                        key={photo.slug}
                        className="break-inside-avoid mb-5 cursor-pointer group"
                        onClick={() => openPhoto(photo.slug)}
                      >
                        <GradientBorder rounded="3xl">
                          <div className="relative w-full overflow-hidden rounded-3xl bg-primary-background-black">
                            <motion.div
                              layoutId={`photo-shared-${photo.slug}`}
                              className="relative w-full overflow-hidden rounded-3xl"
                              transition={{
                                duration: 0.38,
                                ease: [0.16, 1, 0.3, 1],
                              }}
                            >
                              <Image
                                src={photo.src}
                                alt={photo.alt}
                                width={photo.width}
                                height={photo.height}
                                className="w-full h-auto object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                              />
                            </motion.div>

                            {/* Subtle hover vignette with title & location */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-3xl flex flex-col justify-end p-5 pointer-events-none">
                              {photo.title && (
                                <p className="text-white font-semibold text-base leading-snug">
                                  {photo.title}
                                </p>
                              )}
                              {photo.location && (
                                <p className="text-primary-cyan text-xs font-light mt-1 flex items-center gap-1.5">
                                  <svg
                                    className="w-3.5 h-3.5 text-primary-cyan flex-shrink-0"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                                    />
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth={2}
                                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                                    />
                                  </svg>
                                  <span>{photo.location}</span>
                                </p>
                              )}
                            </div>
                          </div>
                        </GradientBorder>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      {/* Expanded Smooth Shared Element Detail Modal */}
      <AnimatePresence>
        {selectedPhoto && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/85 backdrop-blur-md"
              onClick={closePhoto}
            />

            {/* Modal Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 12 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 12 }}
              transition={{
                duration: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="relative z-10 w-full max-w-5xl max-h-[92vh] overflow-y-auto rounded-3xl bg-primary-background-black border border-white/10 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.8)] p-6 md:p-8 lg:p-10 my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={closePhoto}
                aria-label="Close details"
                className="absolute top-5 right-5 z-20 w-10 h-10 rounded-full bg-capsule-background-gray/80 hover:bg-neutral-700 border border-white/10 text-white/80 hover:text-white flex items-center justify-center text-sm transition-all duration-200 hover:scale-105"
              >
                ✕
              </button>

              <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                {/* Photo Shared Element with click-to-zoom trigger */}
                <div className="relative group/preview w-full lg:w-[58%] flex-shrink-0">
                  <motion.div
                    layoutId={`photo-shared-${selectedPhoto.slug}`}
                    transition={{
                      duration: 0.38,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                    className="w-full rounded-2xl overflow-hidden bg-capsule-background-gray shadow-xl cursor-pointer"
                    onClick={() => setIsFullscreenViewerOpen(true)}
                    title="Click for Fullscreen & Zoom inspection"
                  >
                    <Image
                      src={selectedPhoto.src}
                      alt={selectedPhoto.alt}
                      width={selectedPhoto.width}
                      height={selectedPhoto.height}
                      className="w-full h-auto object-cover max-h-[75vh] rounded-2xl transition-transform duration-500 group-hover/preview:scale-[1.02]"
                      priority
                    />
                  </motion.div>

                  {/* Quick Fullscreen & Zoom badge */}
                  <button
                    onClick={() => setIsFullscreenViewerOpen(true)}
                    className="absolute bottom-4 right-4 px-3.5 py-1.5 rounded-full bg-black/80 hover:bg-black backdrop-blur-md border border-white/15 text-xs text-white/90 hover:text-white flex items-center gap-1.5 opacity-90 hover:opacity-100 transition-all hover:scale-105 shadow-xl"
                  >
                    <svg
                      className="w-3.5 h-3.5 text-white/90 flex-shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                      />
                    </svg>
                    <span>.inspect_zoom</span>
                  </button>
                </div>

                {/* Details Column with graceful staggered reveal */}
                <motion.div
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3, delay: 0.12 }}
                  className="flex flex-col gap-6 flex-1 w-full"
                >
                  {/* Title & Badges */}
                  <div className="flex flex-col gap-2.5">
                    {selectedPhoto.title && (
                      <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight">
                        {selectedPhoto.title}
                      </h2>
                    )}
                    <div className="flex items-center gap-2.5 flex-wrap">
                      {selectedPhoto.location && (
                        <span className="text-xs px-3.5 py-1.5 rounded-full bg-capsule-background-gray text-primary-cyan font-light border border-white/10 flex items-center gap-1.5">
                          <svg
                            className="w-3 h-3 text-primary-cyan flex-shrink-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>{selectedPhoto.location}</span>
                        </span>
                      )}
                      {selectedPhoto.takenAt && (
                        <span className="text-xs px-3.5 py-1.5 rounded-full bg-capsule-background-gray text-text-secondary-light-gray font-light border border-white/10">
                          {selectedPhoto.takenAt}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Action Bar (Fullscreen Zoom & Download) */}
                  <div className="flex items-center gap-3 pt-1">
                    {/* Fullscreen Zoom Button */}
                    <button
                      onClick={() => setIsFullscreenViewerOpen(true)}
                      className="flex items-center gap-2 px-4 py-2 rounded-full bg-capsule-background-gray hover:bg-neutral-700 border border-white/10 text-xs text-white transition-all hover:scale-105"
                    >
                      <svg
                        className="w-3.5 h-3.5 text-white flex-shrink-0"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M4 8V4m0 0h4M4 4l5 5m11-5h-4m4 0v4m0-4l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                        />
                      </svg>
                      <span>.fullscreen_zoom</span>
                    </button>

                    {/* Download Button (Direct if no rawUrl, Dropdown menu if rawUrl exists) */}
                    <div className="relative">
                      <button
                        onClick={() => {
                          if (selectedPhoto.rawUrl) {
                            setDownloadMenuOpen((prev) => !prev)
                          } else {
                            handleDownload(selectedPhoto.src, "jpg")
                          }
                        }}
                        disabled={isDownloading}
                        className="flex items-center gap-2 px-4 py-2 rounded-full bg-primary-cyan text-black font-semibold text-xs hover:bg-cyan-300 transition-all shadow-[0_0_15px_rgba(26,188,254,0.3)] hover:scale-105 disabled:opacity-50"
                      >
                        <svg
                          className="w-3.5 h-3.5 text-black flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
                          />
                        </svg>
                        <span>{isDownloading ? ".downloading..." : ".download"}</span>
                        {selectedPhoto.rawUrl && <span className="text-[9px] opacity-70">▼</span>}
                      </button>

                      {/* Dropdown ONLY if rawUrl is provided */}
                      {Boolean(selectedPhoto.rawUrl && downloadMenuOpen) && (
                        <div className="absolute left-0 top-11 w-48 rounded-2xl bg-neutral-900 border border-white/10 p-2 shadow-2xl flex flex-col gap-1 z-40 backdrop-blur-md">
                          <button
                            onClick={() => handleDownload(selectedPhoto.src, "jpg")}
                            className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/10 text-white flex flex-col transition-colors"
                          >
                            <span className="font-medium">High-Res JPEG</span>
                            <span className="text-[10px] text-text-secondary-light-gray font-light">
                              Standard display resolution
                            </span>
                          </button>

                          <button
                            onClick={() =>
                              handleDownload(
                                selectedPhoto.rawUrl!,
                                selectedPhoto.rawUrl!.endsWith(".dng")
                                  ? "dng"
                                  : selectedPhoto.rawUrl!.endsWith(".cr3")
                                  ? "cr3"
                                  : selectedPhoto.rawUrl!.endsWith(".arw")
                                  ? "arw"
                                  : "jpg"
                              )
                            }
                            className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/10 text-primary-cyan flex flex-col transition-colors border-t border-white/5"
                          >
                            <span className="font-semibold flex items-center gap-1">
                              <span>Original / RAW</span>
                              <span className="text-[9px] px-1 py-0.2 bg-primary-cyan/20 text-primary-cyan rounded">
                                RAW
                              </span>
                            </span>
                            <span className="text-[10px] text-text-secondary-light-gray font-light">
                              Uncompressed source file
                            </span>
                          </button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  {selectedPhoto.description && (
                    <p className="text-text-secondary-light-gray font-light text-sm md:text-base leading-relaxed">
                      {selectedPhoto.description}
                    </p>
                  )}

                  {/* EXIF / Shot Specs Divider */}
                  {(selectedPhoto.gear ||
                    selectedPhoto.aperture ||
                    selectedPhoto.shutterSpeed ||
                    selectedPhoto.iso ||
                    selectedPhoto.focalLength) && (
                    <>
                      <div className="h-[1px] bg-gradient-to-r from-gradient-background-from via-gradient-background-to to-transparent my-1" />

                      <div className="flex flex-col gap-3.5">
                        <span className="text-xs uppercase tracking-widest text-text-secondary-light-gray font-light">
                          .shot_on
                        </span>

                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                          {selectedPhoto.gear && (
                            <div className="col-span-2 sm:col-span-3">
                              <MetaItem label="Camera / Lens" value={selectedPhoto.gear} />
                            </div>
                          )}
                          {selectedPhoto.focalLength && (
                            <MetaItem label="Focal Length" value={selectedPhoto.focalLength} />
                          )}
                          {selectedPhoto.aperture && (
                            <MetaItem label="Aperture" value={selectedPhoto.aperture} />
                          )}
                          {selectedPhoto.shutterSpeed && (
                            <MetaItem label="Shutter Speed" value={selectedPhoto.shutterSpeed} />
                          )}
                          {selectedPhoto.iso && (
                            <MetaItem label="ISO" value={selectedPhoto.iso} />
                          )}
                        </div>
                      </div>
                    </>
                  )}

                  {/* Sibling Photos from Same Location (Clean Collection Row) */}
                  {sameLocationPhotos.length > 0 && (
                    <div className="flex flex-col gap-3 pt-3 border-t border-white/10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase tracking-wider text-text-secondary-light-gray font-light flex items-center gap-1.5">
                          <svg
                            className="w-3 h-3 text-primary-cyan"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                            />
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                          </svg>
                          <span>also in {selectedPhoto.location}</span>
                        </span>
                        <span className="text-[10px] font-mono text-text-secondary-light-gray">
                          {sameLocationPhotos.length + 1} shots in series
                        </span>
                      </div>

                      {/* Horizontal Mini Thumbnails */}
                      <div className="flex items-center gap-3 overflow-x-auto pb-1">
                        {/* Current photo active indicator */}
                        <div className="relative w-16 h-12 rounded-xl overflow-hidden border-2 border-primary-cyan flex-shrink-0 opacity-100 shadow-[0_0_10px_rgba(26,188,254,0.3)]">
                          <Image
                            src={selectedPhoto.src}
                            alt={selectedPhoto.alt}
                            width={80}
                            height={60}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        {/* Sibling photos */}
                        {sameLocationPhotos.map((sib) => (
                          <button
                            key={sib.slug}
                            onClick={() => openPhoto(sib.slug)}
                            title={sib.title}
                            className="relative w-16 h-12 rounded-xl overflow-hidden border border-white/20 hover:border-primary-cyan/80 flex-shrink-0 opacity-70 hover:opacity-100 transition-all hover:scale-105"
                          >
                            <Image
                              src={sib.src}
                              alt={sib.alt}
                              width={80}
                              height={60}
                              className="w-full h-full object-cover"
                            />
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Back link */}
                  <div className="pt-2">
                    <button
                      onClick={closePhoto}
                      className="text-xs font-light text-text-secondary-light-gray hover:text-primary-cyan transition-colors flex items-center gap-1 group/btn"
                    >
                      <span className="transition-transform group-hover/btn:-translate-x-1">←</span>
                      <span>.back_to_gallery</span>
                    </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Standalone Fullscreen Zoom / Pan Canvas Viewer */}
      <FullscreenImageViewer
        photo={selectedPhoto}
        isOpen={isFullscreenViewerOpen}
        onClose={() => setIsFullscreenViewerOpen(false)}
      />
    </>
  )
}
