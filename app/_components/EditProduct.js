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
import { Label } from "@radix-ui/react-label";
import { useForm } from "react-hook-form";

export default function EditProduct({ open, onOpenChange }) {
  const { register, formState } = useForm();
  const { errors } = formState;
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <form>
        <DialogContent className="sm:max-w-[425px]">
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
              <Input id="id" name="id" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="name">Name :</Label>
              <Input id="name" name="name" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="category">Category :</Label>
              <Input id="category" name="category" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="price">Price :</Label>
              <Input id="price" name="price" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="stock">Stock :</Label>
              <Input id="stock" name="stock" defaultValue="" />
            </div>
            <div className="grid gap-3">
              <Label htmlFor="productImage">Product Image :</Label>
              <Input id="productImage" name="productImage" defaultValue="" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </DialogContent>
      </form>
    </Dialog>
  );
}
