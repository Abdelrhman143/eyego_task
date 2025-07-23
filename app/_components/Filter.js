import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fetchProducts, setCategory } from "@/features/products/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";

function Filter() {
  const dispatch = useDispatch();
  const { limit, page, category } = useSelector((state) => state.products);

  function handleChange(value) {
    dispatch(setCategory({ category: value }));
    dispatch(fetchProducts({ limit, page, category: value }));
  }

  return (
    <div>
      <Tabs
        onValueChange={handleChange}
        defaultValue={category}
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
