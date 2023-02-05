import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  body{
    background-color:#060921;
    font-family: 'Ubuntu', sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  button,
input {
  outline: none;
  border: none;
}

li {
    list-style: none;
  }
  
  a {
    text-decoration: none;
  }
`;
