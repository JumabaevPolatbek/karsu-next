import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/header/ExtraMenu.module.scss';
import { Children } from '@/redux/types/menu';
function ExtraMenu({
    childMenu,
    children,
    locale,
}: {
    childMenu: Children[];
    children: React.ReactNode;
    locale: string;
}) {
    const [openExtraMenu, setOpenExtraMenu] = useState(false);

    const openMenu = () => {
        setOpenExtraMenu(!openExtraMenu);
    };
    return (
        <li className={'menu__item extra'}>
            <button
                className={`menu__btn ${openExtraMenu ? 'active' : null}`}
                onClick={openMenu}
            >
                {children}
            </button>
            <nav className={`${openExtraMenu ? 'open' : null}`}>
                <ul className={'extra-menu'}>
                    {childMenu.map((item) => (
                        <li className={'menu__item'} key={item.id}>
                            <Link
                                href={`/${locale}/${children
                                    ?.toLocaleString()
                                    .toLowerCase()}/${item.slug}`}
                                className={'menu__link'}
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </li>
    );
}
export default ExtraMenu;
