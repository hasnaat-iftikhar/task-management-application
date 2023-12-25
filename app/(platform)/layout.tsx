import { FC, ReactNode } from "react";
import { ClerkProvider } from "@clerk/nextjs";

interface PlatformLayoutProps {
  children: ReactNode;
}

const PlatformLayout: FC<PlatformLayoutProps> = ({ children }) => {
  return <ClerkProvider>{children}</ClerkProvider>;
};

export default PlatformLayout;
