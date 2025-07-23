import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function Sort() {
  return (
    <Select>
      <SelectTrigger className="w-[180px]">
        <SelectValue placeholder="sort by" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="totalPrice-desc">
          Sort by price (high first)
        </SelectItem>
        <SelectItem value="totalPrice-asc">
          Sort by amount (low first)
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export default Sort;
