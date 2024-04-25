export type ItemType = {
    id: string;
    name: string;
    price: number;
    oldPrice: number;
    image: string;
}

export async function getData(): Promise<ItemType[]> {
    const result = await fetch("/static/shoes.json");
    return await result.json();
}