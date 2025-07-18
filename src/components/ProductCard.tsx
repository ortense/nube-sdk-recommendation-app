import { Column, Image, Select, Text } from "@tiendanube/nube-sdk-jsx";
import type { RecommendedProduct } from "../state";
import { AddToCartButton } from "./AddToCartButton";

export type ProductCardProps = RecommendedProduct & {
	onAddToCart: (id: string) => void;
	onSelectVariant: (id: string, variant: string) => void;
};

export function ProductCard(props: ProductCardProps) {
	const image =
		props.variants.find((v) => v.value === props.selectedVariant)?.image ?? "";

	return (
		<Column alignItems="stretch">
			<Image
				src={image}
				alt={`product ${props.id} - variant ${props.selectedVariant}`}
			/>
			<Text>{props.name}</Text>
			<Text>{`R$ ${props.price}`}</Text>
			<Select
				id={`select-variant-${props.id}`}
				name="variant"
				label=""
				options={props.variants.map((variant) => ({
					label: variant.label,
					value: variant.value.toString(),
				}))}
				value={props.selectedVariant.toString()}
				onChange={(e) => props.onSelectVariant(props.id, e.value ?? "")}
			/>
			<AddToCartButton
				id={`cta-${props.id}`}
				onClick={() => props.onAddToCart(props.id)}
			/>
		</Column>
	);
}
