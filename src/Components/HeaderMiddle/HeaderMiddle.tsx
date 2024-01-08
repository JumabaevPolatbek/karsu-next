'use client';
import { v4 as uuid } from 'uuid';
import { useState } from 'react';
import styles from '../../../Styles/header/headerMiddle.module.scss';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
export type NavItem = {
	title: string;
	href: string;
};

export const Navs: NavItem[] = [
	{
		title: 'Направление',
		href: '#',
	},
	{
		title: 'Вузы',
		href: '#',
	},
	{
		title: 'Колледжи',
		href: '#',
	},
	{
		title: 'Профессии',
		href: '#',
	},
	{
		title: 'Отзывы',
		href: '#',
	},
	{
		title: 'Учебным заведениям',
		href: '#',
	},
	{
		title: 'Вопрос-ответ',
		href: '#',
	},
	{
		title: 'Статьи',
		href: '#',
	},
	{
		title: 'Как поступит',
		href: '#',
	},
	{
		title: 'Контакты',
		href: '#',
	},
	{
		title: 'Шансы по ЕГЭ',
		href: '#',
	},
	{
		title: 'Extra',
		href: '#',
	},
];

function HeaderMiddle() {
	const router = useRouter();
	const [openExtraMenu, setOpenExtraMenu] = useState(false);

	const openMenu = () => {
		setOpenExtraMenu(!openExtraMenu);
		// console.log('OpenExtraMenu', openExtraMenu);
	};
	function handleClick() {
		return console.log('OK btn');
	}
	return (
		<div className={styles['header-middle']}>
			<nav>
				<ul className={'menu'}>
					{Navs.map((nav: NavItem, index: number) =>
						index < 9 ? (
							<li className={'menu__item'} key={uuid()}>
								<Link href={nav.href} className={'menu__link'}>
									{nav.title}
								</Link>
							</li>
						) : null
					)}
					<li className={'menu__item extra'} onClick={handleClick}>
						<button
							className={
								openExtraMenu
									? `menu__btn active`
									: `menu__btn null`
							}
							onClick={handleClick}
						>
							Еще
						</button>
						<nav
							className={`menu__btn ${
								openExtraMenu ? 'open' : null
							}`}
						>
							<ul className={'extra-menu'}>
								{Navs.map((nav: NavItem, index: number) =>
									index >= 9 ? (
										<li
											className={'menu__item'}
											key={uuid()}
										>
											<Link
												href={nav.href}
												className={'menu__link'}
											>
												{nav.title}
											</Link>
										</li>
									) : null
								)}
							</ul>
						</nav>
					</li>
				</ul>
			</nav>
		</div>
	);
}

export default HeaderMiddle;
