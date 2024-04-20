import MainNavBar from "@/components/navigation/MainNavBar"
import Image from "next/image"

export default function Home() {
  return (
    <main className="flex flex-1 bg-grid-pattern bg-repeat">
      <section className="flex flex-1 px-80">
        <MainNavBar />
      </section>
    </main>
  )
}
