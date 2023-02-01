import { SlButton } from '@shoelace-style/shoelace/dist/react'
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
      <SlButton variant='primary' onClick={handleClick}>
        Get new fact
      </SlButton>
      {catFact && <p>{catFact}</p>}
      <img
        src={imageUrl}
        alt={`Image extracted using the first 3 words from ${catFact}`}
      />
    </main>
  )
}
