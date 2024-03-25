import styles from '../../styles/footer/FooterFAQ.module.scss';
import { useState } from 'react';
// import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import plus from '../../images/assets/plus.svg';
import { useTranslations } from 'next-intl';
function FooterFAQ() {
	const [active, setActive] = useState(0);

	const handleClick = (e: React.MouseEvent) => {
		const id = (e.target as HTMLSpanElement).id;
		setActive(+id);
	};
	const t = useTranslations('Questions');
	const fq = useTranslations('FooterFAQ');
	const keys = ['q1', 'q2', 'q3'] as const;
	return (
		<div className={styles['footer-faq']}>
			<h1 className={'title'}>{fq('title')}</h1>
			<div className={'questions'}>
				{/* [1,2,3,4,5] massiviniń ornında maǵlıwmatlar massivi bolıwı kerek */}

				{keys.map((key, index) => (
					<div className={'question-answer'} key={key}>
						<h3
							className={'question'}
							id={`${index}+1`}
							onClick={handleClick}
						>
							<p>{t(`${key}.title`)}</p>
							<span>
								<Image src={plus} alt="plus" />
							</span>
						</h3>
						<p className={`answer active`}>{t(`${key}.answer`)}</p>
					</div>
				))}
			</div>
		</div>
	);
}

export default FooterFAQ;
