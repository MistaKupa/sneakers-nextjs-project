import { supabase } from "./supabase-server";

export async function getMenProducts() {
  const { data, error } = await supabase
    .from("menSneakers")
    .select("id, title, description, price, discount, details, images");

  if (error) {
    console.error(error);
    throw new Error("Men products could not be loaded.");
  }

  return data;
}

export async function getProduct(id) {
  const { data, error } = await supabase
    .from("menSneakers")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error);
    throw new Error("Product could not be loaded.");
  }

  return data;
}

export async function getUserOrders(email) {
  let { data: orders, error: ordersError } = await supabase
    .from("orders")
    .select("*")
    .eq("customer_email", email);

  if (ordersError) {
    console.error(error);
    throw new Error("User orders could not be loaded");
  }

  return orders;
}

export async function getOrderDetails(orderId) {
  let { data: orderItems, error: orderItemsError } = await supabase
    .from("order_items")
    .select("*")
    .eq("order_id", orderId);

  if (orderItemsError) {
    console.error(orderItemsError);
    throw new Error("Order items could not be loaded");
  }

  console.log(orderItems);

  let { data: orderDetails, error: detailsError } = await supabase
    .from("orders")
    .select("*")
    .eq("id", orderId);

  if (detailsError) {
    console.error(detailsError);
    throw new Error("Order details could not be loaded");
  }

  return { orderItems, orderDetails };
}
