import { Post } from '@/lib/posts';
import styles from '../../styles/information/Information.module.scss';
import Image, { StaticImageData } from 'next/image';
import { Link } from '@/navigation';
type Props = {
	data: Post;
	locale?: string;
};

function Information(props: Props) {
	const { data, locale } = props;
	console.log(data.image_url);
	return (
		<div className={styles['information']}>
			{/* {data.type === 'big' ? ( */}
			<div className={'big-post'}>
				<Link href={`${locale}/post/${data.ID}`}>
					<p className={'information__title'}>{data.title}</p>
					<h2 className={'information__heading'}>{data.title}</h2>
					{/* <p className={'information__text'}>{data.content}</p> */}
					<Image
						src={`${data.image_url}`}
						alt={data.title}
						className={'information__img'}
						width={200}
						height={200}
					/>
					<p className={'information__date'}>{data.date}</p>
				</Link>
			</div>
			{/* ) : ( */}
			{/* <div className={'small-post'}>
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
				</div> */}
			{/* )} */}
		</div>
	);
}

export default Information;
