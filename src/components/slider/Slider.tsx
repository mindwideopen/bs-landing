import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import {S} from './SliderStyles'
import '../../styles/Slider.css'

type SlidePropsType = {
    text: string,
    userName: string
}

const Slide = (props:SlidePropsType) => {
    return (<S.Slide>
        <S.Text>{props.text}</S.Text>
        <S.Name>{'@'+props.userName}</S.Name>

    </S.Slide>
    )
}


const items = [
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'Ivan Inaniv'}/>,
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'Ivan Petrov'}/>,
    <Slide text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.'} userName={'Ivan Sidorov'}/>

];

export const Slider = () => {

    return <S.SliderStyled>
        <AliceCarousel
            mouseTracking
            items={items}
            autoPlay
            autoPlayInterval={3000}
            animationDuration={1000}
            infinite
            disableButtonsControls={false}  // показывать кнопки
            disableDotsControls={false}     // показывать точки
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
