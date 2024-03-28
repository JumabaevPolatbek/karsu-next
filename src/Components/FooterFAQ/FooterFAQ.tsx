import styles from '../../styles/footer/FooterFAQ.module.scss';
import { useState } from 'react';
// import { v4 as uuid } from 'uuid';
import Image from 'next/image';
import Link from 'next/link';
import plus from '../../images/assets/plus.svg';
import { useTranslations } from 'next-intl';
import FAQItems from './FAQitem';
function FooterFAQ() {
	const [active, setActive] = useState<number | null>(null);

	const handleChangeState = (id: number) => {
		setActive((prevIndex) => (prevIndex === id ? null : id));
	};

	const handleClick = (e: React.MouseEvent) => {
		const id = (e.target as HTMLSpanElement).id;
		handleChangeState(Number(id));
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
					<FAQItems
						title={t(`${key}.title`)}
						answer={t(`${key}.answer`)}
						key={index}
						onToggle={() => handleChangeState(index)}
						active={active === index}
					/>
				))}
			</div>
		</div>
	);
}

export default FooterFAQ;
