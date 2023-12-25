import { cn } from "@/lib/utils";
import { FC, ReactNode } from "react";

interface ContainerProps {
  className?: string;
  children: ReactNode;
}

const Container: FC<ContainerProps> = ({ className = "", children }) => {
  return (
    <div className={cn(className, "max-w-[1920px] w-[94%] mx-auto")}>
      {children}
    </div>
  );
};

export default Container;
