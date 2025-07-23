import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Actions from "../_components/Actions";
import { Button } from "@/components/ui/button";
import AddProductForm from "../_components/AddProductForm";
import AddProdcuct from "../_components/AddProdcuct";

export default function Dashboard() {
  return (
    <>
      <div className="overflow-x-auto">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>name</TableHead>
              <TableHead>category</TableHead>
              <TableHead>price</TableHead>
              <TableHead>sales</TableHead>
              <TableHead>stock</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Smartphone X12</TableCell>
              <TableCell>Electronics</TableCell>
              <TableCell>$599.99</TableCell>
              <TableCell>$23000</TableCell>
              <TableCell>300</TableCell>
              <TableCell>
                <Actions />
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
      <AddProdcuct />
    </>
  );
}
