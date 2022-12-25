import { getCSSPropertiesList, getCSSVarList } from './funcs'
import { GLOBAL_FONT } from './constants'

export const applyThemeCSSVarsMixin = (theme) => {
  const cssVars = getCSSVarList(theme)
  return cssVars.join('\n')
}

const mapCSSProperties = (cssProperties) => {
  const result = []

  Object.keys(cssProperties).forEach((property) => {
    if (Array.isArray(cssProperties[property])) {
      result.push(`
        ${property} {
          ${mapCSSProperties(cssProperties[property])}
        }
      `)
    } else {
      result.push(`${property}: ${cssProperties[property]};`)
    }
  })

  return result.join('\n')
}

export const applyThemeMixin = (theme, component) => {
  const cssProperties = getCSSPropertiesList(theme, component)
  const result = mapCSSProperties(cssProperties)

  return result
}

export const calcLayoutWidth = (width) => `calc(${width} * var(--page-width) / var(--layout-width))`
export const calcLayoutHeight = (height) =>
  `calc(${height} * var(--page-height) / var(--layout-height))`
export const applySizeMixin = (width, height) => {
  const sizeWidth = width ? `width: ${calcLayoutWidth(width)};` : ''
  const sizeHeight = height ? `height: ${calcLayoutHeight(height)};` : ''

  return `${sizeWidth}\n${sizeHeight}`
}

export const applyTextMixin = (fontSize, lineHeight, fontWeight) => {
  return `
    font-family: ${GLOBAL_FONT}, sans-serif;
    font-style: normal;
    font-size: ${calcLayoutHeight(fontSize)};
    line-height: ${calcLayoutHeight(lineHeight)};
    font-weight: ${fontWeight};
  `
}
