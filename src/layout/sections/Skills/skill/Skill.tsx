import React from 'react';
import {Icon} from "../../../../components/icon/Icon";

import {FlexWrapper} from "../../../../components/FlexWrapper";
import {S} from './Skill_Styles'
type SkillPropsType = {
    iconId: string,
    skillTitle?: string,
    skillText?:string,
    width?: string,
    height?: string,
    viewBox?:string
}


export const Skill = (props:SkillPropsType) => {
    return (
        <S.SkillStyled>
            <FlexWrapper direction={'column'} align={'center'}>
                <S.IconWrapper>
                    <Icon iconId={props.iconId} height={props.height} width={props.width} viewBox={props.viewBox}/>
                </S.IconWrapper>


                <S.SkillTitle>{props.skillTitle}</S.SkillTitle>

                <S.SkillText>{props.skillText}</S.SkillText>
            </FlexWrapper>



        </S.SkillStyled>


    );
};

