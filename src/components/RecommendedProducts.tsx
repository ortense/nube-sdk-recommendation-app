import { Column, Row, Text } from "@tiendanube/nube-sdk-jsx";
import { addProductToCart, updateRecommendation, useProducts } from "../state";
import { ProductCard } from "./ProductCard";
import { styled } from "@tiendanube/nube-sdk-ui";

const ProductRow = styled(Row)`
	max-width: 100%;
	overflow-x: auto;
	padding: 2em;
	gap: 10px;
`;

export function RecommendedProducts() {
	const products = useProducts();

	return (
		<Column>
			<Text heading={2}>Compre junto!!</Text>
			<ProductRow>
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
			</ProductRow>
		</Column>
	);
}
