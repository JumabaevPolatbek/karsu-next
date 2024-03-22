import React from 'react';

type TProps = {
	children: React.ReactNode;
};

function MoreBtn(props: TProps) {
	const { children } = props;
	return (
		<li className={'menu__item extra'}>
			<button className={`menu__btn 'active' : null}`}>{children}</button>
			<nav className={`'open' : null}`}>
				<ul className={'extra-menu'}></ul>
			</nav>
		</li>
	);
}
export default MoreBtn;
