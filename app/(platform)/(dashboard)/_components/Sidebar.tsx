"use client";

import { FC } from "react";
import Link from "next/link";
import { twMerge } from "tailwind-merge";
import { useLocalStorage } from "usehooks-ts";

// Types
import { Organization } from "@/utils/types/Organization";

// Clerk
import { useOrganization, useOrganizationList } from "@clerk/nextjs";

// Components
import { Accordion } from "@/components/ui/Accordion";
import SidebarItem from "./SidebarItem";

// Icons
import { Info } from "lucide-react";

interface DashboardSidebarProps {
  className?: string;
  storageKey?: string;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({
  className = "",
  storageKey = "t-sidebar-state",
}) => {
  const [expanded, setExpanded] = useLocalStorage<Record<string, any>>(
    storageKey,
    {}
  );

  const { organization: activeOrganization, isLoaded: isLoadedOrg } =
    useOrganization();

  const { userMemberships, isLoaded: isLoadedOrgList } = useOrganizationList({
    userMemberships: {
      infinite: true,
    },
  });

  const defaultAccordionValue: string[] = Object.keys(expanded).reduce(
    (acc: string[], key: string) => {
      if (expanded[key]) {
        acc.push(key);
      }

      return acc;
    },
    []
  );

  const onExpand = (id: string) => {
    setExpanded((curr) => ({
      ...curr,
      [id]: !expanded[id],
    }));
  };

  return (
    <div className={twMerge(className, "w-full")}>
      <div className="flex flex-row justify-between items-center">
        <h3 className="font-semibold text-[16px]">Workspaces</h3>
        <Info className="w-[16px] h-[16px] text-primary" />
      </div>
      <Link
        href="/select-org"
        className="mt-[20px] bg-black text-white text-[14px] flex justify-center items-center h-[40px] px-0 rounded-[8px]"
      >
        Create a new one!
      </Link>
      <Accordion
        className="mt-[20px] flex flex-col gap-[20px]"
        type="multiple"
        defaultValue={defaultAccordionValue}
      >
        {(!isLoadedOrg || !isLoadedOrgList || userMemberships.isLoading) ? (
          <>
            <SidebarItem.Skeleton />
            <SidebarItem.Skeleton />
            <SidebarItem.Skeleton />
            <SidebarItem.Skeleton />
          </>
        ) : (
          userMemberships.data?.map(({ organization }) => (
            <SidebarItem
              key={organization.id}
              isActive={activeOrganization?.id === organization.id}
              isExpanded={expanded[organization.id]}
              organization={organization as Organization}
              onExpand={onExpand}
            />
          ))
        )}
      </Accordion>
    </div>
  );
};

export default DashboardSidebar;
