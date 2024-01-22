import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {

        margin: 0;
        padding: 0;
        background-color: white;
        overflow-x: hidden;
        font-family: 'Ubuntu', sans-serif;

    }
 
    h1, h2 {
        color: #333;
    }
    ul {
        list-style-type: none;
        padding: 0;
    }
    li {
        margin-bottom: 5px;
    }
    
`;

export default GlobalStyle;
