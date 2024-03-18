import Link from 'next/link';
import React, { useState } from 'react';
import styles from '../../styles/header/ExtraMenu.module.scss';
import { Children, Children2 } from '@/redux/types/menu';
type Props = {
	children: React.ReactNode;
	child: Children2[];
	parent: Children;
};
function NestExtraMenu(props: Props) {
	const { children, child, parent } = props;
	const [openExtraMenu, setOpenExtraMenu] = useState(false);

	const openMenu = () => {
		setOpenExtraMenu(!openExtraMenu);
	};

	return (
		<li className={'menu__item'}>
			<p className="span" onClick={openMenu}>
				{children}
			</p>

			{/* </button> */}
			<nav className={`${openExtraMenu ? 'menu__extra-nest-nav' : null}`}>
				<ul className={`menu__extra-nest`}>
					{child.map((item) => (
						<li className={'menu__item'} key={item.id}>
							<Link
								// href={`/${locale}/${item.parent_id}/${item.id}`}
								href={'#'}
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
