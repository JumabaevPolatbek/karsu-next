import { redirect } from 'next/navigation';

export default function RootPage({
	children,
	params: { locale },
}: {
	children: React.ReactNode;
	params: { locale: string };
}) {
	redirect(`${locale}`);
}
