import React from 'react';
import {Link} from "../../../../components/Link";
import {Button} from "../../../../components/button/Button";
import {S} from './WorkStyles'


type WorksPropsType = {
    workTitle: string,
    workText: string,
    src: string
}
export const Work:React.FC<WorksPropsType> = (props: WorksPropsType) => {
    return (
        <S.WorkStyled>
            <S.ImageWrapper>
                <S.Image src={props.src} alt={props.workTitle}/>
                <Button>BUTTON</Button>
            </S.ImageWrapper>

            <S.Description>

                <S.WorkTitle>{props.workTitle}</S.WorkTitle>
                <S.WorkText>{props.workText}</S.WorkText>
                <Link href={'#'}>demo</Link>
                <Link href={'#'}>code</Link>

            </S.Description>

        </S.WorkStyled>

    );
};

