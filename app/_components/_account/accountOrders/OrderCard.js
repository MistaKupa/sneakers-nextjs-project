import Link from "next/link";
import { IoEllipseSharp, IoEllipsisHorizontalSharp } from "react-icons/io5";
import { format } from "date-fns";

export default function OrderCard({ order }) {
  const {
    id,
    order_date,
    products_total_quantity: productsQuantity,
    total_price: totalPrice,
  } = order;

  const orderDate = format(new Date(order_date), "dd/MM/yyyy");

  return (
    <div className="grid grid-cols-5 h-20 border-b items-center">
      <div className="flex items-center justify-start gap-2">
        <IoEllipseSharp />
        <Link href="" className="text-dark-500 font-bold hover:text-newPrimary">
          {id}
        </Link>
      </div>
      <span>{orderDate}</span>
      <span>
        {productsQuantity < 2
          ? `${productsQuantity} product`
          : `${productsQuantity} products`}
      </span>
      <span>€{totalPrice}</span>
      <span className="flex items-center justify-around ">
        <Link
          href={`/main/account/myOrders/orderDetails/${order.id}`}
          className="text-newPrimary"
        >
          Details
        </Link>
        <IoEllipsisHorizontalSharp size={25} className="text-newPrimary" />
      </span>
    </div>
  );
}
