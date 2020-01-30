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
    padding-top: 30px;
    p {
      line-height: 30px;
      word-spacing: 10px;
    }
  }

  .content {
    margin-top: 50px;
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
                Kenneth Nnamdi Opara obtained his B.Sc. Zoology (1985); M.Sc.
                Molecular Parasitology (1991) and Ph.D Veterinary Parasitology
                (2005), from the University of Ibadan, Nigeria. His M.Sc.
                Molecular Parasitology research, focused on the inhibition of
                proteases released by trypanosomes. These proteases are the
                potent inducers of blood coagulation and platelet aggregation in
                infected patients. This study implicated some lysosomotropic
                agent as great inhibitors. His Ph.D research was on the
                Epidemiology of Human Onchocerciasis along Nigeria –Cameroon
                border. A study that has elucidated the cross-border
                transmission of onchocerciasis in Nigeria. Presently, he is a
                Research Professor in Public Health Parasitology and Entomology
                in the University of Uyo, Nigeria. His career as a University
                lecturer and researcher span over 26 years. He has supervised
                over 31 postgraduate students’ theses and several
                undergraduates’ projects. He was appointed Head, Department of
                Public Health Technology, Federal university of Technology,
                Owerri (2008 – 2010) while on Sabbatical and Head, Department of
                Zoology, University of Uyo (2010 – 2012). He is the Chairman,
                Faculty of Science Research Committee. He has received national
                and international funding to support his research in the control
                and elimination of some neglected tropical disease. He has
                participated in many operational researches involving the use of
                current and up-to-date diagnostic tools for some neglected
                tropical diseases. He has published more than 75 peer-reviewed
                articles on parasites and vectors of human and animal diseases
                in National and International Journals. He has attended a lot of
                conferences, seminars and workshops where papers were presented
                on neglected tropical diseases, within and outside the country.
                He is on the editorial board of 3 scientific international
                journals and has acted as a reviewer for over 21 National and
                International Journals. He was a Member of WHO/APOC Expert
                Committee on the Elimination of Onchocerciasis in Africa (2009);
                Member WHO/APOC adviser on Entomological Assessment of
                Interruption of Onchocerciasis in Africa, currently member
                Nigeria Onchocerciasis Elimination Committee. He is a Research
                Consultant to Federal Ministry of Health (FMoH), Helen Keller,
                Sight Savers and RTI/Envision among other NGDOs in Nigeria. His
                Research interest is focused on Molecular, Parasitological and
                Entomological Studies on Neglected Tropical diseases
                (Schistomomiasis, STHs, Lymphatic filariasis, Onchocerciasis and
                Trypanosomiasis) and their vectors.
              </p>

              <p className="pull-right">
                <Link className="btn btn-info" to="/profile">
                  read more...
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
