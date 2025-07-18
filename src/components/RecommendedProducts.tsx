import { Row } from "@tiendanube/nube-sdk-jsx";
import { addProductToCart, updateRecommendation, useProducts } from "../state";
import { ProductCard } from "./ProductCard";

export function RecommendedProducts() {
	const products = useProducts();

	return (
		<Row gap="10px" padding="2em">
			{products.map((props) => (
				// biome-ignore lint/correctness/useJsxKeyInIterable: temporary fix
				<ProductCard
					{...props}
					onAddToCart={addProductToCart}
					onSelectVariant={(id, variant) =>
						updateRecommendation(id, { selectedVariant: Number(variant) })
					}
				/>
			))}
		</Row>
	);
}
