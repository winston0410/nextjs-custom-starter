import '../components/index.css'
import footer from '../data/footer.json'
import { NextSeo, DefaultSeo } from 'next-seo'

function MyApp ({ Component, pageProps }) {
  console.log(pageProps)
  return (
    <>
      <NextSeo
        title="Using More of Config"
        description="This example uses more of the available config options."
        canonical="https://www.canonical.ie/"
        openGraph={{
          url: 'https://www.url.ie/a',
          title: 'Open Graph Title',
          description: 'Open Graph Description',
          images: [
            {
              url: 'https://www.example.ie/og-image-01.jpg',
              width: 800,
              height: 600,
              alt: 'Og Image Alt'
            },
            {
              url: 'https://www.example.ie/og-image-02.jpg',
              width: 900,
              height: 800,
              alt: 'Og Image Alt Second'
            },
            { url: 'https://www.example.ie/og-image-03.jpg' },
            { url: 'https://www.example.ie/og-image-04.jpg' }
          ],
          site_name: 'SiteName'
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: 'summary_large_image'
        }}
      />
      <Component {...pageProps} />
    </>
  )
}

export async function getServerSideProps () {
  return {
    props: {
      data: 'Hello'
    }
  }
}

export default MyApp
