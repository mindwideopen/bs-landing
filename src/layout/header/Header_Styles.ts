import styled from "styled-components";
import {theme} from "../../styles/Theme";

const StyledHeader = styled.header`
    //background-color: rgba(31, 31, 32, 0.5);

    padding: 20px 0;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    color: ${theme.colors.font};
    font-family: ' Josefin Sans', sans-serif;
    z-index: 99999;
`

export const S = {
   StyledHeader
}