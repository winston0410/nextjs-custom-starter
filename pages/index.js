// import footer from '../data/footer.json'
// import { NextSeo, DefaultSeo } from 'next-seo'

function IndexPage ({ data }) {
  // console.log(data)

  return (
    <>
      <div className="py-20">
        <h1 className="text-5xl text-center text-accent-1">
          Next.js + Tailwind CSS
        </h1>
      </div>
    </>
  )
}

// export async function getServerSideProps () {
//   return {
//     props: {
//       data: footer
//     }
//   }
// }

export default IndexPage
