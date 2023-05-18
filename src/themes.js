export const themes = {
  monochrome: {
    '.comment,.prolog,.doctype,.cdata,.punctuation,.operator,.entity,.url': {
      color: 'secondary',
    },
    '.property,.boolean,.deleted,.class-name,.variable': {
      color: 'primary',
    },
    '.function,.boolean,.number,.constant,.symbol,.class-name': {
      color: 'primary',
    },
    '.atrule, .attr-value, .keyword': {
      color: 'primary',
    },
    '.selector, .string, .char, .inserted': {
      color: 'secondary',
    },
  },
  triadic: {
    '.comment,.prolog,.doctype,.cdata': {
      color: 'secondary',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value': {
      color: 'yellow',
    },
    '.punctuation,.operator': {
      color: 'primary',
    },
    '.entity,.url,.symbol,.number,.variable,.constant,.property,.regex,.inserted,.class-name':
      {
        color: 'yellow',
      },
    '.atrule,.keyword,.attr-name,.selector,.boolean': {
      color: 'primary',
    },
    '.function,.deleted,.decorator': {
      color: 'teal',
    },
    '.tag.punctuation': {
      color: 'teal',
    },
    '.function-variable': {
      color: 'teal',
    },
    '.keyword': {
      color: 'red',
    },
  },
  warm: {
    '.comment,.prolog,.doctype,.cdata': {
      color: 'secondary',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value': {
      color: 'yellow',
    },
    '.punctuation,.operator': {
      color: 'primary',
    },
    '.entity,.url,.symbol,.number,.variable,.constant,.property,.regex,.inserted,.class-name':
      {
        color: 'yellow',
      },
    '.atrule,.keyword,.attr-name,.selector,.boolean': {
      color: 'primary',
    },
    '.function,.deleted,.decorator': {
      color: 'orange',
    },
    '.tag.punctuation': {
      color: 'orange',
    },
    '.function-variable': {
      color: 'orange',
    },
    '.keyword': {
      color: 'red',
    },
  },
  sunrise: {
    '.comment,.prolog,.doctype,.cdata': {
      color: 'secondary',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value': {
      color: 'pink',
    },
    '.punctuation,.operator': {
      color: 'primary',
    },
    '.entity,.url,.symbol,.number,.variable,.constant,.property,.regex,.inserted,.class-name':
      {
        color: 'pink',
      },
    '.atrule,.keyword,.attr-name,.selector,.boolean': {
      color: 'primary',
    },
    '.function,.deleted,.decorator': {
      color: 'orange',
    },
    '.tag.punctuation': {
      color: 'orange',
    },
    '.function-variable': {
      color: 'orange',
    },
    '.keyword': {
      color: 'red',
    },
  },
  cool: {
    '.comment,.prolog,.doctype,.cdata': {
      color: 'secondary',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value': {
      color: 'teal',
    },
    '.punctuation,.operator': {
      color: 'primary',
    },
    '.entity,.url,.symbol,.number,.variable,.constant,.property,.regex,.inserted,.class-name':
      {
        color: 'teal',
      },
    '.atrule,.keyword,.attr-name,.selector,.boolean': {
      color: 'primary',
    },
    '.function,.deleted,.decorator': {
      color: 'purple',
    },
    '.tag.punctuation': {
      color: 'purple',
    },
    '.function-variable': {
      color: 'purple',
    },
    '.keyword': {
      color: 'blue',
    },
  },
  polychrome: {
    '.comment,.prolog,.doctype,.cdata': {
      color: 'secondary',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value': {
      color: 'green',
    },
    '.operator,.punctuation': {
      color: 'primary',
    },
    '.entity,.url,.symbol,.number,.variable,.constant,.property,.regex,.inserted,.class-name':
      {
        color: 'red',
      },
    '.atrule,.keyword,.attr-name,.selector,.boolean': {
      color: 'orange',
    },
    '.function,.deleted,.decorator': {
      color: 'teal',
    },
    '.tag.punctuation': {
      color: 'teal',
    },
    '.function-variable': {
      color: 'teal',
    },
    '.keyword': {
      color: 'purple',
    },
  },
}
