import React from 'react';
import {S} from '../HederMenuStyles'




// const items = ['Home', 'Skills', 'Works', 'Testimony', 'Contact',]
const items = [
    {
        title: 'Компания',
        href: 'company'
    },
    {
        title:'Технологии',
        href: 'technologies'
    },
    {
        title: 'Новости',
        href: 'news'
    },
    {
        title: 'Проекты',
        href: 'works'
    },

    {
        title: 'Услуги',
        href: 'service'
    },
    {
        title: 'Карьера',
        href: 'career'
    }
    ]
type Props = {
    onClick?: () => void;
};
 const Menu: React.FC<Props> = ({onClick}) => {
    return (

            <ul>
                {items.map((item, index) => {
                    return <S.MenuItem key={index}>
                        <S.NavLink activeClass='active'
                                   to={item.href}
                                   smooth={true}
                                   duration={250}
                                   delay={10}
                                   offset={-20}
                                   spy={true}
                                   onClick={onClick}
                        >

                            {item.title}



                        </S.NavLink>

                    </S.MenuItem>
                })

                }
            </ul>

    );
};

export default Menu;