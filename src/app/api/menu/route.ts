import { Menus } from '@/redux/types/menu';
import { cookies } from 'next/headers';
import type { NextApiRequest, NextApiResponse } from 'next';
type ResponseData = {
    message: string;
};
// async function getMenus(params: string) {
//     const response = await fetch(
//         `https://api.yulbasali.uz/api/getMenu/${params}`
//     );
//     return response.json();
// }
export async function GET() {
    const cookie = cookies();
    const locale = cookie.get('NEXT_LOCALE');
    const dataMenu = await fetch(
        `https://api.yulbasali.uz/api/getMenu/${locale}`
    );
    console.log(await dataMenu.json());
    return Response.json(dataMenu);
}
