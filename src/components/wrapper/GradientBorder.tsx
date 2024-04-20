import clsx from "clsx"

export type GradientBorderProps = Readonly<{
  children: React.ReactNode
  button?: boolean
}>

function GradientBorder({ children, button = false }: GradientBorderProps) {
  return (
    <div
      className={clsx(
        "rounded-full bg-gradient-to-b from-gradient-background-from to-gradient-background-to  p-[2px]",
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
