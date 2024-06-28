"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";

const TranslationDropDown = () => {
  const [language, setLanguage] = useState("FI");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="secondary">
          {language} <ChevronDown className="size-4 ml-1.5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuRadioGroup value={language} onValueChange={setLanguage}>
          <DropdownMenuRadioItem value="FI">finnish</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="SV">swedish</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="EN">english</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default TranslationDropDown;
