import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const DummyPage = () => (
  <Layout>
    <Seo title="Dummy Page" />
    <h1>Hi from the dummy page</h1>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default DummyPage
