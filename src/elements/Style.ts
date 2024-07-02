import type { Field } from 'payload'

export const styleField: Field = {
  type: 'radio',
  name: 'style',
  label: 'Style',
  required: true,
  options: [
    {
      label: 'BG: Dark Purple',
      value: 'dark-purple',
    },
    {
      label: 'BG: Light Purple',
      value: 'light-purple',
    },
    {
      label: 'BG: Blue',
      value: 'blue',
    },
    {
      label: 'BG: White',
      value: 'white',
    },
    {
      label: 'BG: Black',
      value: 'black',
    },
    {
      label: 'BG: Red',
      value: 'red',
    },
    {
      label: 'BG: Cyan',
      value: 'cyan',
    },
    {
      label: 'BG: Orange',
      value: 'orange',
    },
  ],
}
