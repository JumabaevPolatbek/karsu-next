import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/header/ExtraMenu.module.scss';
import { Children } from '@/redux/types/menu';
import NestExtraMenu from './NestExtraMenu';
function ExtraMenu({
	childMenu,
	children,
	locale,
	clickFun,
	id,
	state,
	setState,
}: {
	childMenu: Children[];
	children: React.ReactNode;
	locale: string;
	clickFun: (e: React.MouseEvent) => void;
	id: number;
	state: number;
	setState: React.Dispatch<React.SetStateAction<number>>;
}) {
	const [openExtraMenu, setOpenExtraMenu] = useState(false);

	const openMenu = () => {
		setOpenExtraMenu(!openExtraMenu);
	};
	const checkClick = () => {
		state === id ? null : clickFun;
	};
	console.log(state === id);
	return (
		<li className={'menu__item extra'}>
			<button
				className={`menu__btn ${state === id ? 'active' : null}`}
				onClick={clickFun}
				id={`${id}`}
			>
				{children}
			</button>
			<nav className={`${state === id ? 'open' : null}`}>
				<ul className={'extra-menu'}>
					{childMenu.map((item) =>
						item.children.length > 1 ? (
							<NestExtraMenu
								child={item.children}
								key={item.id}
								parent={item}
								locale={locale}
							>
								{item.title}
							</NestExtraMenu>
						) : (
							<li className={'menu__item'} key={item.id}>
								<Link
									href={`/${locale}/${item.parent_id}/${item.id}`}
									className={'menu__link'}
								>
									{item.title}
								</Link>
							</li>
						)
					)}
				</ul>
			</nav>
		</li>
	);
}
export default ExtraMenu;
