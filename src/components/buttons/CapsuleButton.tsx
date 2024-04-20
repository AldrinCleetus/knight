import ExternalLinkIcon from "../icons/ExternalLinkIcon"
import GradientBorder from "../wrapper/GradientBorder"

function CapsuleButton() {
  return (
    <GradientBorder button>
      <button>
        <div className="rounded-full bg-primary-background-black px-5 p-2  md:px-10 md:py-4 flex flex-row gap-2">
          <p className="text-xl lg:text-2xl">.resume</p>
          <ExternalLinkIcon
            fill="white"
            width={20}
            height={20}
            className="self-center"
          />
        </div>
      </button>
    </GradientBorder>
  )
}

export default CapsuleButton
