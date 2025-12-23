import styled from "styled-components";
import {theme} from "../../styles/Theme";
import type {SlideProps} from "react-awesome-reveal";


const SliderStyled = styled.div`
    margin-top: 74px;  
  
   
     width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

`
type SlidePropsType = {
    backgroundImage: string,
}

const Slide = styled.div<SlidePropsType>`
    width: 100%;
    border-radius: 30px;
   
    background-image: url(${props => props.backgroundImage});
    background-size: cover;
    background-position: center;
    height: 600px;
    text-align: center;  
  
    display: flex;
    justify-content: center;
    align-items: center;
`;

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

const Test = styled.div`
    border: 1px solid ${theme.colors.borderColor};
width: 300px;
height: 300px;
`

export const S = {
    SliderStyled, Name,Text, Slide, Test
}