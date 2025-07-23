"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import AddProdcuct from "../_components/AddProdcuct";
import Actions from "../_components/Actions";
import supabase from "@/lib/supabase";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "@/features/products/ProductsSlice";

export default function Dashboard() {
  // const products = [
  //   {
  //     id: "5",
  //     name: "Wireless Headphones Pro",
  //     category: "Electronics",
  //     price: 199.99,
  //     stock: 75,
  //     rating: 4.6,
  //     sales: 850,
  //     imageUrl: "https://placehold.co/200x200.png/electronics1.png",
  //   },
  // ];

  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              {/* <TableHead>image</TableHead> */}
              <TableHead>name</TableHead>
              <TableHead>category</TableHead>
              <TableHead>price</TableHead>
              <TableHead>sales</TableHead>
              <TableHead>stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {products.map((product) => (
              <TableRow key={product.id}>
                {/* <TableCell>
                  <img alt="product image" src={product.imageUrl}></img>
                </TableCell> */}
                <TableCell className="font-medium">{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>${product.price}</TableCell>
                <TableCell>${product.sales}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Actions product={product} />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      <AddProdcuct />
    </>
  );
}
