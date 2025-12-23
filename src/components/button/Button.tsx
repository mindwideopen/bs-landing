import styled from "styled-components";
import {theme} from "../../styles/Theme";

export const Button = styled.button`
    margin-top: -7px;
    position: relative;
    text-transform: uppercase;
    width: 170px;
    height: 32px;
    z-index: 0;
    
    &::before {
        position: absolute;
        content: '';
        width: 50%;
        height: 10px;
        background-color: ${theme.colors.accent};
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: -1;
        
    }
    &:hover::before {
        width: 100%;
        height: 100%;
        
        
        
    }
    

`