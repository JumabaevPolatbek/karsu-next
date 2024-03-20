import styles from '../../styles/departuresSection/Departures.module.scss';
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
						className={'departure'}
						style={{
							backgroundImage: `url(${d.backgroundImageUrl})`,
						}}
						key={index}
					>
						<div className={'departure__info'}>
							<h2 className={'departure__title'}>{d.title}</h2>
							<ul className={'departure__extra'}>
								{d.extraInfo.map((info: string) => (
									<li key={index}>{info}</li>
								))}
							</ul>
							<Link href="#" className={'departure__link'}>
								Консультация
							</Link>
						</div>
						<Image
							src={d.icon}
							alt={d.title}
							className={'departure__icon'}
							width={50}
							height={50}
						/>
					</div>
				) : null
			)}
			<button
				className={`departure__more ${
					openMoreDeparture ? 'open' : null
				}`}
				onClick={() => setOpenMoreDeparture(!openMoreDeparture)}
			>
				Показать ещё {data.length - 6} направления
			</button>
			<div className={`extra ${openMoreDeparture ? 'open' : null}`}>
				{data.map((d: DataType, index: number) =>
					index >= 6 ? (
						<div
							className={'departure'}
							style={{
								backgroundImage: `url(${d.backgroundImageUrl})`,
							}}
							key={index}
						>
							<div className={'departure__info'}>
								<h2 className={'departure__title'}>
									{d.title}
								</h2>
								<ul className={'departure__extra'}>
									{d.extraInfo.map((info: string) => (
										<li key={index}>{info}</li>
									))}
								</ul>
								<Link href="#" className={'departure__link'}>
									консультация
								</Link>
							</div>
							<Image
								src={d.icon}
								alt={d.title}
								className={'departure__icon'}
								width={50}
								height={50}
							/>
						</div>
					) : null
				)}
			</div>
		</div>
	);
}

export default Departures;
