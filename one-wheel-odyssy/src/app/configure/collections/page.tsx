"use client";

import { cn } from "@/lib/utils";
import { useState } from "react";

const Page = () => {
  const [idkWhen, setIdkWhen] = useState<boolean>(false);
  return (
    <div
      className={cn(
        "relative h-full flex-1 my-16 w-full rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:rounded-2xl flex justify-center flex-col items-center",
        { "ring-blue-900/25 bg-blue-900/10": idkWhen }
      )}
    >
      <div className="relative flex flex-1 flex-col items-center justify-center w-full">
        <div className="h-full w-full flex-1 flex flex-col items-center justify-center">
          {/* I guess here would be the quiz but first we'll just have a normal ecommerce thingy*/}
          <input type="text" />
        </div>
      </div>
    </div>
  );
};

export default Page;
