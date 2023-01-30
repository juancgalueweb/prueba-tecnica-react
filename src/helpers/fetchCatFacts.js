export async function fetchCatFacts () {
  const URL = 'https://catfact.ninja/fact'
  const response = await fetch(URL)
    .then(res => res.json())
    .then(data => data.fact)
  return response
}
