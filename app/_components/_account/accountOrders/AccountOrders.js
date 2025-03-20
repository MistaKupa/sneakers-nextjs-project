import { getServerSession } from "next-auth";
import OrderCard from "./OrderCard";
import { getUserOrders } from "@/app/_lib/data-service";

export default async function AccountOrders() {
  const session = await getServerSession();
  const userEmail = session?.user?.email;

  const orders = await getUserOrders(userEmail);

  return (
    <div className="flex flex-col gap-10">
      <h2 className="text-dark-500 text-3xl font-bold">My Orders</h2>
      <div className="flex flex-col gap-5 justify-center">
        <div className="grid grid-cols-5 items-center border-b-8 h-12 text-dark-400">
          <span className="col-start-1">Order Number</span>
          <span className="col-start-2 col-span-2">Date</span>
          <span className="col-start-4 col-span-2">Price</span>
        </div>
        <div className="grid grid-rows-[auto]">
          {orders.map((order) => (
            <OrderCard key={order.id} order={order} />
          ))}
        </div>
      </div>
    </div>
  );
}
