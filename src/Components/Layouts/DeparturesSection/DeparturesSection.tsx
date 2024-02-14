'use client';
import { useState } from 'react';
import Departures from '../../Departures';
import styles from '../../../styles/departuresSection/DeparturesSection.module.scss';
import path1 from '../../../images/assets/fon_departure/1.png';
import path2 from '../../../images/assets/fon_departure/2.png';
import path3 from '../../../images/assets/fon_departure/3.png';
import path4 from '../../../images/assets/fon_departure/4.png';
import path5 from '../../../images/assets/fon_departure/5.png';
import path6 from '../../../images/assets/fon_departure/6.png';
import icon1 from '../../../images/assets/icon_departure/1.svg';
import icon2 from '../../../images/assets/icon_departure/2.svg';
import icon3 from '../../../images/assets/icon_departure/3.svg';
import icon4 from '../../../images/assets/icon_departure/4.svg';
import icon5 from '../../../images/assets/icon_departure/5.svg';
import icon6 from '../../../images/assets/icon_departure/6.svg';
export type DataType = {
	id: number;
	title: string;
	backgroundImageUrl: string;
	icon: string;
	extraInfo: string[];
};

const data: DataType[] = [
	{
		id: 1,
		title: 'Банковское дело',
		backgroundImageUrl: `${path1}`,
		icon: `${icon1}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 2,
		title: 'Бизнес-информатика',
		backgroundImageUrl: `${path2}`,
		icon: `${icon2}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 3,
		title: 'Гостиничный сервис',
		backgroundImageUrl: `${path3}`,
		icon: `${icon3}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 4,
		title: 'госуправление',
		backgroundImageUrl: `${path4}`,
		icon: `${icon4}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 5,
		title: 'Дефектологическое образование',
		backgroundImageUrl: `${path5}`,
		icon: `${icon5}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 6,
		title: 'Дошкольное образование',
		backgroundImageUrl: `${path6}`,
		icon: `${icon6}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 1,
		title: 'Банковское дело',
		backgroundImageUrl: `${path1}`,
		icon: `${icon1}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 2,
		title: 'Бизнес-информатика',
		backgroundImageUrl: `${path2}`,
		icon: `${icon2}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 3,
		title: 'Гостиничный сервис',
		backgroundImageUrl: `${path3}`,
		icon: `${icon3}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 4,
		title: 'госуправление',
		backgroundImageUrl: `${path4}`,
		icon: `${icon4}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 5,
		title: 'Дефектологическое образование',
		backgroundImageUrl: `${path5}`,
		icon: `${icon5}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 6,
		title: 'Дошкольное образование',
		backgroundImageUrl: `${path6}`,
		icon: `${icon6}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 1,
		title: 'Банковское дело',
		backgroundImageUrl: `${path1}`,
		icon: `${icon1}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 2,
		title: 'Бизнес-информатика',
		backgroundImageUrl: `${path2}`,
		icon: `${icon2}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 3,
		title: 'Гостиничный сервис',
		backgroundImageUrl: `${path3}`,
		icon: `${icon3}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 4,
		title: 'госуправление',
		backgroundImageUrl: `${path4}`,
		icon: `${icon4}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 5,
		title: 'Дефектологическое образование',
		backgroundImageUrl: `${path5}`,
		icon: `${icon5}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 6,
		title: 'Дошкольное образование',
		backgroundImageUrl: `${path6}`,
		icon: `${icon6}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 1,
		title: 'Банковское дело',
		backgroundImageUrl: `${path1}`,
		icon: `${icon1}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 2,
		title: 'Бизнес-информатика',
		backgroundImageUrl: `${path2}`,
		icon: `${icon2}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 3,
		title: 'Гостиничный сервис',
		backgroundImageUrl: `${path3}`,
		icon: `${icon3}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 4,
		title: 'госуправление',
		backgroundImageUrl: `${path4}`,
		icon: `${icon4}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 5,
		title: 'Дефектологическое образование',
		backgroundImageUrl: `${path5}`,
		icon: `${icon5}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 6,
		title: 'Дошкольное образование',
		backgroundImageUrl: `${path6}`,
		icon: `${icon6}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 1,
		title: 'Банковское дело',
		backgroundImageUrl: `${path1}`,
		icon: `${icon1}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 2,
		title: 'Бизнес-информатика',
		backgroundImageUrl: `${path2}`,
		icon: `${icon2}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 3,
		title: 'Гостиничный сервис',
		backgroundImageUrl: `${path3}`,
		icon: `${icon3}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 4,
		title: 'госуправление',
		backgroundImageUrl: `${path4}`,
		icon: `${icon4}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 5,
		title: 'Дефектологическое образование',
		backgroundImageUrl: `${path5}`,
		icon: `${icon5}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
	{
		id: 6,
		title: 'Дошкольное образование',
		backgroundImageUrl: `${path6}`,
		icon: `${icon6}`,
		extraInfo: ['от 12 500 ₽ семестр', 'от 2,5 лет'],
	},
];

function DeparturesSection() {
	const [partNumber, setPartNumber] = useState(1);

	return (
		<div className={styles['departures-section']}>
			<div className={'container'}>
				<h1 className={'title'}>Направления</h1>
				<ul className={'tab'}>
					<li
						className={'tab__item'}
						value={1}
						id={`${partNumber === 1 ? 'active' : null}`}
						onClick={() => setPartNumber(1)}
					>
						Высшее <span>{data.length}</span>
					</li>
					<li
						className={'tab__item'}
						value={2}
						id={`${partNumber === 2 ? 'active' : null}`}
						onClick={() => setPartNumber(2)}
					>
						Среднее <span>{data.length}</span>{' '}
					</li>
					<li
						className={'tab__item'}
						value={3}
						id={`${partNumber === 3 ? 'active' : null}`}
						onClick={() => setPartNumber(3)}
					>
						ДПО <span>{data.length}</span>
					</li>
				</ul>
				<div className={'content'}>
					<Departures data={data} />
				</div>
			</div>
		</div>
	);
}

export default DeparturesSection;
