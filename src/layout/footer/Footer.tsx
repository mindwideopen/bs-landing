import React from 'react';
import {S} from './FooterStyles'
import {Icon} from "../../components/icon/Icon";



const socialItemData = [
    {
        iconId:'instagram'
    },
    {
        iconId:'vk'
    },
    {
        iconId:'linkedIn'
    },
    {
        iconId:'telegram'
    }

]

export const Footer: React.FC = () => {
    return (
        <S.FooterStyled >


            <S.Name>Nikolay</S.Name>



            <S.SocialIconList>

                {socialItemData.map((item, index) => {
                    return (
                        <S.SocialItems>
                            <S.SocialIconLink>
                                <Icon width={'21px'}
                                      height={'21px'}
                                      viewBox={'0 0 21 21'}
                                      iconId={item.iconId}
                                      key={index}/>
                            </S.SocialIconLink>
                        </S.SocialItems>
                    )
                })}

            </S.SocialIconList>


            <S.Copyright>© 2023 Nikolay Litvinov, All Rights Reserved.</S.Copyright>

        </S.FooterStyled>
    );
};

