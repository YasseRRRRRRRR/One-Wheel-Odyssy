"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { formatCurrency, formatNumber } from "@/lib/formatter";
import React, { useEffect } from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import AddUnicycle from "../../_actions/unicycles";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

import CategoryDialog from "./NewCategory";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import db from "@/db/db";

interface Category {
  id: string;
  name: string;
}
const ProductForm = () => {
  const [priceInCents, setPriceInCents] = useState<number>();
  const [stock, setStock] = useState<number>();
  const [imageUploaded, setImageUploaded] = useState<PictureInPictureEvent>();
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  return (
    <form action={AddUnicycle} className="space-y-8">
      <div className="space-y-2">
        <Label htmlFor="name">Name</Label>
        <Input type="text" id="name" name="name" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="priceInCents">Price In Cents</Label>
        <Input
          type="number"
          id="priceInCents"
          name="priceInCents"
          required
          value={priceInCents}
          onChange={(e) => setPriceInCents(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">
          {formatCurrency((priceInCents || 0) / 100)}
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="stock">Stock</Label>
        <Input
          type="number"
          id="stock"
          name="stock"
          required
          value={stock}
          onChange={(e) => setStock(Number(e.target.value) || undefined)}
        />
        <div className="text-muted-foreground">{formatNumber(stock || 0)}</div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="size">Size</Label>
        <div className="flex items-start">
          <ToggleGroup type="single" id="size" variant="outline">
            <ToggleGroupItem value="s">S</ToggleGroupItem>
            <ToggleGroupItem value="m">M</ToggleGroupItem>
            <ToggleGroupItem value="l">L</ToggleGroupItem>
          </ToggleGroup>
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" name="description" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="image">Picture</Label>
        <Input type="file" id="image" name="image" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="color">Color</Label>
        <Input type="text" id="color" name="color" required />
      </div>
      <div className="space-y-2">
        <Label htmlFor="category">Category</Label>
        <div className="flex items-start gap-4">
          <CategoryDropDown />
          <CategoryDialog />
          {/* <Button variant="secondary" onClick={() => console.log(categories)}>
            Category
          </Button> */}
        </div>
      </div>
      <div className="flex gap-2">
        <Button type="submit">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </form>
  );
};

const CategoryDropDown = async () => {
  const categories = await db.category.findMany();

  return (
    <Select>
      <SelectTrigger
        className="w-[180px]"
        id="category"
        aria-label="Select category"
      >
        <SelectValue placeholder="Select category" />
      </SelectTrigger>
      <SelectContent>
        {categories.length === 0 && <p>No categories</p>}
        {categories.map((category) => (
          <SelectItem key={category?.id} value={category?.id}>
            {category?.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default ProductForm;
