'use client';
import FooterContact from '../../FooterContact';
import FooterFAQ from '../../FooterFAQ';
import styles from '../../../styles/footer/Footer.module.scss';
import Image from 'next/image';
import Link from 'next/link';
import logoFooter from '../../../images/assets/logo-footer.svg';
import vk from '../../../images/assets/social/vk.svg';
import instagram from '../../../images/assets/social/instagram.svg';
import whatsapp from '../../../images/assets/social/whatsapp.svg';
function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className="container">
				<FooterFAQ />
				<FooterContact />
				<div className={'footer__info'}>
					<div className={'about'}>
						<Image src={logoFooter} alt="logo" />
						<p className={'description'}>
							Единая приёмная комиссия вузов и колледжей по
							дистанционным программам
						</p>
						<Link href="#">Политика конфиденциальности</Link>
					</div>
					<ul className={'navs'}>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
						<li>
							<Link href="#">Направления</Link>
						</li>
					</ul>
					<div className={'contacts'}>
						<div className={'contact__info'}>
							<p className={'phone'}>+7 (902) 311 36 64</p>
							<p className={'desc__work'}>Рабочее время: </p>
							<p className={'desc__time'}>
								{' '}
								Пн — Пт с 9.00 до 19.00
							</p>
						</div>
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
					</div>
					<Link href="#" className={'politics-mobile'}>
						Политика конфиденциальности
					</Link>
				</div>
				<div className={'invite'}>
					<Link href="#">Подобрать обучение</Link>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
