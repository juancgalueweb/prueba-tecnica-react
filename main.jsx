import '@shoelace-style/shoelace/dist/themes/light.css'
import { setBasePath } from '@shoelace-style/shoelace/dist/utilities/base-path'
import { createRoot } from 'react-dom/client'
import { App } from './src/App'

setBasePath('https://cdn.jsdelivr.net/npm/@shoelace-style/shoelace@2.0.0/dist/')

const root = createRoot(document.getElementById('app'))
root.render(<App />)
