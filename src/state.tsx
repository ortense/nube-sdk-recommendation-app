import type {
	NubeComponent,
	NubeSDK,
	SecurityURL,
	UISlot,
} from "@tiendanube/nube-sdk-types";
import { RecommendedProducts } from "./components/RecommendedProducts";

export type Product = {
	id: string;
	name: string;
	price: string;
	variants: {
		label: string;
		value: number;
		image: SecurityURL;
	}[];
};

export type RecommendedProductsState = {
	products: RecommendedProduct[];
	nube: NubeSDK | null;
};

export type RecommendedProduct = Product & {
	selectedVariant: number;
};

const state: RecommendedProductsState = {
	nube: null,
	products: [],
};

function render(slot: UISlot, component: NubeComponent) {
	state.nube?.send("ui:slot:set", () => ({
		ui: {
			slots: { [slot]: component },
		},
	}));
}

export function useProducts() {
	return [...state.products];
}

export function initializeState(nube: NubeSDK, products: Product[]) {
	state.nube = nube;
	state.products = products.map((p) => ({
		...p,
		selectedVariant: p.variants[0].value,
	}));
}

export function addProductToCart(id: string) {
	const variant = state.products.find((p) => p.id === id)?.selectedVariant;
	state.nube?.send("cart:add", () => ({
		cart: {
			items: [
				{
					variant_id: variant,
					quantity: 1,
				},
			],
		},
	}));
}

export function updateRecommendation(
	id: string,
	product: Partial<RecommendedProduct>,
) {
	const index = state.products.findIndex((p) => p.id === id);
	if (index === -1) return;
	state.products[index] = {
		...state.products[index],
		...product,
	};
	render("before_main_content", <RecommendedProducts />);
}
