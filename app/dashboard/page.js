"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import AddProdcuct from "../_components/AddProdcuct";
import Actions from "../_components/Actions";
import supabase from "@/lib/supabase";
import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  fetchProducts,
  setCategory,
  setPage,
  setSort,
} from "@/features/products/ProductsSlice";
import { Minus } from "lucide-react";
import { useSearchParams, useRouter, redirect } from "next/navigation";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import Sort from "../_components/Sort";
import { useSession } from "next-auth/react";

export default function Dashboard() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.items);
  const count = useSelector((state) => state.products.count);
  const status = useSelector((state) => state.products.status);

  const searchParams = useSearchParams();
  const sort = searchParams.get("sort" || null);
  const category = searchParams.get("category" || "all");
  const page = Math.max(1, parseInt(searchParams.get("page") || "1", 10));
  const limit = parseInt(searchParams.get("limit") || "10", 10);
  const router = useRouter();

  const totalPages = Math.ceil(count / limit);

  // fetch limit products
  useEffect(() => {
    const currentPage = searchParams.get("page");
    const currentLimit = searchParams.get("limit");
    if (!currentPage || !currentLimit) {
      router.replace(`?page=1&limit=10`);
    }
    dispatch(fetchProducts({ limit, page, category, sort }));
  }, [dispatch, page, limit, router, searchParams, category, sort]);

  function buildPageUrl(newPage) {
    const params = new URLSearchParams(searchParams.toString());
    params.set("page", newPage);
    params.set("limit", limit);
    if (category) params.set("category", category);
    if (sort) params.set("sort", sort);
    return `?${params.toString()}`;
  }

  function handlePageChange(newPage) {
    router.push(buildPageUrl(newPage));
    dispatch(setPage(newPage));
  }

  // Get values from Redux
  const reduxCategory = useSelector((state) => state.products.category);
  const reduxSort = useSelector((state) => state.products.sort);

  // Sync Redux state with URL
  useEffect(() => {
    if (reduxCategory !== category) {
      dispatch(setCategory({ category }));
    }
    if (reduxSort !== sort) {
      dispatch(setSort({ sort }));
    }
  }, [category, sort, reduxCategory, reduxSort, dispatch]);

  return (
    <>
      <div className="md:flex md:items-center md:justify-between mb-4">
        <Filter />
        <Sort />
      </div>

      {status === "loading" ? (
        <Spinner />
      ) : (
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
                  <TableCell>
                    {product.sales === null ? <Minus /> : `$${product.sales}`}
                  </TableCell>
                  <TableCell>{product.stock}</TableCell>
                  <TableCell>
                    <Actions product={product} />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}

      <Pagination className="my-4">
        <PaginationContent>
          <PaginationItem>
            {totalPages === 1 || page === 1 ? (
              ""
            ) : (
              <PaginationPrevious
                className="bg-gray-200"
                onClick={() => handlePageChange(page > 1 ? page - 1 : 1)}
                // `?page=${page > 1 ? page - 1 : 1}&limit=${limit}`
                href={buildPageUrl(page > 1 ? page - 1 : 1)}
              />
            )}
          </PaginationItem>
          {[...Array(totalPages)].map((_, idx) => (
            <PaginationItem key={idx}>
              <PaginationLink
                // `?page=${idx + 1}&limit=${limit}`
                href={buildPageUrl(idx + 1)}
                isActive={page === idx + 1}
                onClick={() => handlePageChange(idx + 1)}
              >
                {idx + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            {totalPages === 1 || page === totalPages ? (
              ""
            ) : (
              <PaginationNext
                className="bg-gray-200"
                // `?page=${
                //   page < totalPages ? page + 1 : totalPages
                // }&limit=${limit}`
                href={buildPageUrl(page < totalPages ? page + 1 : totalPages)}
                onClick={() =>
                  handlePageChange(page < totalPages ? page + 1 : totalPages)
                }
              />
            )}
          </PaginationItem>
        </PaginationContent>
      </Pagination>
      <AddProdcuct />
    </>
  );
}
