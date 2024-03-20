import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
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
	state?: number;
	setState?: React.Dispatch<React.SetStateAction<number>>;
}) {
	const [openExtraMenu, setOpenExtraMenu] = useState(false);

	const openMenu = () => {
		setOpenExtraMenu(!openExtraMenu);
	};
	const ref = useRef<HTMLLIElement>();
	useEffect(() => {
		const handler = (event: any) => {
			if (
				openExtraMenu &&
				ref.current &&
				!ref.current.contains(event.target)
			) {
				setOpenExtraMenu(false);
			}
		};
		document.addEventListener('mousedown', handler);
		document.addEventListener('touchstart', handler);
		return () => {
			// Cleanup the event listener
			document.removeEventListener('mousedown', handler);
			document.removeEventListener('touchstart', handler);
		};
	}, [openExtraMenu]);
	const onMouseEnter = () => {
		setOpenExtraMenu(true);
	};
	const onMouseLeave = () => {
		setOpenExtraMenu(false);
	};
	return (
		<li
			className={'menu__item extra'}
			ref={ref as React.RefObject<HTMLLIElement>}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
		>
			<button
				className={`menu__btn ${openExtraMenu ? 'active' : null}`}
				onClick={openMenu}
				id={`${id}`}
			>
				{children}
				<span className="menu__btn-symbol"></span>
			</button>
			<nav
				className={`${openExtraMenu ? 'open' : null}`}
				onMouseLeave={onMouseLeave}
			>
				<ul className={'extra-menu'}>
					{childMenu.map((item) =>
						Number(item.id) === 29 ? null : ( // </NestExtraMenu> // 	{item.title} // > // 	locale={locale} // 	parent={item} // 	key={item.id} // 	child={item.children} // <NestExtraMenu
							<li className={'menu__item'} key={item.id}>
								<Link
									href={`/${locale}/${item.parent_id}/${item.id}`}
									className={'menu__link'}
								>
									{item.title}
									<span className="special-symbol"></span>
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
