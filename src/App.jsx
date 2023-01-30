import { useEffect, useState } from 'react'

export const App = () => {
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const [fact, setFact] = useState()

  useEffect(() => {
    async function getRandomFacts () {
      const res = await fetch(CAT_ENDPOINT_RANDOM_FACT)
      const json = await res.json()
      setFact(json.fact)
    }
    getRandomFacts()
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {fact && <p>{fact}</p>}
    </main>
  )
}
