import type { NubeSDK } from "@tiendanube/nube-sdk-types";
import { getProducts } from "./api";
import { RecommendedProducts } from "./components/RecommendedProducts";
import { initializeState } from "./state";

export async function App(nube: NubeSDK) {
	const products = await getProducts();
	initializeState(nube, products);

	nube.send("ui:slot:set", () => ({
		ui: {
			slots: { before_main_content: <RecommendedProducts /> },
		},
	}));
}
