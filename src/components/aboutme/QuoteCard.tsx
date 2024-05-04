import GradientBorder from "../wrapper/GradientBorder"
import clsx from "clsx"
import QuoteIcon from "../icons/QuoteIcon"
import { ColorPallete } from "@/utils/theme/colors"

type Props = {}

const QuoteCard = (props: Props) => {
  return (
    <div className={clsx("flex flex-1")}>
      <GradientBorder rounded="3xl" expandFull>
        <div
          className={clsx(
            "rounded-3xl bg-primary-background-black flex flex-1 flex-col p-4 justify-between overflow-clip relative"
          )}
        >
          <div className="mb-4 gap-3 flex flex-col justify-between">
            <QuoteIcon
              className="rotate-180 "
              width={52}
              height={52}
              fill={ColorPallete.cardIcon}
            />
            <div className="flex flex-col gap-2">
              <p className="font-bold text-3xl ">
                Jack of all trades, master of none, though ofttimes better than
                master of one.
              </p>
            </div>

            <QuoteIcon
              className="ml-auto"
              width={52}
              height={52}
              fill={ColorPallete.cardIcon}
            />
          </div>
        </div>
      </GradientBorder>
    </div>
  )
}

export default QuoteCard
