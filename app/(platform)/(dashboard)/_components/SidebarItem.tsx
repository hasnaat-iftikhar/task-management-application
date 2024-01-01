import { FC } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

// Fonts
import { Plus_Jakarta_Sans } from "next/font/google";
const plusJakartaSans = Plus_Jakarta_Sans({ subsets: ["latin"] });

// Components
import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/Accordion";

// Types
import { Organization } from "@/utils/types/Organization";
import { cn } from "@/lib/utils";

// Icons
import {
  Activity,
  CircleDollarSign,
  PanelsTopLeft,
  SlidersHorizontal,
} from "lucide-react";

interface SidebarItemProps {
  className?: string;
  isActive: boolean;
  isExpanded: boolean;
  organization: Organization;
  onExpand: (id: string) => void;
}

const SidebarItem: FC<SidebarItemProps> = ({
  className,
  isActive,
  isExpanded,
  organization,
  onExpand,
}) => {
  const pathname = usePathname();

  const iconClassNames = "w-[16px] h-[16px] text-primary";

  const options = [
    {
      icon: <PanelsTopLeft className={iconClassNames} />,
      name: "Boards",
      url: `/organization/${organization.id}`,
    },
    {
      icon: <Activity className={iconClassNames} />,
      name: "Activity",
      url: `/organization/${organization.id}/activity`,
    },
    {
      icon: <SlidersHorizontal className={iconClassNames} />,
      name: "Settings",
      url: `/organization/${organization.id}/settings`,
    },
    {
      icon: <CircleDollarSign className={iconClassNames} />,
      name: "Billing",
      url: `/organization/${organization.id}/billings`,
    },
  ];

  return (
    <AccordionItem
      value={organization.id}
      className="border-none flex flex-col gap-2"
    >
      <AccordionTrigger
        className="py-0 hover:no-underline gap-2"
        onClick={() => onExpand(organization.id)}
      >
        <Image
          src={organization.imageUrl}
          alt="Organization"
          width={32}
          height={32}
          className="rounded-[8px]"
        />

        <p
          className={cn(
            plusJakartaSans.className,
            "flex-1 text-[14px] font-semibold text-left"
          )}
        >
          {organization.name}
        </p>
      </AccordionTrigger>
      <AccordionContent className="ml-[40px] flex flex-col gap-2">
        {options.map((item, i) => (
          <Link
            href={item.url}
            className={`${
              pathname === item.url && "bg-[rgba(49,109,230,0.1)]"
            } hover:bg-[rgba(0,0,0,0.04)] flex justify-start gap-2 items-center p-3 hover:pl-6 transition-all rounded-[8px]`}
            key={i}
          >
            {item.icon}
            <p className="text-[14px] text-black mb-[1px]">{item.name}</p>
          </Link>
        ))}
      </AccordionContent>
    </AccordionItem>
  );
};

export default SidebarItem;
