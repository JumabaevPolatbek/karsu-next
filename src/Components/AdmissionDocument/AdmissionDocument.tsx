import styles from './AdmissionDocument.module.scss';

function AdmissionDocument() {
	return (
		<div className={styles['container']}>
			<div className={styles['admission-document']}>
				<h1 className={styles['title']}>
					Подать документы
				</h1>
				<div className={styles['wrapper']}>
					<div
						className={
							styles['selected-univer']
						}
						style={{
							backgroundImage: `url(/assets/fon_highedu/group-184-4.png)`,
						}}
					>
						<div className={styles['info']}>
							<img
								src='/assets/hero-avatar.svg'
								alt='avatar'
								className={styles['avatar']}
							/>
							<p>
								Международный Московский
								университет
							</p>
						</div>
						<button
							className={
								styles[
									'change-univer__button'
								]
							}
						>
							Изменить
						</button>
					</div>
					<form action='#'>
						<p id='showLevel'>
							<span id='active'></span>
							<span></span>
							<span></span>
							{/*step1 ústinde scroll bolǵanda 1-span active bolıwı kerek, step2 ústinde scroll bolǵan 2-span active bolıwı kerek, step3 ústinde scrol bolǵan 3-span active bolıwı kerek. */}
						</p>
						<div className={styles['step1']}>
							<h2>Шаг 1. Личные данные</h2>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='surname'>
									Фамилия
								</label>
								<input
									type='text'
									name='surname'
									id='surname'
									placeholder='Иванов '
								/>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='name'>
									Имя
								</label>
								<input
									type='text'
									name='name'
									id='name'
									placeholder='Иван'
								/>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='father__name'>
									Отчество
								</label>
								<input
									type='text'
									name='father__name'
									id='father__name'
									placeholder='Иванов'
								/>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='phone'>
									Телефон
								</label>
								<input
									type='tel'
									name='phone'
									id='phone'
									placeholder='+7 (000) 000 00 00'
								/>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='email'>
									Почта
								</label>
								<input
									type='email'
									name='email'
									id='email'
									placeholder='ivan@mail.ru'
								/>
							</div>
						</div>
						<div className={styles['step2']}>
							<h2>Шаг 2. Программа</h2>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='levelEdu'>
									Уровень образовния
								</label>
								<select
									name='levelEdu'
									id='levelEdu'
								>
									<option value='0'>
										Бакалавриат
									</option>
									<option value='1'>
										Магистр
									</option>
								</select>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='departure'>
									Направление
								</label>
								<select
									name='departure'
									id='departure'
								>
									<option value='0'>
										Математика
									</option>
									<option value='1'>
										Физика
									</option>
									<option value='2'>
										Биология
									</option>
								</select>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='text'
							>
								<label htmlFor='programmType'>
									Программа
								</label>
								<select
									name='programmType'
									id='programmType'
								>
									<option value='0'>
										Анализ и аудит
									</option>
									<option value='1'>
										Анализ
									</option>
									<option value='2'>
										Аудит
									</option>
								</select>
							</div>
						</div>
						<div className={styles['step3']}>
							<h2>
								Шаг 3. Загрузите документы
							</h2>
							<p>
								Скан, или фото — можно на
								телефон
							</p>
							<div
								className={
									styles['input-group']
								}
								id='file'
							>
								<p>
									Первая страница паспорта
									и прописка
								</p>
								<label htmlFor='passport'>
									загрузить
								</label>
								<input
									type='file'
									name='passport'
									id='passport'
								/>
							</div>
							<div
								className={
									styles['input-group']
								}
								id='file'
							>
								<p>
									Диплом с приложением или
									аттестат 11 класса с
									результатами ЕГЭ или
									диплом с приложением и
									академсправкой
								</p>
								<label htmlFor='attestaciya'>
									загрузить
								</label>
								<input
									type='file'
									name='attestaciya'
									id='attestaciya'
								/>
								<div
									className={
										styles['scaners']
									}
								>
									<div
										className={
											styles['wrap']
										}
									>
										<img
											src='/assets/pasport1.png'
											alt='scan'
										/>
										<span>x</span>
									</div>
									<div
										className={
											styles['wrap']
										}
									>
										<img
											src='/assets/pasport1.png'
											alt='scan'
										/>
										<span>x</span>
									</div>
									<div
										className={
											styles['wrap']
										}
									>
										<img
											src='/assets/pasport1.png'
											alt='scan'
										/>
										<span>x</span>
									</div>
								</div>
							</div>
							<div
								className={
									styles['lower18']
								}
							>
								<div
									className={
										styles[
											'input-group'
										]
									}
									id='file'
								>
									<div
										className={
											styles[
												'check-age'
											]
										}
									>
										<h3>
											Поступающему
											меньше 18 лет
										</h3>
										<div
											className={
												styles[
													'switch'
												]
											}
										>
											<input
												type='checkbox'
												id='toggleAll'
											/>
											<label htmlFor='toggleAll'></label>
										</div>
									</div>
									<p>
										Паспорт одного из
										родителей или
										законного
										представителя
										(первая страница и
										прописка)
									</p>
									<label htmlFor='parentPassport'>
										загрузить
									</label>
									<input
										type='file'
										name='parentPassport'
										id='parentPassport'
									/>
								</div>
							</div>
						</div>
						<input
							type='submit'
							value='Отправить документы'
							className={styles['submit']}
						/>
						<div
							className={
								styles[
									'agree-give-documents'
								]
							}
						>
							<p>
								Нажимая кнопку “Задать
								вопрос”, Вы соглашаетесь с
								условиями{' '}
								<span>
									обработки персональных
									данных
								</span>
							</p>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
}

export default AdmissionDocument;
