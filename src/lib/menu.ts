'use server';
export async function getMenuById(params: string) {
    const response = await fetch(`https://api.yulbasali.uz/api/${params}`);
    return response.json();
}
