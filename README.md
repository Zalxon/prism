
# zalxon / prism

**components for syntax highlighting**

[![GitHub][github-badge]][github]
[![Build Status]][actions]
![MIT License][]
![NPM Version][]

[github]: https://github.com/zalxon/prism
[github-badge]: https://badgen.net/badge/-/github?icon=github&label
[build status]: https://github.com/zalxon/prism/actions/workflows/main.yml/badge.svg
[actions]: https://github.com/zalxon/prism/actions/workflows/main.yml
[mit license]: https://badgen.net/badge/license/MIT/blue
[npm version]: https://badgen.net/npm/v/@zalxon/prism

Components for syntax highlighting using `prism`. Includes a `Code` component for rendering code and a `LiveCode` component for interactively editing JavaScript and viewing the results. Pairs well with MDX.

See these components demoed at [design.zalxon.com](https://design.zalxon.com).

## basic usage

To use as a standalone component, just provide the language and pass the code as children.

```jsx
import { Code, LiveCode } from '@zalxon/prism'

export const Index = () => {
  return <>
  	<Code language='python'>a = 2</Code>
  	<LiveCode language='jsx' live>let a = 2</Code>
  </>
}
```

When using the `LiveCode` component you must specify the `live` flag to include the live editor. Otherwise it will render using the basic `Code` component as a fallback. We require setting the flag so that you can use the `LiveCode` component with MDX for a mix of both live and static code.

## usage with MDX

In order to use markdown meta props like `live` and `theme` discussed below, note that you will need to use [`remark-mdx-code-meta`]O(https://github.com/remcohaszing/remark-mdx-code-meta) or [another solution for syntax highlighting with the meta field](https://mdxjs.com/guides/syntax-highlighting/#syntax-highlighting-with-the-meta-field).

Once enabled, import the component(s) you want and pass to an `MDXProvider`.

```jsx
import { MDXProvider } from '@mdx-js/react'
import { LiveCode } from '@zalxon/prism'

const components = {
  pre: LiveCode,
}

return <MDXProvider components={components}>...</MDXProvider>
```

So long as you are using the `LiveCode` component, you can specify a `live` flag on a code fence in MDX and get a live code editor.

This will be rendered as normal code

````
```jsx
const a = 2
```
````

This will be rendered as a live code editor

````
```jsx live
const a = 2
```
````

## color schemes

Both the `Code` and `LiveCode` components take an optional `theme` property which specifies one of a fixed set of color themes via a string name. Here they are.

You can set the `theme` once when defining the component, like this.

```jsx
import { MDXProvider } from '@mdx-js/react'
import { Code } from '@zalxon/prism'

const components = {
  pre: ({ ...props }) => <Code theme='polychrome' {...props} />,
}

return <MDXProvider components={components}>...</MDXProvider>
```

This will then apply to all code rendered via MDX.

You can also specify a different theme on an individual code fence, which will override the one set on the component.

For example, this will be rendered in the `monochrome` theme

````
```jsx theme=monochrome
const a = 2
```
````

And this will be rendered in the `polychrome` theme

````
```jsx theme=polychrome
const a = 2
```
````

## live code options

The `LiveCode` component also takes optional `scope` and `transform` properties. The `scope` specifies the variables you want to be available in the scope of the code editor, and the `transform` is a function to apply to code before execution.

As an example, the following ensures that all code is interpreted as a React fragment unless it is a function, and adds `useState` to the scope. Note that we set these properties while defining the component passed to the `MDXProvider`.

```jsx
import { useState } from 'react'
import { MDXProvider } from '@mdx-js/react'
import { LiveCode } from '@zalxon/prism'

const transform = (src) => {
  if (!src.startsWith('()')) {
    return `<>${src}</>`
  } else {
    return `${src}`
  }
}

const scope = {
  useState,
}

const components = {
  pre: ({ ...props }) => (
    <LiveCode transform={transform} scope={scope} {...props} />
  ),
}

return <MDXProvider components={components}>...</MDXProvider>
```

## development

To update a component and publish a new version, first make your changes, then follow these steps

- Increase the version number in `package.json`
- `npm run build`
- `npm publish`

## license

All the code in this repository is [MIT](https://choosealicense.com/licenses/mit/) licensed, but we request that you please provide attribution if reusing any of our digital content (graphics, logo, articles, etc.).

## about us

Zalxon is a non-profit organization that uses data and science for since and healthcare action. We aim to improve the transparency and scientific integrity of since and healthcare solutions with open data and tools. Find out more at [zalxon.com](https://zalxon.com/) or get in touch by [opening an issue](https://github.com/zalxon/prism/issues/new) or [sending us an email](mailto:hello@zalxon.com).
