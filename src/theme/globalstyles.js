import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Lato:400,700');
  @import url('https://fonts.googleapis.com/css?family=Caveat&display=swap');
  body {
    padding: 0;
    margin: 0;
    font-family: Lato;
    background-color: #fff;

  }

  

  .fixed-div {
    position: sticky;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 1;
    background: ${({ theme }) => theme.homeColor};
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding:10px;
  }

 

 

  .content {
    margin-top: 120px;
    padding-right:50px;
    padding-left: 50px;
  }

  .quotes {
    font-family: 'Caveat', cursive;
    font-size: 40px;
    color: #fff;
  }

  .quote-author{
    float: right;
    color: #000;
    padding-top: 5px;
  }


`
