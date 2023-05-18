import React from 'react'
import { useThemeUI, Box } from 'theme-ui'
import { alpha } from '@theme-ui/color'
import { LiveProvider, LiveEditor, LiveError, LivePreview } from 'react-live'
import { stripTrailingNewline, parseLanguage } from './utils'
import { themes } from './themes'
import Highlighted from './highlighted'

const LiveCode = ({
  scope,
  transform,
  children,
  language,
  live = false,
  theme = 'monochrome',
}) => {
  const content =
    typeof children === 'string' ? children : children?.props?.children
  const code = stripTrailingNewline(content)

  const parsedLanguage = language ?? parseLanguage(children?.props?.className)

  const {
    theme: { fonts },
  } = useThemeUI()

  if (live) {
    return (
      <LiveProvider
        code={code}
        theme={{ styles: [] }}
        scope={scope}
        transformCode={transform}
      >
        <Box sx={{ my: [3, 4, 4, 5] }}>
          <Box
            sx={{
              p: [3, 3, 3, 4],
              overflow: 'auto',
              borderColor: 'muted',
              borderStyle: 'solid',
              borderWidth: '1px',
              borderBottomWidth: '0px',
              borderTopLeftRadius: '1px',
              borderTopRightRadius: '1px',
            }}
          >
            <LivePreview />
            <Box
              sx={{
                '#error': {
                  p: [3],
                  mb: [1],
                  mt: [1],
                  fontSize: [2],
                  bg: alpha('red', 0.2),
                  color: 'red',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  whiteSpace: 'break-spaces',
                },
              }}
            >
              <LiveError id='error' />
            </Box>
          </Box>
          <Box
            as='pre'
            variant='styles.pre'
            sx={{
              ...themes[theme],
              padding: [0, 0, 0, 0],
              '#editor': {
                fontFamily: 'mono',
              },
              '#editor > textarea': {
                '&:focus-visible': {
                  outline: 'none',
                },
                '&:focus-visible': {
                  outline: 'none !important',
                  borderStyle: 'solid !important',
                  borderColor: ({ colors }) => `${colors.secondary} !important`,
                  borderWidth: '1px !important',
                },
                borderStyle: 'solid !important',
                borderColor: ({ colors }) => `${colors.muted} !important`,
                borderWidth: '1px !important',
                padding: '16px !important',
                borderBottomLeftRadius: '1px',
                borderBottomRightRadius: '1px',
                '@media screen and (min-width: 40em)': {
                  padding: '16px !important',
                },
                '@media screen and (min-width: 64em)': {
                  padding: '16px !important',
                },
                '@media screen and (min-width: 102em)': {
                  padding: '24px !important',
                },
              },
              '#editor > pre': {
                padding: '16px !important',
                '@media screen and (min-width: 40em)': {
                  padding: '16px !important',
                },
                '@media screen and (min-width: 64em)': {
                  padding: '16px !important',
                },
                '@media screen and (min-width: 102em)': {
                  padding: '24px !important',
                },
              },
            }}
          >
            <LiveEditor
              style={{ fontFamily: fonts['mono'] }}
              id='editor'
              textareaId='text-area'
            />
          </Box>
        </Box>
      </LiveProvider>
    )
  }

  return <Highlighted code={code} language={parsedLanguage} theme={theme} />
}

export default LiveCode
