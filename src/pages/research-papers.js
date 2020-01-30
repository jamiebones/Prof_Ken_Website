import React, { useState } from "react"
import { MemorableQuotes } from "../utilities"
import styled from "styled-components"

import Layout from "../components/layout"
import SEO from "../components/seo"
const ResearchPapersStyles = styled.div`
  .academic-div {
    margin-bottom: 5px;
    span {
      margin: 4px;
    }
  }
  .prof {
    color: green;
    font-weight: bold;
  }
  .year {
    font-weight: 700;
    color: blue;
  }
  hr {
    border: 1px solid black;
  }
`

export default function ResearchPapers() {
  const quote = MemorableQuotes()
  const [newQuote, setQuote] = useState(quote && quote[0])

  //   setInterval(() => {
  //     const val = Math.floor(Math.random() * quote.length)
  //     setQuote(quote[val])
  //   }, 5000)

  return (
    <Layout>
      <SEO title="Professor Ken Okpara research works and publications." />
      <ResearchPapersStyles>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="fixed-div">
              <p className="quotes">
                {newQuote.quote}

                <span className="quote-author">{newQuote.author}</span>
              </p>
            </div>
          </div>

          <div className="col-md-6">
            <div className="content">
              <div className="academic-div">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti error provident explicabo similique mollitia id
                      magnam dicta, exercitationem vitae aspernatur, ut
                      consectetur ea{" "}
                    </p>

                    <p>
                      Authors :{" "}
                      <span className="prof">Professor Ken Okpara</span>,
                      <span>Professor Jajjaja akkakak</span>,
                      <span>Dr Mathew Polikospina</span>
                    </p>

                    <p>
                      Year Pulished: <span className="year">2013</span>
                    </p>

                    <p>
                      Weblink:{" "}
                      <span>
                        <a href="http://www.facebook.com">Google Scholars</a>
                      </span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="academic-div">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti error provident explicabo similique mollitia id
                      magnam dicta, exercitationem vitae aspernatur, ut
                      consectetur ea{" "}
                    </p>

                    <p>
                      Authors :{" "}
                      <span className="prof">Professor Ken Okpara</span>,
                      <span>Professor Jajjaja akkakak</span>,
                      <span>Dr Mathew Polikospina</span>
                    </p>

                    <p>
                      Year Pulished: <span className="year">2013</span>
                    </p>

                    <p>
                      Weblink:{" "}
                      <span>
                        <a href="http://www.facebook.com">Google Scholars</a>
                      </span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="academic-div">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti error provident explicabo similique mollitia id
                      magnam dicta, exercitationem vitae aspernatur, ut
                      consectetur ea{" "}
                    </p>

                    <p>
                      Authors :{" "}
                      <span className="prof">Professor Ken Okpara</span>,
                      <span>Professor Jajjaja akkakak</span>,
                      <span>Dr Mathew Polikospina</span>
                    </p>

                    <p>
                      Year Pulished: <span className="year">2013</span>
                    </p>

                    <p>
                      Weblink:{" "}
                      <span>
                        <a href="http://www.facebook.com">Google Scholars</a>
                      </span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="academic-div">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti error provident explicabo similique mollitia id
                      magnam dicta, exercitationem vitae aspernatur, ut
                      consectetur ea{" "}
                    </p>

                    <p>
                      Authors :{" "}
                      <span className="prof">Professor Ken Okpara</span>,
                      <span>Professor Jajjaja akkakak</span>,
                      <span>Dr Mathew Polikospina</span>
                    </p>

                    <p>
                      Year Pulished: <span className="year">2013</span>
                    </p>

                    <p>
                      Weblink:{" "}
                      <span>
                        <a href="http://www.facebook.com">Google Scholars</a>
                      </span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="academic-div">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti error provident explicabo similique mollitia id
                      magnam dicta, exercitationem vitae aspernatur, ut
                      consectetur ea{" "}
                    </p>

                    <p>
                      Authors :{" "}
                      <span className="prof">Professor Ken Okpara</span>,
                      <span>Professor Jajjaja akkakak</span>,
                      <span>Dr Mathew Polikospina</span>
                    </p>

                    <p>
                      Year Pulished: <span className="year">2013</span>
                    </p>

                    <p>
                      Weblink:{" "}
                      <span>
                        <a href="http://www.facebook.com">Google Scholars</a>
                      </span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>

              <div className="academic-div">
                <div className="card">
                  <div className="card-body">
                    <p className="card-title">
                      {" "}
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Corrupti error provident explicabo similique mollitia id
                      magnam dicta, exercitationem vitae aspernatur, ut
                      consectetur ea{" "}
                    </p>

                    <p>
                      Authors :{" "}
                      <span className="prof">Professor Ken Okpara</span>,
                      <span>Professor Jajjaja akkakak</span>,
                      <span>Dr Mathew Polikospina</span>
                    </p>

                    <p>
                      Year Pulished: <span className="year">2013</span>
                    </p>

                    <p>
                      Weblink:{" "}
                      <span>
                        <a href="http://www.facebook.com">Google Scholars</a>
                      </span>
                    </p>
                    <hr />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ResearchPapersStyles>
    </Layout>
  )
}
