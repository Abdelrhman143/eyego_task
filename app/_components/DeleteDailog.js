"use client";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import {
  deleteProduct,
  fetchProducts,
} from "@/features/products/ProductsSlice";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
export default function DeleteDailog({ open, onOpenChange, product }) {
  const limit = useSelector((state) => state.products.limit);
  const page = useSelector((state) => state.products.page);
  const category = useSelector((state) => state.products.category);
  const sort = useSelector((state) => state.products.sort);
  const dispatch = useDispatch();

  async function handleDelete() {
    await dispatch(deleteProduct(product.id));
    await dispatch(fetchProducts({ limit, page, category, sort }));
    toast.success("successfully delete the product");
  }

  return (
    <AlertDialog open={open} onOpenChange={onOpenChange}>
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
          <AlertDialogDescription>
            delete product can not be undo
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel>Cancel</AlertDialogCancel>
          <AlertDialogAction
            onClick={() => handleDelete()}
            className="bg-red-500"
          >
            Continue
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
    // <Dialog open={open} onOpenChange={onOpenChange}>
    //   <DialogContent>
    //     <DialogHeader>
    //       <DialogTitle>Are you absolutely sure?</DialogTitle>
    //       <DialogDescription>
    //         This action cannot be undone. This will permanently delete your
    //         account and remove your data from our servers.
    //         <Button className="bg-red-500 mt-5 block">Delete</Button>
    //       </DialogDescription>
    //     </DialogHeader>
    //   </DialogContent>
    // </Dialog>
  );
}
