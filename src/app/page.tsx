import MainNavBar from "@/components/navigation/MainNavBar"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-1 bg-grid-pattern bg-repeat justify-center">
      <section className="overflow-hidden flex flex-1 px-4 md:px-10  2xl:px-80  ">
        <MainNavBar />
      </section>
    </main>
  )
}
