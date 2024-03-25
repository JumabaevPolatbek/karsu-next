import Information from '../../Information/Information';
import styles from '../../../styles/information/InformationSection.module.scss';
import big from '../../../images/assets/posts/big.png';
import small from '../../../images/assets/posts/small.png';
import { Posts } from '@/lib/posts';
import { useTranslations } from 'next-intl';
type Props = {
	params?: string;
	data?: Posts;
};
function InformationSection({ params, data }: Props) {
	const t = useTranslations('News');
	return (
		<div className="container">
			<div className={styles['information-section']}>
				<h2 className={'title'}>{t('title')}</h2>
				<div className={'information__block'}>
					<ul className={'information__types'}>
						<li className={'active'}>
							Все <span>36</span>
						</li>
						<li>
							Абитуриенту <span>14</span>
						</li>
						<li>
							Переводнику <span>5</span>
						</li>
						<li>
							Новости <span>10</span>
						</li>
					</ul>
				</div>
				<div className={'posts'}>
					<div className={'post-block'}>
						{/* <Information data={bigPost} />
						<div className={'small-block'}>
							<Information data={smallPost} />
							<Information data={smallPost} />
						</div>
						<div className={'small-block'}>
							<Information data={smallPost} />
							<Information data={smallPost} />
						</div>
					</div>
					<div className={'post-block'}>
						<Information data={bigPost} />
						<Information data={bigPost} />
						<div className={'small-block'}>
							<Information data={smallPost} />
							<Information data={smallPost} />
						</div> */}
						{data?.map((post, index) =>
							post.image_url !== null ? (
								<Information
									data={post}
									key={post.ID}
									locale={params}
								/>
							) : null
						)}
					</div>
				</div>
			</div>
		</div>
	);
}

export default InformationSection;
