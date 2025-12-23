import {FlexWrapper} from "../../../../components/FlexWrapper";
import styled from "styled-components";
import {theme} from "../../../../styles/Theme";
import {Button} from "../../../../components/button/Button";
import {Link} from "../../../../components/Link";
import {motion} from "framer-motion";
const WorksStyled = styled.section`
    position: relative;

    ${FlexWrapper} {
        gap: 30px;
    }

    padding: 84px 0 100px;
`


const WorkStyled = styled.div`
    background-color: ${theme.colors.secondaryBg};  

    ${Link} {
        padding: 0;

        & + ${Link} {
            margin-left: 20px;
        }

    }

    ${Link}:before {
        bottom: -3px;

    }

    // @media ${theme.media.desktop} {
    //     max-width: 540px;
    // }



`

const Image = styled.img`
    width: 100%;
    object-fit: cover;

    height: 260px;
`

const WorkTitle = styled.h3`

`

const WorkText = styled.p`
    margin: 17px 0 18px;

`

const Description = styled.div`


    padding: 25px 20px;
`

const ImageWrapper = styled.div`

    position: relative;

    ${Button} {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: ${theme.animations.transition};

        &:before {
            transition: ${theme.animations.transition};
            width: 0;
            height: 0;
        }

    }

    &:before {

        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        backdrop-filter: blur(4px);
        background: rgba(0, 0, 0, 0.3);
        opacity: 0;

    }

    &:hover {

        ${Button} {
            opacity: 1;
            &:before {
                width: 100%;
                height: 100%;
            }
        }

        &::before {
            opacity: 1;

        }


    }


    @media ${theme.media.tablet} {
        &:before {
            content: '';
            position: absolute;
            top: 0;
            bottom: 0;
            left: 0;
            right: 0;
            backdrop-filter: blur(4px);
            background: rgba(0, 0, 0, 0.3);
        }

        ${Button} {
            opacity: 1;

            &:before {
                width: 100%;
                height: 100%;
            }

        }

    }



`


export const S = {
    WorksStyled,
    WorkStyled,
    Image,
    WorkTitle,
    WorkText,
    Description,
    ImageWrapper

}