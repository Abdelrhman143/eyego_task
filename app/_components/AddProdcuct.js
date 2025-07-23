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
        className="bg-buttonColor cursor-pointer mb-2"
        type="button"
        onClick={() => setToggleAdd(!toggleAdd)}
      >
        {toggleAdd ? "close" : "add product"}
      </Button>
    </>
  );
}
