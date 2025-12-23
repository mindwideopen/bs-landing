import React from 'react';
import {Icon} from "../icon/Icon";
import {animateScroll} from "react-scroll";
import styled from "styled-components";
import logo from '../../assets/images/logo-balticstyle-ru.png'


export const Logo: React.FC = () => {
    return (
        <LogoStyled onClick={ () => {animateScroll.scrollToTop()}}>
            <img src={logo}  alt=""/>

        </LogoStyled>

    );
};

const LogoStyled = styled.a`
   
       
`