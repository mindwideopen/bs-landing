import styled, {css} from "styled-components";
import {theme} from "../../styles/Theme";
import {Link} from "react-scroll";
import {font} from "../../styles/Common";


//Menu


const Mask = styled.span`

    display: inline-block;
    color: ${theme.colors.accent};
    position: absolute;
    top: 0;
    left: 0;
    height: 50%;
    overflow-y: hidden;
    
    
    & + & {
        top: 50%;
        
        span {
            display: inline-block;
            transform: translateY(-50%)
        }
    }   

`
const NavLink = styled(Link)`

    font-family: 'Roboto, JetBrains Mono', monospace;
    font-weight: 400;
    font-size: 20px;
    line-height: 55px;
    text-align: center;
    color: ${theme.colors.primaryBg};
    cursor: pointer;
    transition: all .1s ease-in-out;
    padding: 10px;
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
        transition: all .1s ease-in-out;
        position: absolute;
        content: '';
        width: 100%;
        height: 0;
        background-color: ${theme.colors.primaryBg};
        left: 50%;
        transform: translateX(-50%);
        bottom: -4px;
        z-index: -1;

    }

    &:hover::before {
        width: 100%;
        height: 2px;
        
        
    }

    &:hover {
        font-weight: 800;
        transform: translateX(10px);
        color: black;
        
    };

    }

`
const MenuItem = styled.li`
    position: relative; 
    
   
    
`


//Mobile Menu

const MobileMenu = styled.nav`
    display: none;
    @media ${theme.media.tablet} {
        display: block;
    }   

`

const BurgerButton = styled.button<{isOpen: boolean}>`

    z-index: 999999;
    position: fixed;
    width: 200px;
    height: 200px;
    top: -100px;
    right: -100px;
    

    span {
        display: block;
        position: absolute;
        width: 36px;
        height: 4px;
        background-color: ${theme.colors.font};        
        left: 40px;
        bottom: 50px;
        transition: all 0.2s ease-in-out;
        border-radius: 2px;
        ${props => props.isOpen && css <{ isOpen: boolean }>`
            background-color:rgba(255, 255, 255, 0);
        `}


    }

    span:before {
        display: block;
        content: '';
        width: 36px;
        height: 4px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(-10px);
        transition: all 0.5s ease;
        border-radius: 2px;

        ${props => props.isOpen && css <{ isOpen: boolean }>`
            transform: rotate(-45deg) translateY(0);
            background-color: black;
        `}

    }

    span:after {
        display: block;
        content: '';
        width: 36px;
        height: 4px;
        background-color: ${theme.colors.font};
        position: absolute;
        transform: translateY(10px);
        transition: all 0.5s ease;
        border-radius: 2px;
 
        ${props => props.isOpen && css <{ isOpen: boolean }>`
            transform: rotate(45deg) translateY(0);
            background-color: black;
        `}

    }
`

// const MobileMenuPopUp = styled.div<{isOpen: boolean}>`
//
//     display: none;
//     position: fixed;
//     background-color: ${theme.colors.primaryBg};
//     top: 0;
//     bottom: 0;
//     left: 0;
//     right: 0;
//     z-index: 99999;
//
//     ${props => props.isOpen && css <{isOpen: boolean}>`
//     display: flex;
//     justify-content: center;
//     align-items: center;
//
//     `}
//
//     ul {
//         display: flex;
//         gap: 20px;
//         justify-content: center;
//         flex-direction: column;
//         align-items: center;
//
//
//
//         }
//     }
//
// `

 const MobileMenuPopUp = styled.div<{ isOpen: boolean }>`
    position: fixed;
    background-color: ${theme.colors.secondaryBg};
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 99999;

    display: flex;
    justify-content: center;
    align-items: center;

    transform: translateX(100%);
    opacity: 0;
    pointer-events: none;
    transition: transform 0.5s ease, opacity 0.5s ease;

    ${({ isOpen }) =>
            isOpen &&
            css`
                transform: translateX(0);
                opacity: 1;
                pointer-events: auto;
            `}

    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-direction: column;
        align-items: center;
    }
`;


//DesktopMenu

const DesktopMenu = styled.nav`
    
    
    ${font ({family: 'JetBrains Mono, sans-serif', weight:700, Fmax:14, Fmin: 10})}
    @media ${theme.media.tablet}
    {
        display: none;
    }
    ul {
        display: flex;
        gap: 20px;
        justify-content: center;
        flex-wrap: wrap;
    }
    
`

export const S = {
    NavLink,
    MenuItem,
    Mask,
    MobileMenu,
    MobileMenuPopUp,
    BurgerButton,
    DesktopMenu
}