"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { addProduct, fetchProducts } from "@/features/products/ProductsSlice";
import { uploadImage } from "@/services/productsApi";

import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

export default function AddProductForm({ open, onOpenChange }) {
  const limit = useSelector((state) => state.products.limit);
  const page = useSelector((state) => state.products.page);
  const category = useSelector((state) => state.products.category);
  const sort = useSelector((state) => state.products.sort);

  const { register, handleSubmit, reset, formState } = useForm();
  const { errors } = formState;

  const dispatch = useDispatch();

  async function onSubmit(data) {
    console.log(data);
    try {
      const resultAction = await dispatch(
        addProduct({ ...data, id: Date.now() })
      );
      if (addProduct.fulfilled.match(resultAction)) {
        dispatch(fetchProducts({ limit, page, category, sort }));
        toast.success("successfully adding product");
        reset();
      }
    } catch (error) {
      toast.error(`error ${error}`);
    }
  }

  return (
    <Dialog>
      <DialogTrigger className="bg-buttonColor cursor-pointer mb-2 rounded-md p-3 text-white">
        Add product
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make changes to your product here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="mb-5 flex items-center gap-2">
            <label htmlFor="name" className="w-32">
              Name:
            </label>
            <input
              id="name"
              {...register("name", { required: true })}
              placeholder="Name"
              className="border-2 rounded-sm p-2 flex-1"
            />
            {errors.name && <span>Name is required</span>}
          </div>
          <div className="mb-5 flex items-center gap-2">
            <label htmlFor="category" className="w-32">
              Category:
            </label>
            <select
              {...register("category", { required: true })}
              className="border-2 p-2 flex-1"
              id="category"
            >
              <option value="Clothes">Clothes</option>
              <option value="Electronics">Electronics</option>
              <option value="Cosmetics">Cosmetics</option>
              <option value="Toys">Toys</option>
            </select>

            {errors.category && <span>Category is required</span>}
          </div>
          <div className="mb-5 flex items-center gap-2">
            <label htmlFor="price" className="w-32">
              Price:
            </label>
            <input
              id="price"
              type="number"
              step="0.01"
              {...register("price", {
                required: true,
                min: {
                  value: 1,
                  message: "price can not be less than 1$",
                },
              })}
              placeholder="Price"
              className="border-2 rounded-sm p-2 flex-1"
            />
            {errors.price && <span>{errors?.price?.message}</span>}
          </div>
          <div className="mb-5 flex items-center gap-2">
            <label htmlFor="stock" className="w-32">
              Stock:
            </label>
            <input
              id="stock"
              type="number"
              {...register("stock", {
                required: true,
                min: {
                  value: 1,
                  message: "capaciy should be more than 0",
                },
              })}
              placeholder="Stock"
              className="border-2 rounded-sm p-2 flex-1"
            />
            {errors.stock && <span>{errors?.stock?.message}</span>}
          </div>

          <div className="flex justify-end">
            <Button className="bg-buttonColor cursor-pointer" type="submit">
              Add
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
}
