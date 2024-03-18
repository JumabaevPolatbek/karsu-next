'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { ChangeEvent, useTransition } from 'react';
import styles from '../styles/localeswitcher/LocalSwitcher.module.scss';
export default function LocalSwitcher() {
	const [isPending, startTransition] = useTransition();
	const router = useRouter();
	const localActive = useLocale();

	const onSelectChange = (e: ChangeEvent<HTMLSelectElement>) => {
		const nextLocale = e.target.value;
		startTransition(() => {
			router.replace(`/${nextLocale}`);
		});
	};
	return (
		<label className="lng-switcher">
			{/* <p className="lng-switcher__title">change language</p> */}
			<select
				defaultValue={localActive}
				className={styles['select']}
				onChange={onSelectChange}
				disabled={isPending}
			>
				<option value="en">English</option>
				<option value="ru">Русский</option>
				<option value="uz">Uzbek</option>
				<option value="kaa">Qaraqalpaq</option>
			</select>
		</label>
	);
}
