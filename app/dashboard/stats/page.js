"use client";
import { DollarSignIcon, ShoppingBasket } from "lucide-react";
import Card from "../../_components/Card";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchcategoryCounts,
  fetchProducts,
  fetchTotalRevenue,
} from "@/features/products/ProductsSlice";

import { useEffect } from "react";
import { formatCurrency } from "@/lib/helper";
import {
  Bar,
  Rectangle,
  ResponsiveContainer,
  BarChart,
  Cell,
  LabelList,
  Tooltip,
} from "recharts";

export default function Stats() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.products.count);
  const totalRevenue = useSelector((state) => state.products.totalRevenue);
  const categoryCounts = useSelector((state) => state.products.categoryCounts);
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];
  // fetching data
  useEffect(() => {
    dispatch(fetchProducts({}));
    dispatch(fetchTotalRevenue());
    dispatch(fetchcategoryCounts());
  }, [dispatch]);

  const data = categoryCounts.map((item) => ({
    name: item.category,
    count: item.count,
  }));

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
          title={"Total Revenue"}
          stats={formatCurrency(totalRevenue)}
        ></Card>
      </div>
      {/* end stats */}
      {/* start Chart */}
      <div className="bg-gray-50 mt-5 shadow-sm p-5">
        <h2 className=" mb-3 text-3xl font-bold">categorys</h2>
        <ResponsiveContainer width="100%" height={400}>
          <BarChart
            margin={{ top: 40, right: 30, left: 20, bottom: 5 }}
            width={500}
            height={300}
            data={data}
          >
            <Tooltip />
            <Bar dataKey="count" fill="#8884d8" shape={<Rectangle />}>
              <LabelList dataKey="name" position="top" />
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
      {/* start Chart */}
    </div>
  );
}
