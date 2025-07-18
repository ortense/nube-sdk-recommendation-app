import type { Product } from "./state";

export function getProducts(): Promise<Product[]> {
	// Mock data
	const data: Product[] = [
		{
			id: "1",
			name: "Producto 1",
			price: "100",
			variants: [
				{
					label: "Variante 1",
					value: 1,
					image: "https://prd.place/200?id=1",
				},
				{
					label: "Variante 2",
					value: 2,
					image: "https://prd.place/200?id=2",
				},
			],
		},
		{
			id: "2",
			name: "Producto 2",
			price: "200",
			variants: [
				{
					label: "Variante 3",
					value: 3,
					image: "https://prd.place/200?id=3",
				},
				{
					label: "Variante 4",
					value: 4,
					image: "https://prd.place/200?id=4",
				},
			],
		},
		{
			id: "3",
			name: "Producto 3",
			price: "300",
			variants: [
				{
					label: "Variante 5",
					value: 5,
					image: "https://prd.place/200?id=5",
				},
				{
					label: "Variante 6",
					value: 6,
					image: "https://prd.place/200?id=6",
				},
				{
					label: "Variante 7",
					value: 7,
					image: "https://prd.place/200?id=7",
				},
			],
		},
	];
	return Promise.resolve(data);
}
