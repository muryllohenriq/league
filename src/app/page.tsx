export default function Home() {
  const matchUps = ['Aatrox', 'Ahri', 'Akali', 'Akshan', 'Anivia', 'Annie', 'Aurelion Sol', 'Azir', 'Brand', 'Camille', 'Cassiopeia', 'Cho Gath', 'Corki', 'Darius', 'Diana', 'Dr. Mundo', 'Ekko', 'Fiora', 'FizzFlash Ghost', 'Galio', 'Gangplank', 'Garen', 'Gnar', 'Gwen', 'Heimerdinger', 'Illaoi', 'Irelia', 'Jax', 'Jayce', 'K Sante', 'Karma', 'Kassadin', 'Katarina', 'Kayle', 'Kennen', 'Kled', 'Leblanc', 'Lissandra', 'Lucian', 'Lux', 'Malphite', 'Malzahar', 'Mordekaiser', 'Morgana', 'Nasus', 'NeekoFlash Ignite', 'Olaf', 'Orianna', 'Ornn', 'Pantheon', 'Poppy', 'Qiyana', 'Quinn', 'Renekton', 'Rengar', 'Riven', 'Rumble', 'Ryze', 'Seraphine', 'Sett', 'Shen', 'Singed', 'Sion', 'Swain', 'Sylas', 'Syndra', 'Tahm Kench', 'Taliyah', 'Talon', 'Teemo', 'Tristana', 'Trundle', 'Tryndamere', 'Twisted Fate', 'Urgot', 'Veigar', 'Vel Koz', 'Vex', 'Viktor', 'Volibear', 'Wukong', 'XerathFlash Ghost', 'Yasuo', 'Yone', 'Yorick', 'Zed', 'Ziggs', 'Zilean', 'Zoe']

  return (
    <main className="">
      <h1 className="flex justify-center">Vladimir</h1>
      <div className="">
      {matchUps.map((e) => <div className="border w-28">{e}</div>)}
      </div>
    </main>
  )
}
