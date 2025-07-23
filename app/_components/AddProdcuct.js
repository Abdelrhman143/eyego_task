"use client";
import { useState } from "react";
import AddProductForm from "./AddProductForm";
import { Button } from "@/components/ui/button";

export default function AddProdcuct() {
  const [toggleAdd, setToggleAdd] = useState(false);
  return (
    <>
      {toggleAdd && <AddProductForm />}
      <Button
        className="bg-blue-500 cursor-pointer mt-10"
        type="button"
        onClick={() => setToggleAdd(!toggleAdd)}
      >
        {toggleAdd ? "close" : "add product"}
      </Button>
    </>
  );
}
