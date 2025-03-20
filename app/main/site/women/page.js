import Products from "@/app/_components/_products/Products";
import { getMenProducts } from "@/app/_lib/data-service";

export default async function Women() {
  const products = await getMenProducts();

  return (
    <>
      <div className="flex items-baseline justify-start gap-3 row-start-1">
        <h2 className="text-dark-500 text-2xl font-semibold">Women Sneakers</h2>
        <span className="text-dark-400 text-xs font-semibold">
          [{products.length}]
        </span>
      </div>

      <Products products={products} />
    </>
  );
}
