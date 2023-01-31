import './App.css'
import { useCatFact } from './hooks/useCatFact.js'
import { useCatImage } from './hooks/useCatImage.js'

export const App = () => {
  const { catFact, refreshFact } = useCatFact()
  const { imageUrl } = useCatImage({ catFact })

  const handleClick = () => {
    refreshFact()
  }

  return (
    <main>
      <h1>App de gatitos</h1>
      <button onClick={handleClick}>Get new fact</button>
      {catFact && <p>{catFact}</p>}
      {imageUrl && (
        <img
          src={imageUrl}
          alt={`Image extracted using the first 3 words from ${catFact}`}
        />
      )}
    </main>
  )
}
