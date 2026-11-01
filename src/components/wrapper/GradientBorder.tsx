import clsx from "clsx"

export type GradientBorderProps = Readonly<{
  children: React.ReactNode
  button?: boolean
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
  expandFull?: boolean
}>

const roundedMap = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  xl: "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  full: "rounded-full",
} as const

function GradientBorder({
  children,
  button = false,
  rounded = "full",
  expandFull = false,
}: GradientBorderProps) {
  return (
    <div
      className={clsx(
        roundedMap[rounded],
        "bg-gradient-to-b from-gradient-background-from to-gradient-background-to p-[2px] flex",
        {
          "hover:scale-105 transition-all ease-out": button,
          "flex-1": expandFull,
        }
      )}
    >
      {children}
    </div>
  )
}

export default GradientBorder
