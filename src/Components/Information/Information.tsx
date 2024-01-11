import styles from './Information.module.scss';

type Props = {
	data: {
		type: string;
		title: string;
		heading: string;
		text: string;
		imgSrc: string;
		date: string;
	};
};

function Information(props: Props) {
	const data = props.data;
	return (
		<div className={styles['information']}>
			{data.type === 'big' ? (
				<div className={styles['big-post']}>
					<p
						className={
							styles['information__title']
						}
					>
						{data.title}
					</p>
					<h2
						className={
							styles['information__heading']
						}
					>
						{data.heading}
					</h2>
					<p
						className={
							styles['information__text']
						}
					>
						{data.text}
					</p>
					<img
						src={data.imgSrc}
						alt={data.title}
						className={
							styles['information__img']
						}
					/>
					<p
						className={
							styles['information__date']
						}
					>
						{data.date}
					</p>
				</div>
			) : (
				<div className={styles['small-post']}>
					<div
						className={
							styles['information__container']
						}
					>
						<p
							className={
								styles['information__title']
							}
						>
							{data.title}
						</p>
						<h2
							className={
								styles[
									'information__heading'
								]
							}
						>
							{data.heading}
						</h2>
						<p
							className={
								styles['information__text']
							}
						>
							{data.text}
						</p>
						<p
							className={
								styles['information__date']
							}
						>
							{data.date}
						</p>
					</div>
					<img
						src={data.imgSrc}
						alt={data.title}
						className={
							styles['information__img']
						}
					/>
				</div>
			)}
		</div>
	);
}

export default Information;
