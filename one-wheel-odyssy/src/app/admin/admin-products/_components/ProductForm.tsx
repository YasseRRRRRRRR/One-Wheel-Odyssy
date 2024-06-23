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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { Plus } from "lucide-react";
import AddCategory from "../../_actions/categories";

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
          <Select>
            <SelectTrigger
              className="w-[180px]"
              id="category"
              aria-label="Select category"
            >
              <SelectValue placeholder="Select category" />
            </SelectTrigger>
            <SelectContent>
              {categories.map((category) => (
                <SelectItem key={category?.id} value={category?.id}>
                  {category?.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
          <CategoryDialog />
        </div>
      </div>
      <div className="flex gap-2">
        <Button type="submit">Save</Button>
        <Button variant="secondary">Cancel</Button>
      </div>
    </form>
  );
};

export default ProductForm;

const CategoryDialog = () => {
  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    try {
      const formData = new FormData(event.currentTarget); // Collect form data
      const categoryName = formData.get("name"); // Assuming the input name is 'name'

      // Call AddCategory with the collected data
      const result = await AddCategory(categoryName);
      if (result && result.error) {
        console.error(result.error.message);
        // Handle error (e.g., display an error message to the user)
      } else {
        // Clear the form after successful submission
        setCategoryName("");
        // Optionally, refresh the categories list or perform other actions as needed
      }
    } catch (error) {
      console.error(error);
      // Handle any unexpected errors
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">
          <Plus className="size-4 mr-2" /> Add Category
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add Category</DialogTitle>
          <DialogDescription>
            Make sure it is relevant to the unicycle canon and lore and
            don&apos;t stray too far from it.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="category" className="text-right">
                Category
              </Label>

              <Input
                id="category"
                type="text"
                value={categoryName}
                onChange={(e) => setCategoryName(e.target.value)}
                className="col-span-3"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit" className="rounded-md">
              Add <Plus className="size-4 ml-2" />{" "}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};
