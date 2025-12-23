
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

export const SectionTitle = styled.h2`
    ${font({family:"'Josefin Sans', sans-serif", Fmax:36, Fmin: 30, weight: 600})}
      
    letter-spacing: 0.07em;
    text-align: center;
    margin-bottom: 90px;
    position: relative;
    
    
    &:before {
        position: absolute;
        content: '';
        display: inline-block;
        width: 55px;
        height: 1px;
        background-color: ${theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        bottom: -30px;
        
        @media ${theme.media.mobile} {
            bottom: -24px;
        }
    }
    
   

`

