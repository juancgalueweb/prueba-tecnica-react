import { useEffect, useState } from 'react'
import './App.css'
import { getRandomFact } from './services/catFacts.js'
import { getRandomCatImage } from './services/catImage.js'

export const App = () => {
  const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
  const [catFact, setCatFact] = useState()
  const [imageUrl, setImageUrl] = useState()

  // Para recuperar la cita al cargar la página
  useEffect(() => {
    getRandomFact().then(newFact => setCatFact(newFact))
  }, [])

  // Para recuperar la imagen al cambiar la cita
  useEffect(() => {
    if (!catFact) return
    const firstThreeWords = catFact.split(' ', 3).join(' ')
    getRandomCatImage(firstThreeWords).then(image => setImageUrl(image))
  }, [catFact])

  const handleClick = async () => {
    const newFact = await getRandomFact()
    setCatFact(newFact)
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
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
