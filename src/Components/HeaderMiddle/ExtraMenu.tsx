import Link from 'next/link';
import React, { MutableRefObject, useEffect, useRef, useState } from 'react';
import { Children } from '@/redux/types/menu';
import NestExtraMenu from './NestExtraMenu';
import Image from 'next/image';
import ArrowDown from '../../images/assets/icons_arrow/arrow_down.png';

type TProps = {
	children: React.ReactNode;
	menuItems: Children[];
	locale: string;
};

function ExtraMenu(props: TProps) {
	const { children, menuItems, locale } = props;
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
			>
				{children}
				<Image
					src={ArrowDown.src}
					width={24}
					height={24}
					alt="arrow-down"
				/>
			</button>
			<nav
				className={openExtraMenu ? 'open' : 'null'}
				onMouseLeave={onMouseLeave}
			>
				<ul className={'extra-menu'}>
					{menuItems.map((item) =>
						item.children.length > 1 ? (
							<NestExtraMenu
								child={item.children}
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
