import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchProducts, setSort } from "@/features/products/ProductsSlice";
import { useDispatch, useSelector } from "react-redux";

function Sort() {
  const dispatch = useDispatch();
  const { limit, page, category, sort } = useSelector(
    (state) => state.products
  );

  function handleSortChange(value) {
    dispatch(setSort({ sort: value }));
    dispatch(fetchProducts({ limit, page, category, sort: value }));
  }

  return (
    <Select onValueChange={handleSortChange}>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="price-desc">Sort by price (high first)</SelectItem>
        <SelectItem value="price-asc">Sort by amount (low first)</SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Sort;
