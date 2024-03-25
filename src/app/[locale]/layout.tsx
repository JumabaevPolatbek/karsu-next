import type { Metadata, ResolvingMetadata } from 'next';
import { Inter } from 'next/font/google';
import '../../styles/globals.scss';
import Header from '../../Components/Layouts/Header';
import Footer from '../../Components/Layouts/Footer';
import { getTranslations } from 'next-intl/server';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { ReduxProvider } from '../StoreProvider';
import localFont from 'next/font/local';
const inter = Inter({ subsets: ['latin'] });
const myFont = localFont({
	src: '../../styles/fonts/Inter-VariableFont_slnt,wght.ttf',
	display: 'swap',
});
type Props = {
	params: { locale: string };
};
export async function generateMetadata(
	{ params: { locale } }: Props,
	parent: ResolvingMetadata
): Promise<Metadata> {
	const t = await getTranslations({ locale, namespace: 'MetaData' });
	return {
		title: t('title'),
		description: t('description'),
		icons: {
			icon: 'https://karsu.uz/wp-content/themes/newkarsu4/assets/img/favicons/favicon-32x32.png',
		},
	};
}
export default function RootLayout({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	const messages = useMessages();
	return (
		<html lang={locale}>
			<body className={myFont.className}>
				<ReduxProvider>
					<NextIntlClientProvider messages={messages}>
						<Header locale={locale} />
						<main>{children}</main>
						<Footer />
					</NextIntlClientProvider>
				</ReduxProvider>
			</body>
		</html>
	);
}
