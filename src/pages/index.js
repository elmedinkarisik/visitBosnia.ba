import * as React from "react"
import { useState } from "react"
import Email from "../components/Email"
import Jumbotron from "../components/Jumbotron"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Stats from "../components/Stats"
import Testimonials from "../components/Testimonials"
import Trips from "../components/Trips"
import FormSuccess from "../components/FormSuccess"

const IndexPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false)

  function submitForm() {
    setIsSubmitted(true)
  }
  return (
    <Layout>
      <Seo title="Home" />
      <Jumbotron />
      <Trips heading="Our Best Destinations" />
      <Testimonials />
      <Stats />
      {!isSubmitted ? <Email submitForm={submitForm} /> : <FormSuccess />}
    </Layout>
  )
}

export default IndexPage
