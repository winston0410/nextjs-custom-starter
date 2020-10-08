import FooterNavigation from './FooterNavigation'
import SocialMedia from './SocialMedia'
import Contact from './Contact'
import Copyright from './Copyright'

function Footer () {
  return (
    <footer className="bg-#eae9e4">
      This is the footer
      <Contact />
      <SocialMedia />
      <FooterNavigation />
      <Copyright />
    </footer>
  )
}

export default Footer
