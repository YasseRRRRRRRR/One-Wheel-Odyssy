"use server";

import { z } from "zod";
import db from "@/db/db";
import { redirect } from "next/navigation";

const requestBodySchema = z.object({
  name: z.string().nonempty({ message: "Category name is required" }),
});

const AddCategory = async (newCategory: string) => {
  const result = requestBodySchema.safeParse(newCategory);
  if (!result.success) {
    return result.error.formErrors.fieldErrors;
  }
  const data = result.data;

  await db.category.create({
    data: {
      name: data.name,
    },
  });
  // redirect("/admin/admin-products/new");
};

export default AddCategory;
