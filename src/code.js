import React from 'react'
import { stripTrailingNewline, parseLanguage } from './utils'
import Highlighted from './highlighted'

const Code = ({
  /*
    Code to parse. Following MDX 2 conventions, it is expected that `code` properties
    are present on `children`. For example, given the MDX:
    ```js
    console.log('The code')
    ```
    it's expected that `children.props.className` is equal to `'language-js'`
   */
  children,
  /*
    Optional value passed directly as a prop. Preferred over other values when present.
    In MDX 2, this looks like:
    ```language="js"
    console.log('The code')
    ```
   */
  language,
  /*
    Value passed directly as a prop.
    In MDX 2, this looks like:
    ```theme="sunrise"
    console.log('The code')
    ```
   */
  theme = 'monochrome',
}) => {
  const content =
    typeof children === 'string' ? children : children?.props?.children
  const code = stripTrailingNewline(content)

  const parsedLanguage = language ?? parseLanguage(children?.props?.className)

  return <Highlighted code={code} language={parsedLanguage} theme={theme} />
}

export default Code
