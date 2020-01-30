import React, { useState, useRef } from "react"
import Burger from "./hamburgermenu"
import Menu from "./menu"
import { useOnClickOutside } from "../hooks"
import styled from "styled-components"

const NavStyles = styled.div`
  @media (max-width: ${({ theme }) => theme.mobile}) {
  }
`
export default function NavLayout() {
  const [open, setOpen] = useState(false)
  const node = useRef()

  useOnClickOutside(node, () => setOpen(false))
  return (
    <NavStyles>
      <div ref={node}>
        <Burger open={open} setOpen={setOpen} />
        <Menu open={open} setOpen={setOpen} />
      </div>
    </NavStyles>
  )
}
