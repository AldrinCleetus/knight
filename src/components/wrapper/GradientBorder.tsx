import clsx from "clsx"

export type GradientBorderProps = Readonly<{
  children: React.ReactNode
  button?: boolean
  rounded?: "sm" | "md" | "lg" | "xl" | "2xl" | "3xl" | "full"
}>

function GradientBorder({
  children,
  button = false,
  rounded = "full",
}: GradientBorderProps) {
  return (
    <div
      className={clsx(
        `rounded-${rounded} bg-gradient-to-b from-gradient-background-from to-gradient-background-to  p-[2px]  flex`,
        {
          "hover:scale-105 transition-all ease-out": button,
        }
      )}
    >
      {children}
    </div>
  )
}

export default GradientBorder
