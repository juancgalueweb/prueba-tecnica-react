import { useEffect, useState } from 'react'
import { getRandomCatImage } from '../services/catImage.js'
const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'

export function useCatImage ({ catFact }) {
  const [imageUrl, setImageUrl] = useState()
  useEffect(() => {
    if (!catFact) return
    const firstThreeWords = catFact.split(' ', 3).join(' ')
    getRandomCatImage(firstThreeWords).then(image => setImageUrl(image))
  }, [catFact])
  return { imageUrl: `${CAT_PREFIX_IMAGE_URL}${imageUrl}` }
}
