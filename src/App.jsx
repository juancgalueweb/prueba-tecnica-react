import { useEffect, useState } from 'react'
import { fetchCatFacts } from './helpers/fetchCatFacts'

export const App = () => {
  useEffect(async () => {
    setFact(await fetchCatFacts())
  }, [])

  const [fact, setFact] = useState(null)
  return (
    <main>
      <h1>App de gatitos</h1>
      <p>{fact}</p>
    </main>
  )
}
