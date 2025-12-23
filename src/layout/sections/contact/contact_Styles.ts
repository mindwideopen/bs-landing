import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";

const ContactStyled = styled.section`
    position: relative;
    
    ${SectionTitle} {
        margin-top: -25px;
        @media ${theme.media.mobile} {
            margin-bottom: 74px;
            
        }
    }
    
    

`

const FormStyled = styled.form`
    width: 100%;
    max-width:540px ;    
    display: flex;
    flex-direction: column;
    gap: 16px;
    align-items: center;
    margin: 0 auto;


`

const Field = styled.input`
    width: 100%;
    padding: 7px 15px  ;
    box-sizing: border-box;
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.secondaryBg};
    
    color: ${theme.colors.font};
    font-family: Poppins, sans-serif;
    font-size: 12px;
    font-weight: 400;
    line-height: 18px;    
    text-align: left;   
    letter-spacing:  0.05em;
    
    &:focus-visible {
        outline: 3px solid ${theme.colors.borderColor};
        
    }
    
    
    &:nth-child(3) {
        resize: none;
        height: 155px;
        
    }

`
export const S = {
    ContactStyled,
    FormStyled,
    Field
}