import ProductDescription from "@/app/_components/_productDetails/ProductDetails";
import ProductImage from "@/app/_components/_productDetails/ProductImage";
import { getProduct } from "@/app/_lib/data-service";

export default async function Page({ params }) {
  const routeParams = await params;
  const { product, sneakerSizes } = await getProduct(routeParams.productId);

  const { images } = product;

  return (
    <div className="flex flex-col gap-14 px-5 md:gap-20 lg:grid lg:grid-cols-2 lg:gap-20">
      <ProductImage product={product} />
      <ProductDescription product={product} sneakerSizes={sneakerSizes} />
    </div>
  );
}
