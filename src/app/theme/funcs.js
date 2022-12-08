export const isThemeNode = (node) => {
  if (!node || Array.isArray(node) || typeof node !== 'object') return false

  return true
}

const getCSSVarsObject = (theme) => {
  const keys = Object.keys(theme)
  const result = {}
  keys.forEach((key) => {
    const node = theme[key]
    if (isThemeNode(node)) {
      const nodeKeys = getCSSVarsObject(node)
      Object.keys(nodeKeys).forEach((nodeKey) => {
        const nodeValue = nodeKeys[nodeKey]
        result[`${key}-${nodeKey}`] = nodeValue
      })
    } else {
      result[`${key}`] = node
    }
  })

  return result
}

export const getCSSVarList = (theme) => {
  const cssVars = getCSSVarsObject(theme)
  return Object.entries(cssVars).map(([key, value]) => `--${key.replace(':', '')}: ${value};`)
}

const getCSSPropertyVarName = (component, property, prefix = '-') =>
  `var(${prefix}-${component}-${property})`.replace(':', '')

export const getCSSPropertiesList = (theme, componentName, prefix = '-') => {
  if (!componentName || !(componentName in theme)) return []
  const component = theme[componentName]

  let result = []

  Object.keys(component).forEach((property) => {
    if (property.includes(':') && isThemeNode(component[property])) {
      const propertyPrefix = `${prefix}-${componentName}`
      result[`&${property}`] = getCSSPropertiesList(component, property, propertyPrefix)
    } else {
      result[property.replace(':', '')] = getCSSPropertyVarName(componentName, property, prefix)
    }
  })

  return result
}
