import { FC } from "react";

// Libs
import { cn } from "@/lib/utils";

// Components
import Container from "@/components/others/Container";
import { Button } from "@/components/ui/Button";
import Image from "next/image";

interface HeroSectionProps {
  className?: string;
}

const HeroSection: FC<HeroSectionProps> = ({ className = "" }) => {
  return (
    <section className={cn(className, "min-h-screen bg-primary relative")}>
      <div className="w-[1000px] h-[400px] absolute bottom-0 left-[50%] transform translate-x-[-50%]">
        <Image
          src="/assets/illustrations/hero.svg"
          fill
          alt="Pattern"
          className="object-contain"
        />
      </div>
      <Container className="relative z-[1] pt-[160px]">
        <div className="flex flex-col justify-center items-center">
          <h1 className="max-w-[700px] mx-auto text-center text-[60px] leading-[140%] font-bold text-white">
            Managing Your Projects Just Got a Lot Easier
          </h1>
          <p className="mt-[12px] max-w-[610px] mx-auto text-center text-[16px] leading-[140%] text-white-foreground">
            Try our reliable task manager today and experience the difference
            the difference it can make for your team, try our reliable task
            manager today!
          </p>
          <div className="flex justify-center items-center gap-4">
            <Button className="mt-[20px]" variant="dark" size="lg">
              Get Started
            </Button>
            <Button className="mt-[20px]" variant="outline" size="lg">
              Contact Us
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
