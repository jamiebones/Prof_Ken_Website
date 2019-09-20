import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: ${({ theme }) => theme.homeColor};
  transform: ${({ open }) => (open ? "translateX(0%)" : "translateX(-100%)")};
  height: 100vh;
  width: 50vw;
  text-align: center;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  z-index: 0;

  @media (max-width: ${({ theme }) => theme.mobile}) {
    width: 100vw;
    z-index: 90000;
    a {
      font-size: 0.8rem;
    }
  }

  a {
    font-size: 1.2rem;
    text-transform: uppercase;
    padding: 1rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #fff;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: ${({ theme }) => theme.mobile}) {
      font-size: 1rem;
      text-align: center;
    }

    &:hover {
      color: ${({ theme }) => theme.primaryHover};
    }
  }

  .navigation__list {
    list-style: none;
    text-align: center;
    width: 100%;
  }

  navigation__item {
    margin: 1rem;
  }

  .navigation__link:link,
  .navigation__link:visited {
    display: inline-block;
    font-size: 1.3rem;
    font-weight: 300;
    padding: 1rem 2rem;
    color: #fff;
    text-decoration: none;
    text-transform: uppercase;
    background-image: linear-gradient(
      120deg,
      transparent 0%,
      transparent 50%,
      #fff 50%
    );
    background-size: 220%;
    transition: all 0.4s;
  }
  .navigation__link:link span,
  .navigation__link:visited span {
    margin-right: 1.5rem;
    display: inline-block;
  }

  .navigation__link:hover,
  .navigation__link:active {
    background-position: 100%;
    color: #55c57a;
    transform: translateX(1rem);
  }
`

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/research-papers">
            Academic Papers
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Educational Achievements
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Videos
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/">
            Contact
          </Link>
        </li>
      </ul>
    </StyledMenu>
  )
}

export default Menu
