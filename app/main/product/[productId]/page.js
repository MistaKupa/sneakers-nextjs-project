import ProductDescription from "@/app/_components/_productDetails/ProductDetails";
import ProductImage from "@/app/_components/_productDetails/ProductImage";
import { getProduct } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const routeParams = await params;
  const product = await getProduct(routeParams.productId);

  const { images } = product;

  return (
    <div className="grid grid-cols-2 gap-10">
      <ProductImage product={product} />
      <ProductDescription product={product} />
    </div>
  );
}
