import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeModal from "../components/homeModal";

const IndexPage = () => (
  <Layout style={'bg-home'}>
    <SEO title="Home" />
   <HomeModal/>
  </Layout>
)

export default IndexPage
