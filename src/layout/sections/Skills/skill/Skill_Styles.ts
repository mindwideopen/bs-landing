import styled from "styled-components";
import {theme} from "../../../../styles/Theme";


const SkillsStyled = styled.section`
    position: relative;
`



const SkillStyled = styled.div`
    
    width: 330px;
    flex-grow: 1;    
    padding: 47px 20px 52px;
    @media ${theme.media.mobile} {
        padding: 62px 0 40px;
    }
    

`

const SkillTitle = styled.h2`
    margin: 68px 0 15px;    
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    
    

`

const SkillText = styled.p`
    line-height: 21px;
    text-align: left;
    
  

`

 export const IconWrapper = styled.div`
position: relative;
    
    &:before {
        position: absolute;
        content: '';
        width: 120px;
        height: 120px;       
        background: rgba(255, 255, 255, 0.1);
        top: 50%;
        left: 50%;
        transform:  rotate(45deg) translateX(-50%) translateY(-50%);
        transform-origin: 0 0;      
        
        
        
    }


`

export const S = {
    SkillStyled,
    SkillTitle,
    SkillText,
    IconWrapper,
    SkillsStyled
}