import styles from '../../../Styles/header/headerTop.module.scss';
import { useState } from 'react';
import { Navs, NavItem } from '../HeaderMiddle/HeaderMiddle';
import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
function HeaderTop() {
    const [openMenu, setOpenMenu] = useState(false);

    const handleClick = () => {
        setOpenMenu(!openMenu);
    };

    return (
        <div className={styles['header-top']} onClick={handleClick}>
            <p
                className={
                    styles[`hamburger-menu ${openMenu ? 'open' : 'close'}`]
                }
            >
                <span></span>
                <span></span>
                <span></span>
            </p>
            <div className={styles['header__logo']}>
                <Image src='./images/logo.svg' alt='logo' />
            </div>
            <div className={styles['header-top__control']}>
                <div className={styles['header-top__social']}>
                    <ul className={styles['social__links']}>
                        <li>
                            <Link href='#' className={styles['social-link']}>
                                <Image src='./images/social/vk.svg' alt='vk' />
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='social-link'>
                                <Image
                                    src='./images/social/instagram.svg'
                                    alt='instagram'
                                />
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className={styles['social-link']}>
                                <Image
                                    src='./images/social/whatsapp.svg'
                                    alt='whatsapp'
                                />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className={styles['header__contact']}>
                    <Link
                        href='tel:+998933623621'
                        className={styles['mobile-phone-logo']}
                    >
                        <Image src='./images/phone.svg' alt='phone' />
                    </Link>
                    <Image src='./images/avatar.svg' alt='avatar' />
                    <Link
                        href='tel:+998933623621'
                        className={styles['phone-number']}
                    >
                        +7 (902) 311 36 64
                    </Link>
                    <Link href='#' className={styles['header-btn']}>
                        Подать документы
                    </Link>
                </div>
            </div>

            <div className={styles[`mobile ${openMenu ? 'open' : 'close'}`]}>
                <nav>
                    <ul className={styles['menu']}>
                        {Navs.map((nav: NavItem) => (
                            <li className={styles['menu__item']} key={uuid()}>
                                <Link
                                    href={nav.href}
                                    className={styles['menu__link']}
                                >
                                    {nav.title}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </nav>

                <Link
                    href='tel:+998933623621'
                    className={styles['phone-number']}
                >
                    +7 (902) 311 36 64
                </Link>
                <p>Рабочее время: Пн — Пт с 9.00 до 19.00</p>
                <ul className={styles['social__links']}>
                    <li>
                        <Link href='#' className={styles['social-link']}>
                            <Image src='./images/social/vk.svg' alt='vk' />
                        </Link>
                    </li>
                    <li>
                        <Link href='#' className={styles['social-link']}>
                            <Image
                                src='./images/social/instagram.svg'
                                alt='instagram'
                            />
                        </Link>
                    </li>
                    <li>
                        <Link href='#' className={styles['social-link']}>
                            <Image
                                src='./images/social/whatsapp.svg'
                                alt='whatsapp'
                            />
                        </Link>
                    </li>
                </ul>
                <Link href='#' className={styles['header-btn']}>
                    Подать документы
                </Link>
                <Link href='#' className={styles['politics']}>
                    Политика конфиденциальности
                </Link>
            </div>
        </div>
    );
}

export default HeaderTop;
