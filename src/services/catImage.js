export const getRandomCatImage = async phrase => {
  const res = await fetch(`https://cataas.com/cat/says/${phrase}?json=true`)
  const data = await res.json()
  return data.url
}
