import { Navbar } from "@/components/navbar"

export default function Home() {
  const matchUps = ['Aatrox', 'Fizz - Flash Ghost', 'Neeko - Flash Ignite', 'Xerath - Flash Ghost']

  return (
    <main className="">
      <Navbar/>
      <h1>Vladimir</h1>
      <ul>
        {matchUps.map((e) => <li>Vladimir x {e}</li>)}
      </ul>
    </main>
  )
}
