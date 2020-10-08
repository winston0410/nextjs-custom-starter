import Document, { Html, Head, Main, NextScript } from 'next/document'
import Footer from '../components/footer/Footer'
import Header from '../components/header/Header'
import Favicon from '../components/head/Favicon'
import PwaMetaTags from '../components/head/PwaMetaTags'
import { NextSeo, DefaultSeo } from 'next-seo'

class MyDocument extends Document {
  static async getInitialProps (ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render () {
    return (
      <Html lang="">
      //nextSEO doesn't work here
        <Head>
          <Favicon />
          <PwaMetaTags />
        </Head>
        <body>
          <Header />
          <main>
            <Main />
          </main>
          <NextScript />
          <Footer />
        </body>
      </Html>
    )
  }
}

export default MyDocument
