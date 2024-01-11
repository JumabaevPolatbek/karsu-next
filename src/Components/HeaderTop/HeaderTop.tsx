import styles from '../../styles/header/HeaderTop.module.scss';
import { useState } from 'react';
import { Navs, NavItem } from '../HeaderMiddle/HeaderMiddle';
// import { v4 as uuid } from "uuid";
import Image from 'next/image';
import Link from 'next/link';
function HeaderTop() {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};
	return (
		<div className={styles['header-top']} onClick={handleClick}>
			<p className={'hamburger-menu'}>
				<span></span>
				<span></span>
				<span></span>
			</p>
			<div className={'header__logo'}>
				<Image
					src="/assets/logo.png"
					alt="logo"
					width={100}
					height={100}
				/>
			</div>
			<div className={'header-top__control'}>
				<div className={'header-top__social'}>
					<ul className={'social__links'}>
						<li>
							<Link href={'#'} legacyBehavior>
								<a href="#" className={'social-link'}>
									<Image
										src="/assets/instagram.svg"
										alt="instagram"
										width={32}
										height={32}
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href={'#'} legacyBehavior>
								<a href="#" className={'social-link'}>
									<Image
										src="/assets/whatsapp.svg"
										alt="whatsapp"
										width={32}
										height={32}
									/>
								</a>
							</Link>
						</li>
						<li>
							<Link href={'#'} legacyBehavior>
								<a href="#" className={'social-link'}>
									<Image
										src="/assets/telegram.svg"
										alt="whatsapp"
										width={32}
										height={32}
									/>
								</a>
							</Link>
						</li>
					</ul>
				</div>

				<div className={'header__contact'}>
					<Link
						href="tel:+998933623621"
						className={'mobile-phone-logo'}
					>
						<Image
							src="/assets/phone.svg"
							alt="phone"
							width={32}
							height={32}
						/>
					</Link>
					<Image
						src="/assets/avatar.svg"
						alt="avatar"
						width={16}
						height={16}
					/>
					<Link href="tel:+998933623621" className={'phone-number'}>
						+7 (902) 311 36 64
					</Link>
					<Link href="#" className="header-btn">
						Подать документы
					</Link>
				</div>
			</div>

			<div className={`${'mobile'}  ${openMenu ? 'open' : 'close'}`}>
				<nav>
					<ul className={'menu'}>
						{Navs.map((nav: NavItem, index: number) => (
							<li className={styles['menu__item']} key={index}>
								<Link href={nav.href} legacyBehavior>
									<a href={nav.href} className={'menu__link'}>
										{nav.title}
									</a>
								</Link>
							</li>
						))}
					</ul>
				</nav>
				<Link href={'tel:+998933623621'} legacyBehavior>
					<a href="tel:+998933623621" className={'phone-number'}>
						+7 (902) 311 36 64
					</a>
				</Link>
				<p>Рабочее время: Пн — Пт с 9.00 до 19.00</p>
				<ul className={'social__links'}>
					<li>
						<Link href="#" className={'social-link'}>
							<Image
								src="./images/social/vk.svg"
								alt="vk"
								width={16}
								height={16}
							/>
						</Link>
					</li>
					<li>
						<Link href="#" className={'social-link'}>
							<Image
								src="./images/social/instagram.svg"
								alt="instagram"
								width={16}
								height={16}
							/>
						</Link>
					</li>
					<li>
						<Link href="#" className={'social-link'}>
							<Image
								src="/assets/whatsapp.svg"
								alt="whatsapp"
								width={16}
								height={16}
							/>
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
