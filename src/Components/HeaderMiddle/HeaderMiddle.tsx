import styles from '../../styles/header/HeaderMiddle.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Menus } from '@/redux/types/menu';
import ExtraMenu from './ExtraMenu';

function HeaderMiddle({ data, locale }: { data?: Menus; locale: string }) {
    return (
        <div className={styles['header-middle']}>
            <nav>
                <ul className={'menu'}>
                    {data?.map((item) =>
                        item.children.length > 1 ? (
                            <ExtraMenu
                                childMenu={item.children}
                                key={item.id}
                                locale={locale}
                            >
                                {item.title}
                            </ExtraMenu>
                        ) : (
                            <li className={'menu__item'} key={item.id}>
                                <Link
                                    href={`/${locale}/${item.id}`}
                                    className={'menu__link'}
                                    // locale={locale}
                                >
                                    {item.title}
                                </Link>
                            </li>
                        )
                    )}
                </ul>
            </nav>
        </div>
    );
}

export default HeaderMiddle;
