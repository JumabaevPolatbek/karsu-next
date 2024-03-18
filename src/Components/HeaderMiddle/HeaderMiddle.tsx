import styles from '../../styles/header/HeaderMiddle.module.scss';
import { useState } from 'react';
import Link from 'next/link';
import { Menu, Menus } from '@/redux/types/menu';
import ExtraMenu from './ExtraMenu';

function HeaderMiddle({ data, locale }: { data?: Menus; locale: string }) {
	const [active, setActive] = useState<number>(0);

	const handleClick = (e: React.MouseEvent) => {
		const id = (e.target as HTMLElement).id;
		setActive(+id);
	};
	const resetActive = () => {
		setActive(0);
	};
	return (
		<div className={styles['header-middle']}>
			<nav>
				<ul className={'menu'}>
					{data?.map((item) =>
						item.children.length > 1 ? (
							<ExtraMenu
								childMenu={item.children}
								key={item.id}
								locale={locale}
								clickFun={handleClick}
								id={Number(item.id)}
								state={active}
								setState={setActive}
							>
								{item.title}
							</ExtraMenu>
						) : (
							<li
								className={'menu__item'}
								key={item.id}
								onClick={resetActive}
							>
								<Link
									href={`/${locale}/${item.id}`}
									className={'menu__link'}
									// locale={locale}
								>
									{item.title}
								</Link>
							</li>
						)
					)}
				</ul>
			</nav>
		</div>
	);
}

export default HeaderMiddle;
