import { FC } from "react";
import Image from "next/image";
import Link from "next/link";

// Libs
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  variant: "dark" | "light";
  size?: "default" | "sm";
}

const Logo: FC<LogoProps> = ({ className = "", variant, size = "default" }) => {
  const type = {
    dark: "/logo.svg",
    light: "/logo_light.svg",
  };

  const textStyle = {
    dark: "text-black",
    light: "text-white",
  };

  const selectedSize = {
    default: {
      gap: "gap-3",
      logo: {
        width: 40,
        height: 40,
      },
      text: "text-[20px] font-medium",
    },
    sm: {
      gap: "gap-2",
      logo: {
        width: 32,
        height: 32,
      },
      text: "text-[18px] font-medium",
    },
  };

  return (
    <Link
      href="/"
      className={cn(
        className,
        "flex justify-start items-center",
        selectedSize[size].gap
      )}
    >
      <Image
        src={type[variant]}
        width={selectedSize[size].logo.width}
        height={selectedSize[size].logo.height}
        alt="Xpand | Project Management Application"
      />
      <p className={cn(textStyle[variant], selectedSize[size].text)}>Xpand</p>
    </Link>
  );
};

export default Logo;
