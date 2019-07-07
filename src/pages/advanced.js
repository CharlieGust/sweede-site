import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Skus from "../components/Products/Skus"

const AdvancedPage = () => (
    <Layout>
        <SEO title="Advanced" />
        <h1>Example, advanced</h1>
        <Skus />
    </Layout>
)

export default AdvancedPage