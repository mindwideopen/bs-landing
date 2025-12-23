
import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {IconWrapper} from "../Skills/skill/Skill_Styles";

const TestimonialsStyled=styled.section`
    position: relative;

   
    
    ${IconWrapper} {
        margin-top: 30px;
        
        }
    }
${SectionTitle} {
@media ${theme.media.mobile} {
    margin-bottom: 75px;
    
}
    
    
`

export const S = {
    TestimonialsStyled,
    IconWrapper
}