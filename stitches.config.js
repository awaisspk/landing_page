import { createStitches, createTheme } from '@stitches/react'
import { gray, grayDark } from '@radix-ui/colors'

export const stitchesConfig = createStitches({
  theme: {
    colors: {
      //color tokens
      // neutrals
      black: '#161616',
      white: '#fefefe',
      neutral50: '#fcfcfc',
      neutral100: '#e8e8e8',
      neutral200: '#c7c7c7',
      neutral300: '#8f8f8f',
      neutral400: '#555555',
      neutral500: '#2f2f2f',
      ...gray,

      //semantic tokens

      primary: '$white',
      secondary: '$black',
      tertiary: '$neutral400',
      accent: '$neutral100',
    },
    fonts: {
      body: 'Inter, apple-system, Verdana, sans-serif',
      heading: 'Poppins, apple-system, Verdana, sans-serif',
    },
    space: {
      1: '4px',
      2: '8px',
      3: '16px',
      4: '32px',
      5: '64px',
      6: '128px',
      7: '256px',
      8: '512px',
    },
    radii: {
      xs: '2px',
      sm: '4px',
      md: '8px',
      lg: '16px',
      full: '9999px',
      small: '0.25em',
      medium: '0.5em',
      large: '1em',
    },
    media: {
      dark: '(prefers-color-scheme: dark)',
      bp1: '(min-width: 375px)',
      bp2: '(min-width: 768px)',
      bp3: '(min-width: 1024px)',
      bp4: '(min-width: 1440px)',
    },
  },
})

export const darkTheme = stitchesConfig.createTheme({
  colors: {
    ...grayDark,
    primary: '$black',
    secondary: '$white',
    tertiary: '$neutral300',
    accent: '$neutral500',
  },
})

export const { styled, getCssText, css, keyframes } = stitchesConfig
