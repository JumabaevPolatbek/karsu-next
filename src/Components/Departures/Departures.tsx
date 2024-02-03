import styles from './Departures.module.scss';
import { DataType } from '../Layouts/DeparturesSection/DeparturesSection';
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
type Props = {
	data: DataType[];
};

function Departures(props: Props) {
	const data = props.data;
	const [openMoreDeparture, setOpenMoreDeparture] = useState(false);
	return (
		<div className={styles['departures']}>
			{data.map((d: DataType, index: number) =>
				index < 6 ? (
					<div
						className={styles['departure']}
						style={{
							backgroundImage: `url(${d.backgroundImageUrl})`,
						}}
						key={index}
					>
						<div className={styles['departure__info']}>
							<h2 className={styles['departure__title']}>
								{d.title}
							</h2>
							<ul className={styles['departure__extra']}>
								{d.extraInfo.map((info: string) => (
									<li key={index}>{info}</li>
								))}
							</ul>
							<Link
								href="#"
								className={styles['departure__link']}
							>
								Консультация
							</Link>
						</div>
						<img
							src={d.icon}
							alt={d.title}
							className={styles['departure__icon']}
						/>
					</div>
				) : null
			)}
			<button
				className={
					styles[
						`departures__more ${openMoreDeparture ? 'open' : null}`
					]
				}
				onClick={() => setOpenMoreDeparture(true)}
			>
				Показать ещё {data.length - 6} направления
			</button>
			<div
				className={styles[`extra ${openMoreDeparture ? 'open' : null}`]}
			>
				{data.map((d: DataType, index: number) =>
					index >= 6 ? (
						<div
							className={styles['departure']}
							style={{
								backgroundImage: `url(${d.backgroundImageUrl})`,
							}}
							key={index}
						>
							<div className={styles['departure__info']}>
								<h2 className={styles['departure__title']}>
									{d.title}
								</h2>
								<ul className={styles['departure__extra']}>
									{d.extraInfo.map((info: string) => (
										<li key={index}>{info}</li>
									))}
								</ul>
								<Link
									href="#"
									className={styles['departure__link']}
								>
									консультация
								</Link>
							</div>
							<Image
								src={d.icon}
								alt={d.title}
								className={styles['departure__icon']}
							/>
						</div>
					) : null
				)}
			</div>
		</div>
	);
}

export default Departures;
