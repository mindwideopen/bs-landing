import React from 'react';
import iconsSprite from '../../assets/svg/sprite-svg.svg'

type IconPropsType = {
    iconId: string,
    width?: string,
    height?: string,
    viewBox?:string

}

export const Icon: React.FC<IconPropsType> = (props:IconPropsType) => {
    return (
        <svg width={props.width||'100px'}
             height={props.height||'100px'}
             viewBox={props.viewBox|| '0 0 25 25'}
             fill="none" xmlns="http://www.w3.org/2000/svg" >

<use xlinkHref={`${iconsSprite}#${props.iconId}`} />
        </svg>
    );
};

