import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import db from "@/db/db";
import { Ban, CircleCheck, Plus } from "lucide-react";
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="">
      <div className="flex mx-5 justify-between">
        <h1 className="text-4xl mb-4 "> Unicycles</h1>{" "}
        <Button asChild>
          <Link href="/admin/admin-products/new">
            Add Unicycle
            <Plus className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
      <ProductTable />
    </div>
  );
};

const ProductTable = async () => {
  const unicycles = await db.unicycle.findMany({
    select: { id: true, name: true, priceInCents: true, stock: true },
    orderBy: { name: "asc" },
  });
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-0">
            <span className="sr-only">Available For Purchase</span>
          </TableHead>
          <TableHead>Name</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Order</TableHead>
          <TableHead className="w-0">
            <span className="sr-only">ACtions</span>
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {unicycles.map((unicycle) => (
          <TableRow key={unicycle.id}>
            <TableCell>
              {unicycle.stock === 0 ? (
                <Ban className="size-6" />
              ) : (
                <CircleCheck className="size-6" />
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default Page;
