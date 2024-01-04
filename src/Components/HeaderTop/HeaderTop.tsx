'use client';
import styles from '../../../Styles/header/headerTop.module.scss';
import { useState } from 'react';
import { Navs, NavItem } from '../HeaderMiddle/HeaderMiddle';
import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../../public/images/header/logo.svg';
import instagram from '../../../public/images/header/instagram.svg';
import facebook from '../../../public/images/header/facebook.svg';
import whatsapp from '../../../public/images/header/whatsapp.svg';
import avatar from '../../../public/images/header/avatar.svg';
import phone from '../../../public/images/header/phone.svg';

function HeaderTop() {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<div className={styles['header-top']} onClick={handleClick}>
			<p
				className={
					openMenu ? 'hamburger-menu open' : 'hamburger-menu close'
				}
			>
				<span></span>
				<span></span>
				<span></span>
			</p>
			<div className={styles['header__logo']}>
				<Image src={logo} alt="logo" />
			</div>
			<div className={'header-top__control'}>
				<div className={'header-top__social'}>
					<ul className={'social__links'}>
						<li>
							<Link href="#" className={'social-link'}>
								<Image
									src={facebook}
									alt="facebook"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</Link>
						</li>
						<li>
							<Link href="#" className="social-link">
								<Image
									src={instagram}
									alt="instagram"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</Link>
						</li>
						<li>
							<Link href="#" className={'social-link'}>
								<Image
									src={whatsapp}
									alt="whatsapp"
									style={{
										width: '100%',
										height: 'auto',
									}}
								/>
							</Link>
						</li>
					</ul>
				</div>

				<div className={'header__contact'}>
					<Link
						href="tel:+998933623621"
						className={'mobile-phone-logo'}
					>
						<Image src={phone} alt="phone" />
					</Link>
					<Image src={avatar} alt="avatar" />
					<Link href="tel:+998933623621" className={'phone-number'}>
						+7 (902) 311 36 64
					</Link>
					<Link href="#" className={'header-btn'}>
						Подать документы
					</Link>
				</div>
			</div>

			<div className={`mobile ${openMenu ? 'open' : 'close'}`}>
				<nav>
					<ul className={'menu'}>
						{Navs.map((nav: NavItem) => (
							<li className={'menu__item'} key={uuid()}>
								<Link href={nav.href} className={'menu__link'}>
									{nav.title}
								</Link>
							</li>
						))}
					</ul>
				</nav>

				<Link href="tel:+998933623621" className={'phone-number'}>
					+7 (902) 311 36 64
				</Link>
				<p>Рабочее время: Пн — Пт с 9.00 до 19.00</p>
				<ul className={'social__links'}>
					<li>
						<Link href="#" className={'social-link'}>
							{/* <Image src="./images/social/vk.svg" alt="vk" /> */}
						</Link>
					</li>
					<li>
						<Link href="#" className={'social-link'}>
							{/* <Image
								src="./images/social/instagram.svg"
								alt="instagram"
							/> */}
						</Link>
					</li>
					<li>
						<Link href="#" className={'social-link'}>
							{/* <Image
								src="./images/social/whatsapp.svg"
								alt="whatsapp"
							/> */}
						</Link>
					</li>
				</ul>
				<Link href="#" className={'header-btn'}>
					Подать документы
				</Link>
				<Link href="#" className={'politics'}>
					Политика конфиденциальности
				</Link>
			</div>
		</div>
	);
}

export default HeaderTop;
