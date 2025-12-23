import {createGlobalStyle} from "styled-components";
import {theme} from "./Theme";

export const GlobalStyle= createGlobalStyle`
    
    *, *:before, *:after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    body {
        margin: 0;
        font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
        'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
        sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        color: ${theme.colors.font};
        line-height: 1.2;
    }
    
     h2 {
         
         font-family: Josefin Sans, sans-serif;
         font-size: 16px;
         font-weight: 700;
         line-height: 16px;
         
         
     }
    h3 {
        font-family: 'Josefin Sans', sans-serif;
        font-size: 16px;
        font-weight: 700;
        line-height: 16px;
        letter-spacing: 1px;
        
    }


 p {
     
     color: ${theme.colors.accent};
     font-family: 'Poppins', sans-serif;
     font-size: 14px;
     font-weight: 400;
line-height: 1.4;
     letter-spacing: 0;
     
     
 }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
    
    a {
        text-decoration: none;
        color:${theme.colors.font};
        cursor: pointer;
    }
    
    ul {
        list-style: none;
    }
    button{
        background-color: unset;
        border: none;
        cursor: pointer;
        color: ${theme.colors.font};
        
    }
    
    section {
        padding: 100px 0;
        @media ${theme.media.mobile} {
            padding: 80px 0;
        }
    }
    section:nth-of-type(odd) {
        background-color: white;
    }
    section:nth-of-type(even) {
        background-color: rgb(241, 245, 248);
    }
    
`