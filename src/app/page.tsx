import { Navbar } from "@/components/Navbar"

export default function Home() {
  const matchUps = ['Aatrox - ', 'Ahri - ', 'Akali - ', 'Akshan - ', 'Anivia - ', 'Annie - ', 'Aurelion Sol - ', 'Azir - ', 'Brand - ', 'Camille - ', 'Cassiopeia - ', 'Cho Gath - ', 'Corki - ', 'Darius - ', 'Diana - ', 'Dr. Mundo - ', 'Ekko - ', 'Fiora - ', 'Fizz - Flash Ghost', 'Galio - ', 'Gangplank - ', 'Garen - ', 'Gnar - ', 'Gwen - ', 'Heimerdinger - ', 'Illaoi - ', 'Irelia - ', 'Jax - ', 'Jayce - ', 'K Sante - ', 'Karma - ', 'Kassadin - ', 'Katarina - ', 'Kayle - ', 'Kennen - ', 'Kled - ', 'Leblanc - ', 'Lissandra - ', 'Lucian - ', 'Lux - ', 'Malphite - ', 'Malzahar - ', 'Mordekaiser - ', 'Morgana - ', 'Nasus - ', 'Neeko - Flash Ignite', 'Olaf - ', 'Orianna - ', 'Ornn - ', 'Pantheon - ', 'Poppy - ', 'Qiyana - ', 'Quinn - ', 'Renekton - ', 'Rengar - ', 'Riven - ', 'Rumble - ', 'Ryze - ', 'Seraphine - ', 'Sett - ', 'Shen - ', 'Singed - ', 'Sion - ', 'Swain - ', 'Sylas - ', 'Syndra - ', 'Tahm Kench - ', 'Taliyah - ', 'Talon - ', 'Teemo - ', 'Tristana - ', 'Trundle - ', 'Tryndamere - ', 'Twisted Fate - ', 'Urgot - ', 'Veigar - ', 'Vel Koz - ', 'Vex - ', 'Viktor - ', 'Volibear - ', 'Wukong - ', 'Xerath - Flash Ghost', 'Yasuo - ', 'Yone - ', 'Yorick - ', 'Zed - ', 'Ziggs - ', 'Zilean - ', 'Zoe - ']

  return (
    <main className="">
      <Navbar/>
      <h1>Vladimir</h1>
      <ul>
        {matchUps.map((e) => <li>{e}</li>)}
      </ul>
    </main>
  )
}
