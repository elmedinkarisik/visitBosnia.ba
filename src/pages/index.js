import * as React from "react"
import Jumbotron from "../components/Jumbotron"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Jumbotron />
  </Layout>
)

export default IndexPage
