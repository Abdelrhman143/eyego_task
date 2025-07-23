"use client";
import { Pencil, TrashIcon } from "lucide-react";
import { useState } from "react";
import DeleteDailog from "./DeleteDailog";
import EditProduct from "./EditProduct";

export default function Actions({ product }) {
  const [isDeleting, setIsDeleting] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  return (
    <>
      <button className="cursor-pointer">
        <Pencil
          onClick={() => setIsEditing(!isEditing)}
          className="mr-1 w-4 "
        />
      </button>
      <button
        onClick={() => setIsDeleting(!isDeleting)}
        className="cursor-pointer"
      >
        <TrashIcon className="w-4 " />
      </button>

      {isDeleting && (
        <DeleteDailog
          product={product}
          open={isDeleting}
          onOpenChange={setIsDeleting}
        />
      )}
      {isEditing && (
        <EditProduct
          product={product}
          open={isEditing}
          onOpenChange={setIsEditing}
        ></EditProduct>
      )}
    </>
  );
}
