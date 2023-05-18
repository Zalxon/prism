import React from 'react'
import Highlight, { defaultProps } from 'prism-react-renderer'
import { Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { stripTrailingNewline, parseLanguage } from './utils'
import { themes } from './themes'

const Highlighted = ({ code, language, theme }) => {
  return (
    <Highlight
      {...defaultProps}
      code={code}
      language={language}
      theme={undefined}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <Box
          as='pre'
          variant='styles.pre'
          sx={{ ...themes[theme], my: [3, 4, 4, 5] }}
          className={className}
        >
          {tokens.map((line, i) => (
            <div key={i} {...getLineProps({ line, key: i })}>
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token, key })} />
              ))}
            </div>
          ))}
        </Box>
      )}
    </Highlight>
  )
}

export default Highlighted
