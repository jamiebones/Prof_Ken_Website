import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HomeImage from "../images/homeImage.jpg"
import styled from "styled-components"

const IndexStyles = styled.div`
  .home-image {
    min-width: 100%;
    margin-left: -15px;
    margin-right: 15px;
  }
  .fixed-div {
    background: url(${HomeImage});
    background-repeat: no-repeat;
    background-size: cover;
  }
  .content-home {
    padding-top: 50px;
    p {
      line-height: 40px;
    }
  }

  .pull-right {
    float: right;
  }

  @media (max-width: ${({ theme }) => theme.mobile}) {
    .content-home {
      padding-top: 10px;
      p {
        line-height: 30px;
      }
    }
  }
`

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <IndexStyles>
      <div className="row no-gutters">
        <div className="col-md-6">
          <div className="fixed-div"></div>
        </div>

        <div className="col-md-6">
          <div className="content">
            <div className="content-home">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. vero
                ea officia aliquid distinctio quasi. Odio, architecto. laborum
                quo repudiandae provident sed porro neque modi rem ea illo quod
                iste quia dolorum. Enim architecto tenetur maxime nam eos,
                mollitia natus quam porro recusandae odit nemo rerum voluptas
                deserunt, tempore in. Ad dolor id iste reprehenderit dolores
                esse officia est, explicabo dolore voluptate quas ea commodi, ex
                nobis temporibus unde, ullam architecto. Praesentium atque
                expedita est
              </p>

              <p className="pull-right">
                <Link className="btn btn-info" to="/profile">
                  Read more...
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </IndexStyles>
  </Layout>
)

export default IndexPage
