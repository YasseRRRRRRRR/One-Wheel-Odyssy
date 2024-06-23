import MaxWidthWrapper from "@/components/maxWidthWrapper";
import { ReactNode } from "react";

export const dynamic = "force-dynamic";

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <MaxWidthWrapper className="flex-1 flex flex-col my-16">
      {children}
    </MaxWidthWrapper>
  );
};

export default Layout;
