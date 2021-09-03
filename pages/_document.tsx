import React from 'react'
import NextDocument, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from 'next/document'
import { getCssText } from '../stitches.config'

export default class Document extends NextDocument {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await NextDocument.getInitialProps(ctx)

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </>
      ),
    }
  }

  render() {
    const setInitialTheme = `function getTheme(){var e=window.localStorage.getItem("--dark-theme");if("system"!==e)return e}var theme=getTheme();theme&&(document.documentElement.dataset.theme=theme);`
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            dangerouslySetInnerHTML={{ __html: setInitialTheme }}
          />

          <link
            rel="preload"
            href="/fonts/inter-var-latin.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
          <link
            rel="preload"
            href="/fonts/poppins-v15-latin-600.woff2"
            as="font"
            type="font/woff2"
            crossOrigin="anonymous"
          />
        </Head>
        <body style={{ transition: 'backgroundColor 1s ease' }}>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
