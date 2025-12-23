import styled from "styled-components";
import {theme} from "../../styles/Theme";

const SliderStyled = styled.div`
    margin-top: 74px;  
    max-width: 500px;
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Slide = styled.div`
    text-align: center;   
    max-width: 500px;

`

const Text = styled.p`
    font-family: Poppins, sans-serif;
    font-size: 14px;
    font-weight: 400;
    line-height: 21px;
    letter-spacing: 0;
    text-align: center;
    

`

const Name = styled.span`
    display: inline-block;
    margin-top: 19px;
    margin-bottom: 35px;
    color: ${theme.colors.font};
    font-family: Josefin Sans, sans-serif;
    font-size: 16px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 1px;
    text-align: center;
    text-transform: uppercase;
    

`


export const S = {
    SliderStyled, Name,Text, Slide
}