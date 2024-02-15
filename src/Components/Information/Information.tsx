import styles from '../../styles/information/Information.module.scss';
import Image, { StaticImageData } from 'next/image';
type Props = {
	data: {
		type: string;
		title: string;
		heading: string;
		text: string;
		imgSrc: StaticImageData;
		date: string;
	};
};

function Information(props: Props) {
	const data = props.data;
	return (
		<div className={styles['information']}>
			{data.type === 'big' ? (
				<div className={'big-post'}>
					<p className={'information__title'}>{data.title}</p>
					<h2 className={'information__heading'}>{data.heading}</h2>
					<p className={'information__text'}>{data.text}</p>
					<Image
						src={data.imgSrc}
						alt={data.title}
						className={'information__img'}
					/>
					<p className={'information__date'}>{data.date}</p>
				</div>
			) : (
				<div className={'small-post'}>
					<div className={'information__container'}>
						<p className={'information__title'}>{data.title}</p>
						<h2 className={'information__heading'}>
							{data.heading}
						</h2>
						<p className={'information__text'}>{data.text}</p>
						<p className={'information__date'}>{data.date}</p>
					</div>
					<Image
						src={data.imgSrc}
						alt={data.title}
						className={'information__img'}
					/>
				</div>
			)}
		</div>
	);
}

export default Information;
