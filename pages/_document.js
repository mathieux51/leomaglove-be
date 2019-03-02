import Document, { Head, Main, NextScript } from "next/document"
import { ServerStyleSheet } from "styled-components"

const script = {
  __html: `
    (function() {
      if (sessionStorage.fontsLoadedFoutWithClass) {
        document.documentElement.className += ' fonts-loaded'
      return
      }
      if ('fonts' in document) {
        Promise.all([
        document.fonts.load("normal 400 1em 'ILoveGlitter'"),
        ]).then(function (){
          document.documentElement.className += ' fonts-loaded'
          sessionStorage.fontsLoadedFoutWithClass = true  
        })
      }})()
`
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // 💅🏻
    const sheet = new ServerStyleSheet()
    try {
      const originalRenderPage = ctx.renderPage
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        })
      const initialProps = await Document.getInitialProps(ctx)
      return {
        ...initialProps,
        styles: [...initialProps.styles, ...sheet.getStyleElement()]
      }
    } finally {
      sheet.seal()
    }
  }
  render() {
    return (
      <html lang="fr">
        <Head>{this.props.styleTags}</Head>
        <body>
          <script dangerouslySetInnerHTML={script} />
          <Main />
          {/*  React-components outside of <Main /> will not be initialised by the browser. Do not add application logic here. If you need shared components in all your pages (like a menu or a toolbar), take a look at the App component instead. */}
          <NextScript />
        </body>
      </html>
    )
  }
}
