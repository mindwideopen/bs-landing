import {theme} from "../../../styles/Theme";
import styled from "styled-components";
import {font} from "../../../styles/Common";

const MainStyled = styled.section`
    background-color: burlywood;
    height: 100vh;
    display: flex;
    

`

const Photo = styled.img`

    width: 350px;
    height: 430px;
    object-fit: cover;
    margin-right: 40px;
    
    @media ${theme.media.mobile} {
    width: 310px;
    height: 380px;
}

`



const Greet = styled.h2`
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    font-weight: 400;    
    
`

const Name = styled.h2`
    ${font ({family: 'Josefin Sans, sans-serif', weight:700, Fmax:50, Fmin: 36})}
    //font-family: 'Josefin Sans', sans-serif;
    //font-size: 50px;
    //font-weight: 700;
    
    margin:  10px 0 ;
    letter-spacing: 0.05em;
    @media ${theme.media.mobile} {
        margin: 15px 0 22px;
        
    }
    
    
    
    
`

const MainTitle = styled.h1`
    ${font ({family: 'Poppins, sans-serif', Fmax:27, Fmin: 20})};
 p {
     display: none;
 }
   
    
`
const PhotoWrapper =  styled.div`
    position: relative;
    z-index: 0;
    @media ${theme.media.mobile} {
        margin-top: 45px;


    }
    
    // &::before {
    //     position: absolute;
    //     content: '';
    //     height: 470px;
    //     width: 360px;
    //     border:  5px solid ${theme.colors.accent};
    //     top: -24px;
    //     left: 24px;
    //     z-index: -1;
    //    
    //     @media ${theme.media.mobile} {
    //         width: 314px;
    //         height: 414px;
    //         top: -17px;
    //         left: 20px;
    //        
    //        
    //     }
    // }
    
`


export const S = {
    MainStyled,
    Photo,
    Greet,
    Name,
    MainTitle,
    PhotoWrapper

}