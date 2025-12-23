import styled from "styled-components";
import {font} from "../../styles/Common";
import {theme} from "../../styles/Theme";

const FooterStyled = styled.section`
    position: relative;
    padding-top: 40px;
    display: flex;
    flex-direction: column;
    align-items: center;


`

const Name = styled.span`
${font({
    family:'Josefin Sans, sans-serif',
    weight:700,
    Fmin:16,
    Fmax:22

})}
line-height: 22px;
    letter-spacing: 3px;
`

const SocialIconList = styled.ul`
    list-style: none;
    display: flex;
    padding: 0;
    margin: 26px 30px 30px;
    


`

const SocialIconLink = styled.a`
    width: 35px;
    height: 35px;
    border-radius: 50%;
    background-color: rgba(255,255,255,0.1);
    display: flex;
    justify-content: center;
    align-items: center;
    color:${theme.colors.accent}
    


`
const SocialItems = styled.li`    

    &:nth-child(n+1){
        margin-left: 20px;
    } 
    
    &:hover {
    ${SocialIconLink} {
    background-color: ${theme.colors.accent};
        transform: translateY(-5px);
        color: black;
    }
        
    
}
     
    


`

const Copyright = styled.small`

    color: rgba(255, 255, 255, 0.5);
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;    
    text-align: center;

`




export const S = {
     FooterStyled,
     Name,
     SocialIconList,
     SocialIconLink,
     SocialItems,
     Copyright
 }
