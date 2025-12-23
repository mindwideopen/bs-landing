import React from 'react';

import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/Container/Container";
import {FlexWrapper} from "../../components/FlexWrapper";
import {DesktopMenu} from "./desktopMenu/DesktopMenu";
import {MobileMenu} from "./MobileMenu/MobileMenu";
import {S} from './Header_Styles'
import Headroom from 'react-headroom';
import styled from "styled-components";
import {Link} from "react-scroll";
import {theme} from "../../styles/Theme";





export const Header: React.FC = () => {


    const [width, setWidth] = React.useState(window.innerWidth);
    const breakPoint = 768;

    React.useEffect(() => {
        
        const handleWindowResize = () => setWidth(window.innerWidth)
        window.addEventListener("resize", handleWindowResize);


        return () => window.removeEventListener("resize", handleWindowResize);
    }, []);


    return (
        // <S.StyledHeader>
        //     <Headroom>
        //         <Container>
        //
        //             <FlexWrapper justify={'space-between'}>
        //
        //                 <Logo/>
        //
        //
        //                 {width < breakPoint ? <MobileMenu/>
        //                     : <DesktopMenu/>}
        //
        //             </FlexWrapper>
        //
        //
        //         </Container>
        //     </Headroom>
        //
        // </S.StyledHeader>
        <S.StyledHeader>
            <div className="relative z-50">
                <Headroom>
                    <div className="bg-white shadow-md">
                        <Container>
                            <FlexWrapper justify={width<768?'flex-start':'space-around'} align={'center'}>
                                <Logo />
                                {/*<Name>*/}
                                {/*    <Span >БАЛТИК</Span>*/}
                                {/*    <br/>*/}
                                {/*    <Span >СТАЙЛ</Span>*/}
                                {/*</Name>*/}

                                {width >= breakPoint && (

                                    <DesktopMenu/>
                                )}

                            </FlexWrapper>
                        </Container>
                    </div>
                </Headroom>

                {/* Бургер всегда видим */}
                {width < breakPoint && (
                    <div className="absolute right-4 top-4">
                        <MobileMenu />
                    </div>
                )}
            </div>
        </S.StyledHeader>

    );
};


const Name = styled.div`
  

    font-family: 'Roboto, JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 30px;
    line-height: 55px;
    text-align: center;
    color: black;
    cursor: pointer;
    transition:     color .1s ease-in-out;
    padding: 10px;
    left:0;
    // &::before {
    //     content: '';
    //     display: inline-block;
    //     height: 3px;
    //     background-color: ${theme.colors.accent};
    //     position: absolute;
    //     top: 50%;
    //     left: -10px;
    //     right: -10px;
    //     z-index: 1;
    //     transform: scale(0);
    //     transition: ${theme.animations.transition};
    //
    // }

    &::before {
        transition: all .2s ease-in-out;
        position: absolute;
        content: '';
        width: 100%;
        height: 0;
        background-color: #003366;
        left: 50%;
        transform: translateX(-50%);
        bottom: 0;
        z-index: -1;

    }
    //&:hover::before {
    //    width: 100%;
    //    height: 5px;
    //    border-radius: 10px;
    //        }

    &:hover {
       color: white;
       // padding: 15px;
        
    }

`
const Span = styled.span`
   margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    margin-right: 0;
    padding: 0;
`