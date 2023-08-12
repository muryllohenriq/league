export default function Home() {
  const matchUps = ['Neeko - Flash Ignite', 'Fizz - Flash Ghost']

  return (
    <main className="">
      <h1>Vladimir</h1>
      <ul>
        {matchUps.map((e) => <li>Vladimir x {e}</li>)}
      </ul>
    </main>
  )
}
