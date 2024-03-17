import Image from 'next/image';
import styles from '../../styles/banner/HeroBanner.module.scss';
import shareSvg from '../../images/assets/share.svg';
import heroAvatar from '../../images/assets/hero-avatar.svg';
import banner from '../../images/assets/fon-800/city/group_184_5.png';
import { ReactNode } from 'react';
import { useTranslations } from 'next-intl';
type Props = {
    children?: ReactNode;
    param?: {
        locale?: string;
    };
};
function HeroBanner() {
    const t = useTranslations('Header');
    return (
        <div
            className={styles['hero-banner']}
            style={{
                backgroundImage: `url(https://karsu.uz/wp-content/uploads/2021/01/DSCN5748.jpg)`,
            }}
        >
            <h1 className={'hero-title'}>
                {t('title')}
                {/* <div className={'share__btn'}>
                    <Image src={shareSvg} alt='share' />
                </div> */}
            </h1>
            {/* <p className={'hero-text'}>
                Мы — единая приёмная комиссия вузов и колледжей по программам
                дистанционного обучения
            </p>
            <div className={'hero-info'}>
                <ul className={'hero-stat'}>
                    <li>от 12 500 ₽</li>
                    <li>от 2,5 лет</li>
                    <li>100% онлайн</li>
                </ul> */}
            {/* <div className={'hero-avatar'}>
                    <Image
                        src='https://karsu.uz/wp-content/themes/newkarsu4/assets/img/logo-small.png'
                        alt='univer-avatar'
                        width={20}
                        height={20}
                    />
                </div> */}
            {/* </div> */}
        </div>
    );
}

export default HeroBanner;
