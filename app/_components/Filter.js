import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchProducts, setCategory } from "@/features/products/ProductsSlice";
import { useRouter, useSearchParams } from "next/navigation";

import { useDispatch, useSelector } from "react-redux";

function Filter() {
  const dispatch = useDispatch();
  const { limit, page, category, sort } = useSelector(
    (state) => state.products
  );
  const router = useRouter();
  const searchParams = useSearchParams();
  function handleChange(value) {
    //
    // Update URL with new category, keep other params
    const params = new URLSearchParams(searchParams.toString());
    params.set("category", value);
    params.set("page", 1); // Reset to first page on filter change
    if (sort) params.set("sort", sort);
    if (limit) params.set("limit", limit);
    router.push(`?${params.toString()}`);

    //

    dispatch(setCategory({ category: value }));
    dispatch(fetchProducts({ limit, page, category: value }));
  }

  return (
    <div>
      <Tabs
        onValueChange={handleChange}
        value={category}
        className="mb-4 md:mb-0"
      >
        <TabsList className="">
          <TabsTrigger value="all">all</TabsTrigger>
          <TabsTrigger value="Clothes">clothes</TabsTrigger>
          <TabsTrigger value="Electronics">electronics</TabsTrigger>
          <TabsTrigger value="Toys">toys</TabsTrigger>
          <TabsTrigger value="Cosmetics">cosmetics</TabsTrigger>
        </TabsList>
      </Tabs>
    </div>
  );
}

export default Filter;
