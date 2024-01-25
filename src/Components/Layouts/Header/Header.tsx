// import styles from '../../../../styles/header/Header.module.scss';
'use client';
import HeaderTop from '../../HeaderTop';
import HeaderMiddle from '../../HeaderMiddle';

function Header() {
	return (
		<header className="header">
			<div className="container">
				<HeaderTop />
				{/* <HeaderMiddle /> */}
			</div>
		</header>
	);
}

export default Header;
