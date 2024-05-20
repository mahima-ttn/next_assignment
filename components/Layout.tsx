import Footer from "./Footer"
import NavLinks from "./NavLinks"
interface LayoutProps{
  children?:string[]
}

const Layout = ({children}:LayoutProps) => {
  return (
    <>
        <NavLinks />
    <div>
        {children}
        <Footer />
        </div></>
  )
}

export default Layout