import React from 'react';
import {S} from './skill/Skill_Styles'
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Skill} from "./skill/Skill";
import {SectionTitle} from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/Container/Container";
import { Slide} from "react-awesome-reveal";

const skillData = [

    {
        iconId: 'logo',
        skillTitle: 'Серверы и системы хранения данных',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',
        width: '100px',
        height: '100px',
        viewBox: '-1 -2 20 20'

    },

    {
        iconId: 'software',
        skillTitle: 'Программное обеспечение',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',
        width: '100px',
        height: '100px',
        viewBox: '0 0 500 500'
    },
    // width="100px" height="100" viewBox="108 0 32 32"
    {
        iconId: 'barcode',
        skillTitle: 'Автоматизация рабочих мест',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',
        width: '100px',
        height: '100px',
        viewBox: ' 108 100 32 32'
    },

    {
        iconId: 'router',
        skillTitle: 'Сетевое и телекоммуникационное оборудование, системы связи',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',


    },

    {
        iconId: 'cctv',
        skillTitle: 'Инженерные системы',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.'

    },

    {
        iconId: 'mic',
        skillTitle: 'Аудио и видео решения',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',
        width: '100px',
        height: '100px',
        viewBox: ' 107 309 35 35'

    },
    {
        iconId: 'learning',
        skillTitle: 'Учебные стенды и тренажеры',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',
        width: '100px',
        height: '100px',
        viewBox: ' 0 0 500 500'

    },
    {
        iconId: 'multimeter',
        skillTitle: 'Контрольно-измерительное оборудование и инструменты',
        skillText: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolor eligendi exercitationem iste labore non quis soluta tempore velit voluptatum.',
        width: '100px',
        height: '100px',
        viewBox: ' 0 0 512 512'

    }

]


export const Technologies = () => {
    return (


        <S.SkillsStyled id={'technologies'}>

            <Container>
                <SectionTitle>Решения и технологии</SectionTitle>

                <FlexWrapper wrap="wrap" justify="space-around">
                    {skillData.map((item, index) => (
                        <Slide triggerOnce={true}>
                            <Skill key={index} {...item} />
                        </Slide>


                    ))}
                </FlexWrapper>


            </Container>


        </S.SkillsStyled>
    );
};

