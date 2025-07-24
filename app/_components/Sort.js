import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { fetchProducts, setSort } from "@/features/products/ProductsSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";

function Sort() {
  const dispatch = useDispatch();
  const { limit, page, category, sort } = useSelector(
    (state) => state.products
  );
  const router = useRouter();
  const searchParams = useSearchParams();

  function handleSortChange(value) {
    // Update URL with new sort, keep other params
    const params = new URLSearchParams(searchParams.toString());
    params.set("sort", value);
    if (category) params.set("category", category);
    if (limit) params.set("limit", limit);
    params.set("page", 1); // Reset to first page on sort change
    router.push(`?${params.toString()}`);

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
