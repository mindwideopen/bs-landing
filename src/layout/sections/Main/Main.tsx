import React from 'react';
import photo from '../../../assets/images/photo1704753319.jpeg'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container/Container";
import {S} from "./Main_styles"
import Typewriter from 'typewriter-effect';
import {ParticlesComponent} from "../../../components/particlesComponent/ParticlesComponent";
import {Slider} from "../../../components/slider/Slider";
import {SliderMain} from "../../../components/slider/Slider-main";



export const Main: React.FC = () => {
    return (


        <S.MainStyled id={'company'}>
            <Container>

                {/*<FlexWrapper wrap={'wrap'} justify={'space-between'} align={'center'}>*/}
                {/*    <div>*/}
                {/*        <S.Greet>Hello There</S.Greet>*/}
                {/*        <S.Name>I am <span>Nickolay Litvinov</span></S.Name>*/}
                {/*        <S.MainTitle>*/}
                {/*            <Typewriter*/}
                {/*                options={{*/}
                {/*                    strings: ['A Web Developer', 'A Frontend Developer', 'A Web Designer'],*/}
                {/*                    autoStart: true,*/}
                {/*                    loop: true,*/}
                {/*                    delay: 25,*/}
                {/*                    deleteSpeed: 20,*/}
                {/*                }}*/}
                {/*            />*/}
                {/*        </S.MainTitle>*/}
                {/*    </div>*/}

                {/*    <S.PhotoWrapper>*/}
                {/*        <S.Photo src={photo} alt="Фотка"/>*/}
                {/*    </S.PhotoWrapper>*/}


                {/*</FlexWrapper>*/}
                <SliderMain/>



            </Container>

        </S.MainStyled>


    );
};


