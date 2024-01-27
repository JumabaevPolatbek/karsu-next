'use client';
import styles from '../../../styles/partners/Partners.module.scss';
import Slider from 'react-slick';
import Image from 'next/image';

function Partners() {
	const settings = {
		centerMode: true,
		centerPadding: '10px',
		slidesToShow: 6,
		speed: 1000,
		slidesToScroll: 1,
		arrows: false,
		dots: false,
		autoplay: true,
		responsive: [
			{
				breakpoint: 1280,
				settings: {
					slidesToShow: 2,
				},
			},
		],
	};

	const renderSlides = [1, 2, 3, 4, 5, 6, 7, 8].map(
		(partnerNumber: number, index: number) => (
			<Image
				src={`/assets/partners/partner${partnerNumber}.png`}
				key={index}
				alt={`partner${partnerNumber}`}
			/>
		)
	);

	return (
		<div className={styles['partners']}>
			<div className={styles['partner']}>
				<Slider {...settings}>{renderSlides}</Slider>
			</div>
		</div>
	);
}

export default Partners;
