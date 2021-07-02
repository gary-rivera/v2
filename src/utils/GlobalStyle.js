import { createGlobalStyle  } from "styled-components";

const GlobalStyle = createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

html {
  @media (max-width: 1700px){
    font-size: 75%
  }
  background: #1b1b1b;
}

body {
  font-family: 'Inter', sans-serif;
  overflow-x: hidden;
}

button {
  border: 3px solid rgba(82,183,136, 1.0) !important;
  border-radius: 10px;
  font-weight: bold;
  margin: 10px 0px;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 1rem 2rem;
  background: transparent;
  color: white;
  transition: all 0.5s ease;
  font-family: 'Inter', sans-serif;
  &:hover {
    background-color: rgba(82,183,136, 1.0);
    color: white;
  }
}

#logo {
    font-size: 1.5rem;
    font-family: 'Dancing Script', cursive;
    font-weight: lighter;
}

#alt_font{
  font-family: 'Chakra Petch', sans-serif;
  font-weight: normal;
}

h2 {
  font-weight: lighter;
  font-size: 4rem;
}

h3 {
  color: white;
  font-size: 2rem;
  
}

h4 {
  font-weight: bold;
  font-size: 2rem;
}

a {
  font-size: 1.1rem;
  color: inherit;
  text-decoration: inherit;
}

span {
  font-weight: bold;
  color: rgb(82,183,136);
}

p {
  padding: 3rem 0rem;
  color: #ccc;
  font-size: 1.4rem;
  line-height: 150%;
}

`;

export default GlobalStyle