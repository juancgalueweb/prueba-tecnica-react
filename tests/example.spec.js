// @ts-check
import { expect, test } from '@playwright/test'

const CAT_PREFIX_IMAGE_URL = 'https://cataas.com'
const LOCAL_HOST_URL = 'http://localhost:5173/'

test('app shows random facts and a single image', async ({ page }) => {
  await page.goto(LOCAL_HOST_URL)

  const text = page.getByRole('paragraph')
  const image = page.getByRole('img')

  const textContext = await text.textContent()
  const imageSrc = await image.getAttribute('src')

  expect(textContext?.length).toBeGreaterThan(0)
  expect(imageSrc?.startsWith(CAT_PREFIX_IMAGE_URL)).toBeTruthy()
})
