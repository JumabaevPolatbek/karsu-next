import Image from 'next/image';
import plus from '../../images/assets/plus.svg';
import React from 'react';

type Props = {
	title: string;
	answer: string;
	onToggle: () => void;
	active: boolean;
};

function FAQItems(props: Props) {
	const { title, answer, onToggle, active } = props;

	return (
		<div className={'question-answer'}>
			<h3 className={'question'} onClick={onToggle}>
				<p>{title}</p>
				<span>
					<Image src={plus} alt="plus" />
				</span>
			</h3>
			<p className={`answer ${active ? 'active' : null}`}>{answer}</p>
		</div>
	);
}

export default FAQItems;
