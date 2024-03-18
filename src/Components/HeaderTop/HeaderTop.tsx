import styles from '../../styles/header/HeaderTop.module.scss';
import { useState } from 'react';
// import { Navs, NavItem } from '../HeaderMiddle/HeaderMiddle';
// import { v4 as uuid } from "uuid";
import Image from 'next/image';
import Link from 'next/link';
import logo from '../../images/assets/logo-karsu.png';
import avatar from '../../images/assets/avatar.svg';
import instagram from '../../images/assets/social/instagram.svg';
import telegram from '../../images/assets/social/telegram.svg';
import whatsapp from '../../images/assets/social/whatsapp.svg';
import phone from '../../images/assets/phone.svg';
import vk from '../../images/assets/social/vk.svg';
import { useTranslations } from 'next-intl';
import LocalSwitcher from '../local-switcher';
import { useRouter } from '@/navigation';
function HeaderTop() {
	const [openMenu, setOpenMenu] = useState(false);

	const handleClick = () => {
		setOpenMenu(!openMenu);
	};
	const t = useTranslations('Header');
	const router = useRouter();
	return (
		<div className={styles['header-top']} onClick={handleClick}>
			<p className={'hamburger-menu'}>
				<span></span>
				<span></span>
				<span></span>
			</p>
			<div className={'header__logo'} onClick={() => router.push('/')}>
				<Image src={logo} alt="logo" width={100} height={100} />
			</div>
			<div className={'header-top__control'}>
				<div className={'header-top__social'}>
					<ul className={'social__links'}>
						<li>
							<Link href={'#'} legacyBehavior>
								<a href="#" className={'social-link'}>
									<Image src={instagram} alt="instagram" />
								</a>
							</Link>
						</li>
						<li>
							<Link href={'#'} legacyBehavior>
								<a href="#" className={'social-link'}>
									<Image src={whatsapp} alt="whatsapp" />
								</a>
							</Link>
						</li>
						<li>
							<Link href={'#'} legacyBehavior>
								<a href="#" className={'social-link'}>
									<Image src={telegram} alt="telegram" />
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
						<Image src={phone} alt="phone" />
					</Link>
					<Image src={avatar} alt="avatar" />
					<Link href="tel:+998933623621" className={'phone-number'}>
						+7 (902) 311 36 64
					</Link>
					<LocalSwitcher />
				</div>
			</div>

			<div className={`${'mobile'}  ${openMenu ? 'open' : 'close'}`}>
				<nav>
					<ul className={'menu'}>
						{/* {Navs.map((nav: NavItem, index: number) => (
							<li className={styles['menu__item']} key={index}>
								<Link href={nav.href} legacyBehavior>
									<a href={nav.href} className={'menu__link'}>
										{nav.title}
									</a>
								</Link>
							</li>
						))} */}
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
							<Image src={vk} alt="vk" />
						</Link>
					</li>
					<li>
						<Link href="#" className={'social-link'}>
							<Image src={instagram} alt="instagram" />
						</Link>
					</li>
					<li>
						<Link href="#" className={'social-link'}>
							<Image src={whatsapp} alt="whatsapp" />
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
