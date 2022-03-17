// document.body.prepend(mainDiv);

import styles from './index.css'

export function createTemplate(blueText: string, yellowText: string) {
    const mainDiv = document.createElement('div')
    mainDiv.innerHTML = `
    <style>${styles.toString()}</style>
    <div class="prapor">
        <div class="blue">${blueText}</div>
        <div class="yellow">${yellowText}</div>
    </div>
  `
    return mainDiv
}
