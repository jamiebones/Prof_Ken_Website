import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"

const ContactStyles = styled.div``

export default function contact() {
  return (
    <Layout>
      <SEO title="Home" />
      <ContactStyles>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="fixed-div"></div>
          </div>

          <div className="col-md-6">
            <div className="content">
              <div className="content-home">
                <form onSubmit={event => event.preventDefault()}>
                  <div class="form-group">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      placeholder="name"
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="usr">Email:</label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      placeholder="your email address"
                    />
                  </div>

                  <div class="form-group">
                    <label htmlFor="message">Message:</label>
                    <textarea
                      rows="7"
                      cols="80"
                      id="message"
                      className="form-control"
                      placeholder="your message"
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Leave a message for Prof Ken
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </ContactStyles>
    </Layout>
  )
}
