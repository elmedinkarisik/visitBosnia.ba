import * as React from "react"
import Footer from "./Footer"
import Header from "./Header"
import { GlobalStyle } from "./styles/GlobalStyles"
import favicon from "../images/gatsby-icon.png"
import Helmet from "react-helmet"

const Layout = ({ children }) => {
  return (
    <>
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>
      <GlobalStyle />
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
