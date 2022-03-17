import { createTemplate } from './template'

// Load script data
const blueText = document.currentScript?.getAttribute('data-blue-text')
const yellowText = document.currentScript?.getAttribute('data-yellow-text')

window.onload = () => {
    console.log('BT', blueText)
    const template = createTemplate(
        blueText == null ? 'Stand with' : blueText,
        yellowText == null ? 'UKRAINE' : yellowText
    )
    document.body.prepend(template)
}
