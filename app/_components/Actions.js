"use client";
import { Pencil, TrashIcon } from "lucide-react";
import { useState } from "react";
import DeleteDailog from "./DeleteDailog";
import EditProduct from "./EditProduct";

export default function Actions() {
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
        <DeleteDailog open={isDeleting} onOpenChange={setIsDeleting} />
      )}
      {isEditing && (
        <EditProduct open={isEditing} onOpenChange={setIsEditing}></EditProduct>
      )}
    </>
  );
}
