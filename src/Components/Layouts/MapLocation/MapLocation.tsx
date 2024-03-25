import { useTranslations } from 'next-intl';
import styles from '../../../styles/maps/MapLocation.module.scss';

function MapLocation() {
	const t = useTranslations('Map');
	return (
		<div className={styles['location']}>
			<div className="container">
				<h2 className="title">{t('title')}</h2>
				<div className={'map'}>
					<iframe
						src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7543.551012028038!2d59.626894!3d42.45274400000002!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x91129d2b50e670e!2z0JrQsNGA0LDQutCw0LvQv9Cw0LrRgdC60LjQuSDQs9C-0YHRg9C00LDRgNGB0YLQstC10L3QvdGL0Lkg0YPQvdC40LLQtdGA0YHQuNGC0LXRgiDQuNC80LXQvdC4INCR0LXRgNC00LDRhdCw!5e1!3m2!1sru!2sus!4v1676095615403!5m2!1sru!2sus"
						width="100%"
						height="450"
						loading="lazy"
						referrerPolicy="no-referrer-when-downgrade"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default MapLocation;
