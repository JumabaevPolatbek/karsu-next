'use server';
export async function getMenuById(params: string) {
    // const response = await fetch(`https://api.yulbasali.uz/api/${params}`);
    // return response.json();
    return await fetch(`https://api.yulbasali.uz/api/${params}`)
        .then((res) => res.json())
        .then((res) => res.data);
}
