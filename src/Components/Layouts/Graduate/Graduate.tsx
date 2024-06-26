'use client';
import styles from '../../../styles/graduate/Graduate.module.scss';
import { useState } from 'react';
import Image from 'next/image';
import diplom from '../../../images/assets/diplom.png';
function Graduate() {
	const [activeTab, setActiveTab] = useState(1);

	const handleClick = (e: React.MouseEvent) => {
		const value = (e.target as HTMLLIElement).value;
		setActiveTab(value);
	};

	return (
		<div className="container">
			<div className={styles['graduate']}>
				<div className={'graduate__info'}>
					<h2 className={'graduate__title'}>
						Вы получите — диплом гособразца
					</h2>
					<p className={'graduate__text'}>
						Все наши учебные заведения-партнёры имеют
						госаккредитацию, а дипломы заносятся в федеральный
						реестр.
					</p>
					<ul className={'graduate__types'}>
						<li
							value={1}
							onClick={handleClick}
							className={`${activeTab === 1 ? 'active' : null}`}
						>
							Высшее
						</li>
						<li
							value={2}
							onClick={handleClick}
							className={`${activeTab === 2 ? 'active' : null}`}
						>
							Среднее
						</li>
						<li
							value={3}
							onClick={handleClick}
							className={`${activeTab === 3 ? 'active' : null}`}
						>
							ДПО
						</li>
					</ul>
				</div>
				<div className={'graduate__img'}>
					<Image src={diplom} alt="diplom" />
				</div>
			</div>
		</div>
	);
}

export default Graduate;
