import {
  Dialog,
  DialogTrigger,
  DialogHeader,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from "react";
import AddCategory from "../../_actions/categories";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

const CategoryDialog = () => {
  const [categoryName, setCategoryName] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submission behavior

    // try {
    //   const formData = new FormData(event.currentTarget); // Collect form data
    //   const categoryName = formData.get("category");
    //   // Call AddCategory with the collected data
    //   const result = await AddCategory(categoryName);
    //   if (result && result.error) {
    //     console.error(result.error.message);
    //     // Handle error (e.g., display an error message to the user)
    //   } else {
    //     // Clear the form after successful submission
    //     setCategoryName("");
    //     // Optionally, refresh the categories list or perform other actions as needed
    //   }
    // } catch (error) {
    //   console.error(error);
    //   // Handle any unexpected errors
    // }
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
                name="category"
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

export default CategoryDialog;
