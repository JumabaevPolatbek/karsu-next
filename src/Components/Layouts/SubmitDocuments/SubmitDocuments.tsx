import styles from '../../../styles/submitDocument/SubmitDocuments.module.scss';
import Image from 'next/image';
import fonDeparture from '../../../images/assets/fon_departure/1.png';
import heroAvatar from '../../../images/assets/hero-avatar.svg';
import Link from 'next/link';
function SubmitDocuments() {
	return (
		<div className={styles['submit-documents']}>
			<div className="container">
				<div className={'documents__info'}>
					<h2 className={'title'}>Подать документы</h2>
					<p className={'description'}>
						После того, как вы отправите документы мы свяжемся с
						Вами для уточнения деталей
					</p>
					<h3 className={'alert'}>
						Чтобы начать — выберите учебное заведение
					</h3>
					<div className={'input-group'}>
						<input
							type="search"
							name="search"
							id="search"
							placeholder="Поиск"
						/>
						<p className={'result'}>Найдено 6 вузов</p>
					</div>
				</div>

				<div className={styles['departures']}>
					<div
						className={'departure'}
						style={{
							backgroundImage: `url(${fonDeparture.src})`,
						}}
					>
						<div className={'departure__info'}>
							<p className={'departure__type'}>Преимущество</p>
							<h2 className={'departure__title'}>
								Международный Московский университет
							</h2>
							<p className={'departure__extra'}>
								От 12 500 ₽ семестр
							</p>
							<Link href="#" className={'departure__link'}>
								3 направления
							</Link>
						</div>
						<Image
							src={heroAvatar}
							alt="univ"
							className={'departure__univ'}
						/>
					</div>
					<div
						className={'departure'}
						style={{
							backgroundImage: `url(${fonDeparture.src})`,
						}}
					>
						<div className={'departure__info'}>
							<p className={'departure__type'}>Преимущество</p>
							<h2 className={'departure__title'}>
								Международный Московский университет
							</h2>
							<p className={'departure__extra'}>
								От 12 500 ₽ семестр
							</p>
							<Link href="#" className={'departure__link'}>
								3 направления
							</Link>
						</div>
						<Image
							src={heroAvatar}
							alt="univ"
							className={'departure__univ'}
						/>
					</div>
					<div
						className={'departure'}
						style={{
							backgroundImage: `url(${fonDeparture.src})`,
						}}
					>
						<div className={'departure__info'}>
							<p className={'departure__type'}>Преимущество</p>
							<h2 className={'departure__title'}>
								Международный Московский университет
							</h2>
							<p className={'departure__extra'}>
								От 12 500 ₽ семестр
							</p>
							<Link href="#" className={'departure__link'}>
								3 направления
							</Link>
						</div>
						<Image
							src={heroAvatar}
							alt="univ"
							className={'departure__univ'}
						/>
					</div>
					<div
						className={'departure'}
						style={{
							backgroundImage: `url(${fonDeparture.src})`,
						}}
					>
						<div className={'departure__info'}>
							<p className={'departure__type'}>Преимущество</p>
							<h2 className={'departure__title'}>
								Международный Московский университет
							</h2>
							<p className={'departure__extra'}>
								От 12 500 ₽ семестр
							</p>
							<Link href="#" className={'departure__link'}>
								3 направления
							</Link>
						</div>
						<Image
							src={heroAvatar}
							alt="univ"
							className={'departure__univ'}
						/>
					</div>
					<div
						className={'departure'}
						style={{
							backgroundImage: `url(${fonDeparture.src})`,
						}}
					>
						<div className={'departure__info'}>
							<p className={'departure__type'}>Преимущество</p>
							<h2 className={'departure__title'}>
								Международный Московский университет
							</h2>
							<p className={'departure__extra'}>
								От 12 500 ₽ семестр
							</p>
							<Link href="#" className={'departure__link'}>
								3 направления
							</Link>
						</div>
						<Image
							src={heroAvatar}
							alt="univ"
							className={'departure__univ'}
						/>
					</div>
					<div
						className={'departure'}
						style={{
							backgroundImage: `url(${fonDeparture.src})`,
						}}
					>
						<div className={'departure__info'}>
							<p className={'departure__type'}>Преимущество</p>
							<h2 className={'departure__title'}>
								Международный Московский университет
							</h2>
							<p className={'departure__extra'}>
								От 12 500 ₽ семестр
							</p>
							<Link href="#" className={'departure__link'}>
								3 направления
							</Link>
						</div>
						<Image
							src={heroAvatar}
							alt="univ"
							className={'departure__univ'}
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export default SubmitDocuments;
