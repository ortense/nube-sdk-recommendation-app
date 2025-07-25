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
		{
			id: "4",
			name: "Producto 4",
			price: "400",
			variants: [
				{
					label: "Variante 8",
					value: 8,
					image: "https://prd.place/200?id=8",
				},
				{
					label: "Variante 9",
					value: 9,
					image: "https://prd.place/200?id=9",
				},
			],
		},
		{
			id: "5",
			name: "Producto 5",
			price: "500",
			variants: [
				{
					label: "Variante 10",
					value: 10,
					image: "https://prd.place/200?id=10",
				},
				{
					label: "Variante 11",
					value: 11,
					image: "https://prd.place/200?id=11",
				},
			],
		},
		{
			id: "6",
			name: "Producto 6",
			price: "600",
			variants: [
				{
					label: "Variante 12",
					value: 12,
					image: "https://prd.place/200?id=12",
				},
				{
					label: "Variante 13",
					value: 13,
					image: "https://prd.place/200?id=13",
				},
			],
		},
	];
	return Promise.resolve(data);
}
