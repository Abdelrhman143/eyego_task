"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { editProduct, fetchProducts } from "@/features/products/ProductsSlice";
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

export default function EditProduct({ open, onOpenChange, product }) {
  const { register, handleSubmit, formState } = useForm();
  const { errors } = formState;

  const dispatch = useDispatch();

  async function onSubmit(data) {
    try {
      await dispatch(editProduct({ updates: data, id: product.id })).unwrap();
      toast.success("Product updated successfully!");
      dispatch(fetchProducts());
      onOpenChange(false); // <-- Only close if no error
    } catch (error) {
      toast.error(error.message || "Failed to update product");
    }
  }

  return (
    <Dialog className="overflow-y-auto" open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <form method="post" onSubmit={handleSubmit(onSubmit)}>
          <DialogHeader>
            <DialogTitle>Edit Product</DialogTitle>
            <DialogDescription>
              Make changes to your product here. Click save when you&apos;re
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="id">ID :</Label>
              <Input
                id="id"
                {...register("id", { required: true })}
                disabled
                defaultValue={product.id}
              />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name">Name :</Label>
              <Input
                id="name"
                {...register("name", { required: true })}
                defaultValue={product.name}
              />
              {errors?.name && <span>name is required</span>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Category :</Label>
              <Input
                id="category"
                {...register("category", { required: true })}
                defaultValue={product.category}
              />
              {errors?.category && <span>category is required</span>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Price :</Label>
              <Input
                id="price"
                {...register("price", {
                  required: true,
                  min: {
                    value: 1,
                    message: "value can not be less than 1",
                  },
                })}
                defaultValue={product.price}
              />
              {errors?.price && <span>{errors?.price?.message}</span>}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="stock">Stock :</Label>
              <Input
                id="stock"
                {...register("stock", {
                  required: true,
                  min: {
                    value: 1,
                    message: "value can not be less than 1",
                  },
                })}
                defaultValue={product.stock}
              />
              {errors?.stock && <span>{errors?.stock?.message}</span>}
            </div>
            {/* <div className="grid gap-3">
              <Label htmlFor="productImage">Product Image :</Label>
              <Input id="productImage" name="productImage" defaultValue="" />
            </div> */}
          </div>
          <DialogFooter className="mt-5">
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button className="bg-buttonColor" type="submit">
              Save changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
