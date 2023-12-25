import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Libs
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant: "dark" | "light";
}

const Logo: FC<LogoProps> = ({ className = "", variant }) => {
  const type = {
    dark: "/logo.svg",
    light: "/logo_light.svg",
  };

  const textStyle = {
    dark: "text-black",
    light: "text-white",
  };

  return (
    <Link
      href="/"
      className={cn(className, "flex justify-start items-center gap-3")}
    >
      <Image
        src={type[variant]}
        width={40}
        height={40}
        alt="Xpand | Project Management Application"
      />
      <p className={cn(textStyle[variant], "text-[20px] font-medium")}>Xpand</p>
    </Link>
  );
};

export default Logo;
