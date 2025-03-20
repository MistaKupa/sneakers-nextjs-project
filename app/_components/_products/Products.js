"use client";

import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function Products({ products }) {
  const searchParams = useSearchParams();
  const router = useRouter();

  const sortByParam = searchParams.get("sortBy");

  const [sortBy, setSortBy] = useState(sortByParam || "Name A-Z");

  useEffect(() => {
    const params = new URLSearchParams(searchParams);
    params.set("sortBy", sortBy);

    router.push(`?${params.toString()}`, { shallow: true }); //
  }, [sortBy]);

  // if (sortBy === "Name A-Z") {
  //   products.sort((a, b) =>
  //     a.title.toUpperCase() < b.title.toUpperCase() ? -1 : 1
  //   );
  // }

  // if (sortBy === "Name Z-A") {
  //   products.sort((a, b) =>
  //     a.title.toUpperCase() > b.title.toUpperCase() ? -1 : 1
  //   );
  // }

  if (sortBy === "Name A-Z") {
    products.sort((a, b) => a.title.localeCompare(b.title));
  }

  if (sortBy === "Name Z-A") {
    products.sort((a, b) => b.title.localeCompare(a.title));
  }
  if (sortBy === "Price A-Z") {
    products.sort((a, b) => {
      const priceA = a.discount ? (a.price * a.discount) / 100 : a.price;
      const priceB = b.discount ? (b.price * b.discount) / 100 : b.price;

      return priceA - priceB;
    });
  }

  if (sortBy === "Price Z-A") {
    products.sort((a, b) => {
      const priceA = a.discount ? (a.price * a.discount) / 100 : a.price;
      const priceB = b.discount ? (b.price * b.discount) / 100 : b.price;

      return priceB - priceA;
    });
  }

  return (
    <>
      <div className="flex items-center justify-end gap-5 row-start-1 col-start-4">
        <label htmlFor="selectSortBy" className="font-semibold">
          Sort by:
        </label>
        <select
          name="sortBy"
          id="selectSortBy"
          className="border rounded-md p-1"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="Name A-Z">Name A-Z</option>
          <option value="Name Z-A">Name Z-A</option>
          <option value="Price A-Z">Price Lowest</option>
          <option value="Price Z-A">Price Highest</option>
        </select>
      </div>

      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </>
  );
}
