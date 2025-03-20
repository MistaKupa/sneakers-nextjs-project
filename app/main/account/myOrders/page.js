import AccountOrders from "@/app/_components/_account/accountOrders/AccountOrders";
import OrdersLegend from "@/app/_components/_account/accountOrders/OrdersLegend";

export default function MyOrders() {
  return (
    <div className="w-full grid grid-cols-[300px_1140px] mt-5">
      <OrdersLegend />
      <AccountOrders />
    </div>
  );
}
