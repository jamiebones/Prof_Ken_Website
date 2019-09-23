import React from "react"
import styled from "styled-components"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageOne from "../images/ken1.jpg"
import ImageTwo from "../images/ken2.jpg"
import ImageThree from "../images/ken3.jpg"

const ProfileStyles = styled.div`
  .composition {
    position: relative;
    height: 100vh;
    width: 50vw;

    &__photo {
      width: 55%;

      box-shadow: 0 1.5rem 4rem rgba(0, 0, 0, 0.4);
      border-radius: 2px;
      position: absolute;
      z-index: 10;
      transition: all 0.2s;
      outline-offset: 2rem;

      &--p1 {
        left: 0;
        top: 8rem;
      }
      &--p2 {
        right: 0;
        top: 8rem;
      }
      &--p3 {
        left: 20%;
        top: 13rem;
      }
      &:hover {
        transform: scale(1.05) translateY(-0.5rem);
        box-shadow: 0 2.5rem 4rem rgba($color-black, 0.5);
        z-index: 20;

        outline: 1.5rem solid $color-primary;
      }
    }
    //When we hover on composition, select the composition__photo that is NOT hovered:
    &:hover &__photo:not(:hover) {
      transform: scale(0.95);
    }
  }
`

export default function profile() {
  return (
    <Layout>
      <SEO title="Profile page of Professor Kenneth Okpara." />
      <ProfileStyles>
        <div className="row no-gutters">
          <div className="col-md-6">
            <div className="fixed-div">
              <div className="composition">
                <img
                  alt="Professor Kenneth Okpara"
                  className="composition__photo composition__photo--p1"
                  src={ImageTwo}
                />
                <img
                  alt="Professor Kenneth Okpara"
                  className="composition__photo composition__photo--p2"
                  src={ImageTwo}
                />
                <img
                  alt="Professor Kenneth Okpara"
                  className="composition__photo composition__photo--p3"
                  src={ImageThree}
                />
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div className="content">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo
                nisi quasi eaque itaque id veniam esse a maxime ullam facere
                ducimus dicta cum aspernatur dignissimos officiis, distinctio
                deleniti, amet illum, perferendis velit quae. Itaque aspernatur
                consectetur laborum numquam voluptatem fuga quibusdam
                dignissimos eaque et exercitationem doloribus rem quae error,
                odio dolore non repellat voluptatibus accusantium, maxime
                praesentium distinctio quasi? Quidem magnam odit illo doloribus
                sapiente vel inventore adipisci explicabo doloremque, laboriosam
                facilis velit officia dolorem animi impedit totam dolore
                voluptate commodi veritatis nesciunt tempore! Modi ullam quis
                dolore accusantium molestiae. Provident temporibus nobis
                suscipit illo labore autem corporis nesciunt fugiat ad placeat.
                Eligendi id, magnam fugiat iste, harum iure unde delectus
                excepturi voluptates quos iusto repellendus. Beatae quibusdam
                cum qui quas earum iure dicta distinctio quae numquam officia
                delectus, labore sapiente. Eligendi rem assumenda itaque ex odio
                maxime alias architecto explicabo, iure inventore, eos tenetur
                temporibus est veritatis dolores, harum hic non reprehenderit
                quisquam? Minima, quaerat sint. Dignissimos odio voluptates amet
                sunt iure! Explicabo, quos. Soluta vero in maxime. Cumque odio
                harum hic assumenda autem fuga recusandae neque nam atque minus
                dignissimos veritatis, reiciendis odit rerum quas, tenetur
                molestiae rem quos consequatur magnam ratione qui! Adipisci
                harum fuga quasi, at neque suscipit voluptatibus quo! Sed a
                commodi quia placeat cupiditate cum, harum veritatis veniam
                quibusdam omnis ipsa, tenetur odit quaerat impedit iusto soluta
                explicabo consectetur nostrum doloremque, accusamus voluptatum
                repudiandae recusandae! Cupiditate necessitatibus, ipsum libero
                dicta asperiores ut totam dolore? Facilis reiciendis, eos
                aperiam, corporis sint esse recusandae et nobis fugit, ut rerum
                numquam. Dolores ipsam ut obcaecati nostrum atque a aperiam
                autem at facilis soluta repudiandae provident, enim nam
                consequatur nisi officia rem aspernatur dignissimos ullam
                dolorem. Eos, reprehenderit, quisquam sunt alias magni
                voluptatem facere voluptate quaerat nostrum deserunt saepe
                adipisci assumenda porro provident quo sequi quae? Eius porro,
                eum ipsum nisi, deserunt expedita minus quia delectus,
                voluptatum veniam officiis cumque laborum? Ullam perferendis
                officiis voluptates corporis? Omnis soluta numquam excepturi
                aspernatur libero totam, sequi, dolor harum, ipsum eaque
                praesentium? Nemo cupiditate neque, aperiam repellat animi
                ratione aliquid hic perferendis porro est exercitationem
                blanditiis laboriosam possimus et quia? Tempore maiores sit aut,
                natus, aliquam minima voluptatum, eius dolorem rerum maxime
                laudantium error debitis! Labore atque modi porro odit fugit
                saepe ipsam blanditiis pariatur sit commodi dolorem,
                necessitatibus provident error quaerat reprehenderit, rerum
                exercitationem incidunt quas? Sapiente error reprehenderit rem
                temporibus nesciunt dolorem repellendus non dolore illum
                delectus et in aliquid, suscipit tenetur? Eaque, nobis! Aut
                quis, aliquid blanditiis ab mollitia eos minus laboriosam
                dolorem quasi nihil eius quam iste! Magnam ad dolor voluptates
                modi maxime? Necessitatibus voluptates doloribus vero. Maiores
                atque eum quo, esse delectus magni architecto nihil debitis
                repellat enim blanditiis ipsa est totam illum quidem maxime
                animi! Hic natus quaerat quos nam eveniet repellendus
                perspiciatis nobis, architecto optio, quisquam voluptas ipsam
                earum rem molestiae harum! Facilis voluptas aliquid laboriosam
                necessitatibus vero labore quam id neque maxime officiis
                voluptatibus error natus quidem tempore, fugit a, explicabo
                quisquam dicta consectetur quos accusantium consequuntur nihil.
                Esse velit iusto sed, saepe quam iste modi nisi officiis, nobis
                quia, possimus delectus! Accusantium culpa commodi voluptatem
                aliquam accusamus tenetur facilis maxime blanditiis repudiandae
                ipsum in ratione, iste porro nam voluptatum hic nostrum,
                excepturi eveniet dicta tempora eligendi id eius. Corrupti cum,
                inventore cumque numquam, sapiente mollitia quis voluptates at
                tempora, fugiat iure nostrum deleniti. Repellendus hic odio
                aspernatur nostrum vero, beatae itaque, a voluptate laboriosam,
                praesentium tenetur?
              </p>
            </div>
          </div>
        </div>
      </ProfileStyles>
    </Layout>
  )
}
