import { FC } from "react";

// Utils
import { cn } from "@/lib/utils";

// Components
import Logo from "../others/Logo";
import { Button } from "../ui/Button";
import Container from "../others/Container";

interface HeaderProps {
  className?: string;
}

const Header: FC<HeaderProps> = ({ className = "" }) => {
  return (
    <header className={cn(className, "absolute z-[1] top-0 left-0 w-full")}>
      <Container className="py-[20px]">
        <nav className="flex justify-between items-center">
          <Logo variant="light" />

          <Button variant="dark" size="lg">
            Start For Free
          </Button>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
