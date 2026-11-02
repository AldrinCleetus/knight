"use client"

import Link from "next/link"
import Image from "next/image"
import { HobbyCategory } from "@/utils/types/hobbyTypes"
import GradientBorder from "@/components/wrapper/GradientBorder"

interface HobbyCategoryCardProps {
  category: HobbyCategory
}

export default function HobbyCategoryCard({ category }: HobbyCategoryCardProps) {
  const isPhotography = category.slug === "photography"
  const isCosplay = category.slug === "cosplay"

  return (
    <div className="w-full h-full">
      {category.available ? (
        <Link href={`/hobbies/${category.slug}`} className="group block h-full">
          <GradientBorder rounded="3xl" button expandFull>
            <div className="bg-primary-background-black rounded-3xl p-7 md:p-9 flex flex-col justify-between w-full h-full min-h-[340px] relative overflow-hidden transition-all duration-300 group-hover:border-white/20">
              {/* ── Photography Visual Theme ── */}
              {isPhotography && (
                <>
                  {/* Viewfinder crosshairs & camera HUD in background */}
                  <div className="absolute inset-0 pointer-events-none opacity-25 group-hover:opacity-45 transition-opacity duration-500 overflow-hidden">
                    {/* Viewfinder corner crop marks */}
                    <div className="absolute top-6 left-6 w-5 h-5 border-t border-l border-white/60" />
                    <div className="absolute top-6 right-6 w-5 h-5 border-t border-r border-white/60" />
                    <div className="absolute bottom-6 left-6 w-5 h-5 border-b border-l border-white/60" />
                    <div className="absolute bottom-6 right-6 w-5 h-5 border-b border-r border-white/60" />

                    {/* Camera Specs HUD */}
                    <div className="absolute top-7 right-14 flex items-center gap-2 font-mono text-[9px] text-white/50 tracking-wider">
                      <span className="px-1.5 py-0.5 rounded bg-white/5 border border-white/10">RAW</span>
                      <span>ISO 100</span>
                      <span>F/1.8</span>
                    </div>

                    {/* Stylized camera aperture ring in background */}
                    <svg
                      className="absolute -right-16 -top-16 w-64 h-64 text-white/[0.04] group-hover:text-primary-cyan/[0.08] group-hover:rotate-45 transition-all duration-700 ease-out"
                      viewBox="0 0 100 100"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    >
                      <circle cx="50" cy="50" r="45" strokeDasharray="3 3" />
                      <circle cx="50" cy="50" r="34" />
                      <circle cx="50" cy="50" r="18" />
                      <line x1="50" y1="5" x2="50" y2="25" />
                      <line x1="50" y1="75" x2="50" y2="95" />
                      <line x1="5" y1="50" x2="25" y2="50" />
                      <line x1="75" y1="50" x2="95" y2="50" />
                      <path d="M26 36 L40 60 L65 55 Z" strokeWidth="1" />
                    </svg>
                  </div>

                  {/* Floating Stacked Miniature Photo Polaroids */}
                  <div className="absolute right-4 bottom-14 md:right-8 md:bottom-12 w-48 h-36 pointer-events-none hidden sm:block">
                    {/* Back Photo: Vyttila backwaters */}
                    <div className="absolute right-0 top-0 w-32 h-24 rounded-2xl overflow-hidden border-2 border-white/15 bg-neutral-900 shadow-2xl rotate-6 group-hover:rotate-12 group-hover:translate-x-3 group-hover:-translate-y-2 group-hover:scale-105 transition-all duration-500 ease-out">
                      <Image
                        src="/photography/vytilla-backwaters.jpg"
                        alt="Vyttila backwaters preview"
                        width={200}
                        height={150}
                        className="w-full h-full object-cover opacity-70 group-hover:opacity-95 transition-opacity duration-300"
                      />
                    </div>

                    {/* Front Photo: Butterfly photo */}
                    <div className="absolute left-2 top-6 w-36 h-26 rounded-2xl overflow-hidden border-2 border-white/25 bg-neutral-900 shadow-2xl -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2 group-hover:-translate-y-1 group-hover:scale-110 group-hover:border-primary-cyan/60 transition-all duration-500 ease-out">
                      <Image
                        src="/photography/blue-tiger-butterfly.jpg"
                        alt="Macro preview"
                        width={200}
                        height={140}
                        className="w-full h-full object-cover opacity-85 group-hover:opacity-100 transition-opacity duration-300"
                      />
                    </div>
                  </div>
                </>
              )}

              {/* Card Top: Title & Status Indicator */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-primary-cyan animate-pulse shadow-[0_0_8px_rgba(26,188,254,0.8)]" />
                    <span className="text-[11px] font-mono tracking-wider text-primary-cyan uppercase">
                      .available
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white tracking-tight group-hover:text-primary-cyan transition-colors">
                    .{category.name}
                  </h2>
                </div>
              </div>

              {/* Card Middle: Description & Genre Pills */}
              <div className="relative z-10 flex flex-col gap-4 my-6 max-w-sm">
                <p className="text-text-secondary-light-gray font-light text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Sub-tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-capsule-background-gray/80 text-text-secondary-light-gray border border-white/5">
                    macro
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-capsule-background-gray/80 text-text-secondary-light-gray border border-white/5">
                    landscape
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-capsule-background-gray/80 text-text-secondary-light-gray border border-white/5">
                    35mm / 85mm
                  </span>
                </div>
              </div>

              {/* Card Bottom: Interactive Link Callout */}
              <div className="relative z-10 pt-2 flex items-center justify-between border-t border-white/5">
                <span className="text-xs font-light text-text-secondary-light-gray group-hover:text-white transition-colors">
                  walk into gallery
                </span>
                <span className="text-sm font-medium text-primary-cyan flex items-center gap-1.5 transition-transform duration-300 group-hover:translate-x-1.5">
                  <span>.explore</span>
                  <span>→</span>
                </span>
              </div>
            </div>
          </GradientBorder>
        </Link>
      ) : (
        /* ── Cosplay Card (Creative Blueprint / Workshop Coming Soon) ── */
        <div className="h-full group">
          <GradientBorder rounded="3xl" expandFull>
            <div className="bg-primary-background-black/95 rounded-3xl p-7 md:p-9 flex flex-col justify-between w-full h-full min-h-[340px] relative overflow-hidden transition-all duration-300 hover:border-white/20">
              {/* Creative Blueprint Grid & Character Visor in background */}
              <div className="absolute inset-0 pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500 overflow-hidden">
                {/* Blueprint Drafting Dots & Lines */}
                <div className="absolute inset-0 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:18px_18px] opacity-15" />

                {/* Stylized Cyberpunk / Oni Visor Mask Vector */}
                <svg
                  className="absolute -right-8 -bottom-6 w-56 h-56 text-white/[0.07] group-hover:text-primary-cyan/[0.15] group-hover:scale-105 group-hover:-rotate-3 transition-all duration-700 ease-out"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.2"
                >
                  {/* Visor / Helmet facet lines */}
                  <polygon points="50,15 80,30 75,70 50,90 25,70 20,30" />
                  <line x1="20" y1="30" x2="50" y2="50" />
                  <line x1="80" y1="30" x2="50" y2="50" />
                  <line x1="50" y1="50" x2="50" y2="90" />
                  <polygon points="35,42 65,42 58,52 42,52" strokeWidth="1.5" className="group-hover:stroke-primary-cyan" />
                  <circle cx="43" cy="47" r="1.5" fill="currentColor" />
                  <circle cx="57" cy="47" r="1.5" fill="currentColor" />
                  <line x1="30" y1="75" x2="70" y2="75" strokeDasharray="2 2" />
                </svg>

                {/* Crafting HUD Coordinates */}
                <div className="absolute top-7 right-8 flex flex-col items-end font-mono text-[9px] text-white/40 tracking-wider">
                  <span>SCALE // 1:1</span>
                  <span className="text-primary-cyan/60">ARMOR_FABRICATION</span>
                </div>
              </div>

              {/* Floating Workshop Badge Cards */}
              <div className="absolute right-6 bottom-16 w-44 h-28 pointer-events-none hidden sm:block">
                {/* Badge 1: EVA Foam */}
                <div className="absolute right-0 top-0 px-3 py-1.5 rounded-xl border border-white/10 bg-neutral-900/90 shadow-xl rotate-3 group-hover:rotate-6 group-hover:translate-x-2 group-hover:-translate-y-1 transition-all duration-500">
                  <span className="text-[10px] font-mono text-white/70">.eva_foam_10mm</span>
                </div>
                {/* Badge 2: 3D Print */}
                <div className="absolute left-2 top-10 px-3 py-1.5 rounded-xl border border-white/10 bg-neutral-900/90 shadow-xl -rotate-6 group-hover:-rotate-12 group-hover:-translate-x-2 group-hover:translate-y-1 group-hover:border-primary-cyan/40 transition-all duration-500">
                  <span className="text-[10px] font-mono text-primary-cyan/80">.3d_printed_props</span>
                </div>
              </div>

              {/* Card Top: Title & Status Indicator */}
              <div className="relative z-10 flex items-start justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-neutral-500" />
                    <span className="text-[11px] font-mono tracking-wider text-text-secondary-light-gray uppercase">
                      .in_progress
                    </span>
                  </div>
                  <h2 className="text-3xl font-extrabold text-white/90 tracking-tight group-hover:text-white transition-colors">
                    .{category.name}
                  </h2>
                </div>
              </div>

              {/* Card Middle: Description & Craft Pills */}
              <div className="relative z-10 flex flex-col gap-4 my-6 max-w-sm">
                <p className="text-text-secondary-light-gray font-light text-sm leading-relaxed">
                  {category.description}
                </p>

                {/* Sub-tags */}
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-capsule-background-gray/60 text-text-secondary-light-gray border border-white/5">
                    eva foam
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-capsule-background-gray/60 text-text-secondary-light-gray border border-white/5">
                    3d printing
                  </span>
                  <span className="text-[10px] font-mono px-2.5 py-1 rounded-full bg-capsule-background-gray/60 text-text-secondary-light-gray border border-white/5">
                    prop crafting
                  </span>
                </div>
              </div>

              {/* Card Bottom: Status Callout */}
              <div className="relative z-10 pt-2 flex items-center justify-between border-t border-white/5 text-xs text-text-secondary-light-gray font-light">
                <span>crafting in the workshop</span>
                <span className="font-mono text-primary-cyan/60 group-hover:text-primary-cyan transition-colors">
                  .stay_tuned
                </span>
              </div>
            </div>
          </GradientBorder>
        </div>
      )}
    </div>
  )
}
