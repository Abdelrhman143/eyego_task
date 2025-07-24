"use client";
import { DollarSignIcon, ShoppingBasket } from "lucide-react";
import Card from "../../_components/Card";
import { useDispatch, useSelector } from "react-redux";

import { fetchProducts } from "@/features/products/ProductsSlice";
import { useEffect } from "react";
export default function Stats() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.products.count);
  useEffect(() => {
    dispatch(fetchProducts({}));
  }, [dispatch, count]);

  return (
    <div>
      {/* start stats */}
      <div className="grid sm:grid-cols-2 gap-5">
        <Card
          icon={<ShoppingBasket />}
          title={"total products"}
          stats={count}
        ></Card>
        <Card
          icon={<DollarSignIcon />}
          title={"total Total Revenue"}
          stats={"$200"}
        ></Card>
      </div>
      {/* end stats */}
    </div>
  );
}
