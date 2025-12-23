import React from 'react';
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {S} from './Testimonials_styles'
import {Container} from "../../../components/Container/Container";




export const Testimonials:React.FC = () => {
    return (

        <S.TestimonialsStyled id={'testimony'}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>

                <FlexWrapper direction={'column'} align={'center'}>
                    <S.IconWrapper>
                        <Icon iconId={'quote'}/>
                    </S.IconWrapper>

                    <Slider/>
                </FlexWrapper>
            </Container>

        </S.TestimonialsStyled>
    );
};



