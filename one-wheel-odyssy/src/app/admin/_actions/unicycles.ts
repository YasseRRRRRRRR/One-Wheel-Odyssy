"use server";
import db from "@/db/db";
import { z } from "zod";
import fs from "fs/promises";
import { redirect } from "next/navigation";

const imageSchema = z
  .instanceof(File, { message: "image is required" })
  .refine((file) => file.size == 0 || file.type.startsWith("image/"));

const addSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1),
  priceInCents: z.coerce.number().int().min(1),
  image: imageSchema.refine((file) => file.size > 0),
  color: z.string(),
  size: z.string(),
  stock: z.coerce.number().int().min(1),
  categoryId: z.string(),
});

const AddUnicycle = async (formData: FormData) => {
  const result = addSchema.safeParse(Object.fromEntries(formData.entries()));
  if (!result.success) {
    return result.error.formErrors.fieldErrors;
  }

  const data = result.data;

  // Check if the category exists
  const categoryExists = await db.category.findUnique({
    where: { id: data.categoryId },
  });

  if (!categoryExists) {
    throw new Error("Category does not exist");
  }

  await fs.mkdir("public/unicycles", { recursive: true });
  const imagePath = `/unicycles/${crypto.randomUUID()}-${data.image.name}`;
  await fs.writeFile(
    `public${imagePath}`,
    Buffer.from(await data.image.arrayBuffer())
  );

  await db.unicycle.create({
    data: {
      name: data.name,
      description: data.description,
      priceInCents: data.priceInCents,
      imagePath: imagePath,
      color: data.color,
      size: data.size,
      stock: data.stock,
      categoryId: data.categoryId,
    },
  });
  redirect("/admin/admin-products");
};

export default AddUnicycle;
