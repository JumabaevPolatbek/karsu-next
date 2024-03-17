'use client';
import HeaderTop from '../../HeaderTop';
import HeaderMiddle from '../../HeaderMiddle';
import { getLocale } from 'next-intl/server';
import { useGetMenusQuery } from '@/redux/slice/api';

function Header({ locale }: { locale: string }) {
    const { data } = useGetMenusQuery(locale);
    return (
        <header className='header'>
            <div className='container'>
                <HeaderTop />
                <HeaderMiddle data={data} locale={locale} />
            </div>
        </header>
    );
}

export default Header;
