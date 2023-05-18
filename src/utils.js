export const stripTrailingNewline = (str) => {
  if (typeof str === 'string') {
    // Trimming string will remove trailing new lines
    return str.trim()
  }
  return str
}

export const parseLanguage = (className) => {
  return className ? className.replace(/language-/, '') : undefined
}
