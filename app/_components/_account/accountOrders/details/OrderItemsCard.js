import Image from "next/image";
import Link from "next/link";

export default function OrderItemsCard({ orderItems, totalPrice }) {
  return (
    <div className="flex flex-col gap-5">
      {/* Header */}
      <div className="grid grid-cols-[2fr_1fr_1fr] text-dark-400 font-semibold text-sm border-b-4 pb-2">
        <span className="justify-self-start">Product</span>
        <span className="justify-self-center">Quantity</span>
        <span className="justify-self-center">Price</span>
      </div>
      {/*Items */}
      <div className="grid grid-rows-[auto] gap-5">
        {orderItems.map((item) => (
          <div
            key={item.product_id}
            className="grid grid-cols-[2fr_1fr_1fr] border-b pb-5"
          >
            <div className="flex items-center gap-5 justify-self-start">
              <div className="">
                <Image
                  src={item.product_image}
                  alt={`${item.product_name} image`}
                  width={80}
                  height={80}
                  className="rounded-md"
                />
              </div>

              <div>
                <h2 className="text-dark-400 text-sm">Sneakers</h2>
                <Link href={`/main/product/${item.product_id}`}>
                  <h3 className="text-sm font-semibold">{item.product_name}</h3>
                </Link>
              </div>
            </div>

            <span className="flex items-center justify-center text-sm">
              {item.quantity}
            </span>
            <span className="flex items-center justify-center text-sm">
              €{item.price_at_time}
            </span>
          </div>
        ))}

        <span className="border-b">DELIVERY</span>
      </div>
      <div className="grid grid-cols-[2fr_1fr_1fr] font-bold ">
        <span className="col-start-2 justify-self-center">Total Price:</span>
        <span className="col-start-3 justify-self-center">€{totalPrice}</span>
      </div>
    </div>
  );
}
