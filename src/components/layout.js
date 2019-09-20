import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ThemeProvider } from "styled-components"
import { theme } from "../theme"
import { GlobalStyle } from "../theme/globalstyles"
import NavLayout from "./navlayout"
import styled from "styled-components"

const LayoutStyles = styled.div`
  .container-fluid {
    padding-right: 0;
    padding-left: 0;
  }
`

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <ThemeProvider theme={theme}>
        <LayoutStyles>
          <GlobalStyle />
          <div className="container-fluid">
            <main>{children}</main>

            <footer></footer>
          </div>
          <NavLayout />
        </LayoutStyles>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
