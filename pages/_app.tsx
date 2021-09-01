import { darkTheme } from '../stitches.config'
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      attribute="class"
      defaultTheme="dark"
      value={{ light: 'light-theme', dark: darkTheme.className }}
    >
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
