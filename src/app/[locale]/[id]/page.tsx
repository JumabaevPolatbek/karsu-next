// import { useRouter } from 'next/router';

import { getMenuById } from './action';
import { getPages } from '@/lib/pages';
import { Menu } from '@/redux/types/menu';
async function getMenuByID(params: string) {
    const response = await fetch(`https://api.yulbasali.uz/api/${params}`);
    return response.json();
}
export default async function Page({
    params,
}: {
    params: { id: string; locale: string };
}) {
    // const dataMenu = getMenuById(params.id);
    // console.log(dataMenu);
    return <div>hello</div>;
}
