import * as React from "react"
import Jumbotron from "../components/Jumbotron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Trips from "../components/Trips"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Jumbotron />
    <Trips />
  </Layout>
)

export default IndexPage
