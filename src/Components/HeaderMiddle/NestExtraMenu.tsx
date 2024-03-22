import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import styles from '../../styles/header/ExtraMenu.module.scss';
import { Children, Children2 } from '@/redux/types/menu';
import Image from 'next/image';
import ArrowRightChevron from '../../images/assets/icons_arrow/chevron_right_arrow_icon.png';
type Props = {
	children: React.ReactNode;
	child: Children2[];
	parent: Children;
	locale: string;
};
function NestExtraMenu(props: Props) {
	const { children, child, parent, locale } = props;
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
			className={'menu__item nest__item'}
			ref={ref as React.RefObject<HTMLLIElement>}
			onMouseEnter={onMouseEnter}
			onMouseLeave={onMouseLeave}
			onClick={openMenu}
		>
			<p>{children}</p>
			<Image
				src={ArrowRightChevron.src}
				width={18}
				height={18}
				alt="arrow-right"
			/>
			<nav className={`${openExtraMenu ? 'menu__extra-nest-nav' : null}`}>
				<ul className={`menu__extra-nest`}>
					{child.map((item) => (
						<li className={'menu__item'} key={item.id}>
							<Link
								href={`/${locale}/${parent.parent_id}/${item.parent_id}/${item.id}`}
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
export default NestExtraMenu;
