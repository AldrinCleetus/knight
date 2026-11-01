"use client"

import { useState, useEffect, useRef, useCallback } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Photo } from "@/utils/types/hobbyTypes"

interface FullscreenImageViewerProps {
  photo: Photo | null
  isOpen: boolean
  onClose: () => void
}

export default function FullscreenImageViewer({
  photo,
  isOpen,
  onClose,
}: FullscreenImageViewerProps) {
  const [scale, setScale] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [isNativeFullscreen, setIsNativeFullscreen] = useState(false)
  const [downloadDropdown, setDownloadDropdown] = useState(false)
  const [isDownloading, setIsDownloading] = useState(false)

  const dragStartRef = useRef({ x: 0, y: 0 })
  const posStartRef = useRef({ x: 0, y: 0 })
  const containerRef = useRef<HTMLDivElement>(null)

  // Reset zoom & pan when image changes or viewer opens
  useEffect(() => {
    if (isOpen) {
      setScale(1)
      setPosition({ x: 0, y: 0 })
      setDownloadDropdown(false)
    }
  }, [isOpen, photo?.slug])

  // Track native fullscreen changes
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsNativeFullscreen(Boolean(document.fullscreenElement))
    }
    document.addEventListener("fullscreenchange", handleFullscreenChange)
    return () => document.removeEventListener("fullscreenchange", handleFullscreenChange)
  }, [])

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (scale > 1) {
          setScale(1)
          setPosition({ x: 0, y: 0 })
        } else {
          onClose()
        }
      } else if (e.key === "+" || e.key === "=") {
        zoomIn()
      } else if (e.key === "-") {
        zoomOut()
      } else if (e.key === "0") {
        resetZoom()
      } else if (e.key === "f" || e.key === "F") {
        toggleNativeFullscreen()
      }
    }

    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [isOpen, scale, onClose])

  const zoomIn = () => {
    setScale((prev) => Math.min(5, Number((prev + 0.5).toFixed(1))))
  }

  const zoomOut = () => {
    setScale((prev) => {
      const next = Math.max(1, Number((prev - 0.5).toFixed(1)))
      if (next === 1) setPosition({ x: 0, y: 0 })
      return next
    })
  }

  const resetZoom = () => {
    setScale(1)
    setPosition({ x: 0, y: 0 })
  }

  const toggleNativeFullscreen = async () => {
    try {
      if (!document.fullscreenElement) {
        await document.documentElement.requestFullscreen()
      } else {
        await document.exitFullscreen()
      }
    } catch (err) {
      console.warn("Fullscreen toggle unavailable:", err)
    }
  }

  // Double click toggles between 1x and 2.5x
  const handleDoubleClick = () => {
    if (scale > 1.2) {
      resetZoom()
    } else {
      setScale(2.5)
    }
  }

  // Wheel zoom
  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault()
    const zoomFactor = -e.deltaY * 0.0025
    setScale((prev) => {
      const next = Math.min(5, Math.max(1, Number((prev + zoomFactor).toFixed(2))))
      if (next === 1) setPosition({ x: 0, y: 0 })
      return next
    })
  }

  // Mouse pan handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return
    setIsDragging(true)
    dragStartRef.current = { x: e.clientX, y: e.clientY }
    posStartRef.current = { ...position }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging || scale <= 1) return
    const dx = e.clientX - dragStartRef.current.x
    const dy = e.clientY - dragStartRef.current.y
    setPosition({
      x: posStartRef.current.x + dx,
      y: posStartRef.current.y + dy,
    })
  }

  const handleMouseUp = () => {
    setIsDragging(false)
  }

  // Download handler
  const handleDownload = async (url: string, extension = "jpg") => {
    if (!photo) return
    setIsDownloading(true)
    setDownloadDropdown(false)

    const filename = `${photo.slug}.${extension}`

    try {
      const response = await fetch(url)
      const blob = await response.blob()
      const blobUrl = window.URL.createObjectURL(blob)
      const link = document.createElement("a")
      link.href = blobUrl
      link.download = filename
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      window.URL.revokeObjectURL(blobUrl)
    } catch {
      // Fallback direct link
      const link = document.createElement("a")
      link.href = url
      link.download = filename
      link.target = "_blank"
      link.click()
    } finally {
      setIsDownloading(false)
    }
  }

  if (!photo) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] bg-black select-none flex flex-col justify-between overflow-hidden"
          onWheel={handleWheel}
        >
          {/* Top Floating Control Bar */}
          <div className="relative z-30 flex items-center justify-between p-4 md:px-8 bg-gradient-to-b from-black/90 via-black/50 to-transparent">
            {/* Title & Location */}
            <div className="flex flex-col gap-0.5">
              <span className="text-white text-base md:text-lg font-bold tracking-tight">
                {photo.title || photo.slug}
              </span>
              {photo.location && (
                <span className="text-primary-cyan text-xs font-light flex items-center gap-1">
                  <span>📍</span>
                  <span>{photo.location}</span>
                </span>
              )}
            </div>

            {/* Right Tools Group */}
            <div className="flex items-center gap-2 md:gap-3">
              {/* Zoom Controls */}
              <div className="flex items-center rounded-full bg-neutral-900/90 border border-white/10 px-2 py-1 text-xs">
                <button
                  onClick={zoomOut}
                  disabled={scale <= 1}
                  title="Zoom Out (-)"
                  className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white disabled:opacity-30 disabled:hover:text-white/80 transition-colors rounded-full hover:bg-white/10"
                >
                  −
                </button>
                <button
                  onClick={resetZoom}
                  title="Reset Zoom (0)"
                  className="px-2 py-0.5 text-xs font-mono font-medium text-white/90 hover:text-primary-cyan transition-colors"
                >
                  {Math.round(scale * 100)}%
                </button>
                <button
                  onClick={zoomIn}
                  disabled={scale >= 5}
                  title="Zoom In (+)"
                  className="w-7 h-7 flex items-center justify-center text-white/80 hover:text-white disabled:opacity-30 disabled:hover:text-white/80 transition-colors rounded-full hover:bg-white/10"
                >
                  +
                </button>
              </div>

              {/* Native Fullscreen Button */}
              <button
                onClick={toggleNativeFullscreen}
                title="Toggle Monitor Fullscreen (F)"
                className="hidden sm:flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 text-xs text-white/80 hover:text-white transition-colors"
              >
                <span>{isNativeFullscreen ? "⛶" : "⛶"}</span>
                <span>{isNativeFullscreen ? ".exit_screen" : ".fullscreen"}</span>
              </button>

              {/* Download Menu Button */}
              <div className="relative">
                <button
                  onClick={() => setDownloadDropdown((prev) => !prev)}
                  title="Download Image"
                  disabled={isDownloading}
                  className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-primary-cyan text-black font-semibold text-xs hover:bg-cyan-300 transition-colors shadow-[0_0_15px_rgba(26,188,254,0.3)] disabled:opacity-50"
                >
                  <span>↓</span>
                  <span>{isDownloading ? ".downloading..." : ".download"}</span>
                </button>

                {/* Dropdown for Raw vs High-Res */}
                {downloadDropdown && (
                  <div className="absolute right-0 top-10 w-48 rounded-2xl bg-neutral-900/95 border border-white/10 p-2 shadow-2xl flex flex-col gap-1 z-40 backdrop-blur-md">
                    <button
                      onClick={() => handleDownload(photo.src, "jpg")}
                      className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/10 text-white flex flex-col transition-colors"
                    >
                      <span className="font-medium">High-Res Image</span>
                      <span className="text-[10px] text-text-secondary-light-gray font-light">
                        Full resolution JPEG
                      </span>
                    </button>

                    {photo.rawUrl && (
                      <button
                        onClick={() =>
                          handleDownload(
                            photo.rawUrl!,
                            photo.rawUrl!.endsWith(".dng")
                              ? "dng"
                              : photo.rawUrl!.endsWith(".cr3")
                              ? "cr3"
                              : photo.rawUrl!.endsWith(".arw")
                              ? "arw"
                              : "jpg"
                          )
                        }
                        className="w-full text-left px-3 py-2 text-xs rounded-xl hover:bg-white/10 text-primary-cyan flex flex-col transition-colors border-t border-white/5"
                      >
                        <span className="font-semibold flex items-center gap-1">
                          <span>Original / RAW</span>
                          <span className="text-[9px] px-1.5 py-0.2 bg-primary-cyan/20 text-primary-cyan rounded">
                            RAW
                          </span>
                        </span>
                        <span className="text-[10px] text-text-secondary-light-gray font-light">
                          Uncompressed camera original
                        </span>
                      </button>
                    )}
                  </div>
                )}
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                aria-label="Close fullscreen"
                className="w-8 h-8 rounded-full bg-neutral-900/90 hover:bg-neutral-800 border border-white/10 text-white flex items-center justify-center text-sm transition-colors"
              >
                ✕
              </button>
            </div>
          </div>

          {/* Interactive Zoomable / Pannable Image Canvas */}
          <div
            className={`relative flex-1 w-full h-full flex items-center justify-center overflow-hidden ${
              scale > 1
                ? isDragging
                  ? "cursor-grabbing"
                  : "cursor-grab"
                : "cursor-zoom-in"
            }`}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            onDoubleClick={handleDoubleClick}
          >
            <div
              style={{
                transform: `translate3d(${position.x}px, ${position.y}px, 0) scale(${scale})`,
                transition: isDragging ? "none" : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1)",
                transformOrigin: "center center",
              }}
              className="max-w-[95vw] max-h-[85vh] flex items-center justify-center will-change-transform"
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={photo.src}
                alt={photo.alt}
                draggable={false}
                className="max-w-[95vw] max-h-[85vh] object-contain shadow-2xl rounded-lg pointer-events-none"
              />
            </div>
          </div>

          {/* Bottom Bar — Hints & Camera summary */}
          <div className="relative z-30 p-3 md:px-8 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex items-center justify-between text-xs text-text-secondary-light-gray font-light">
            <div className="flex items-center gap-3">
              {photo.gear && <span>{photo.gear}</span>}
              {photo.focalLength && <span>• {photo.focalLength}</span>}
              {photo.aperture && <span>• {photo.aperture}</span>}
              {photo.iso && <span>• ISO {photo.iso}</span>}
            </div>

            <div className="hidden md:flex items-center gap-2 text-[11px] opacity-75">
              <span>Double-click or scroll to zoom</span>
              <span>•</span>
              <span>Drag to pan</span>
              <span>•</span>
              <span>ESC to exit</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
