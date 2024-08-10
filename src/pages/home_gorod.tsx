

type Props = {
    city: string
}

function Home_gorod({city}: Props) {
  return (
    <div>
        <h2>Home gorod</h2>
        <p>{city}</p>
    </div>
  )
}

export default Home_gorod