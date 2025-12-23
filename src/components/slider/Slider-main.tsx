import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './SliderStyles-main'
import '../../styles/Slider.css'
import cctv from "../../assets/svg/cctv-2417559_1280.jpg"
import lotok from "../../assets/images/прокладка_кабеля_в_лотке.png"







type SlidePropsType = {
    text: string;
    backgroundImage: string;

};

const Slide = (props: SlidePropsType) => {
    return (
        <S.Slide backgroundImage={props.backgroundImage}>
            <S.Text>{props.text}</S.Text>
        </S.Slide>
    );
};

const items = [
    <Slide text={'1'} backgroundImage={cctv} />,
    <Slide text={'12'} backgroundImage={lotok} />,


];


export const SliderMain = () => {

    return <S.SliderStyled>
        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={2000}
            animationDuration={500}
            infinite={false}
            disableButtonsControls={false}  // показывать кнопки
            disableDotsControls={false}
            // показывать точки
        />
    </S.SliderStyled>
}


// import React from 'react';
// import {S} from './SliderStyles'
// import {FlexWrapper} from "../FlexWrapper";
//
//
// export const Slider: React.FC = () => {
//     return (
//         <S.SliderStyled>
//
//             <FlexWrapper>
//                 <S.Slide>
//                     <S.Text>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</S.Text>
//                     <S.Name>@Nik Lit</S.Name>
//
//                 </S.Slide>
//
//             </FlexWrapper>
//             <S.Pagination>
//                 <span></span>
//                 <span className={"active"}> </span>
//                 <span></span>
//             </S.Pagination>
//
//         </S.SliderStyled>
//     );
// };
//
