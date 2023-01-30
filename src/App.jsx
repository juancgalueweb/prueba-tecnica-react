import { useEffect, useState } from 'react'
import './App.css'

export const App = () => {
  const CAT_ENDPOINT_RANDOM_FACT = 'https://catfact.ninja/fact'
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

  const [catFact, setCatFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  useEffect(() => {
    fetch(CAT_ENDPOINT_RANDOM_FACT)
      .then(res => res.json())
      .then(data => {
        setCatFact(data.fact)

        const firstThreeWords = data.fact.split(' ', 3).join(' ')
        fetch(`https://cataas.com/cat/says/${firstThreeWords}?json=true`)
          .then(res => res.json())
          .then(data => {
            setImageUrl(data.url)
          })
      })
  }, [])

  return (
    <main>
      <h1>App de gatitos</h1>
      {catFact && <p>{catFact}</p>}
      {imageUrl && (
        <img
          src={`${CAT_PREFIX_IMAGE_URL}${imageUrl}`}
          alt={`Image extracted using the first 3 words from ${catFact}`}
        />
      )}
    </main>
  )
}
