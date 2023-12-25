import React, { ReactNode } from "react";

// Components
import Header from "@/components/shared/Header";

const SiteLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main>
      <Header />
      {children}
    </main>
  );
};

export default SiteLayout;
