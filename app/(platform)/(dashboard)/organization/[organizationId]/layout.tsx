import { FC, ReactNode } from "react";
import { auth } from "@clerk/nextjs";

import { startCase } from "lodash";

// Components
import { Button } from "@/components/ui/Button";
import { Separator } from "@/components/ui/Separator";
import OrgControl from "./_components/OrgControl";
import Info from "./_components/Info";

export async function generateMetadata() {
  const { orgSlug } = auth();

  return {
    title: startCase(orgSlug || "organization")
  }
}

interface ActiveOrganizationLayoutProps {
  children: ReactNode;
}

const ActiveOrganizationLayout: FC<ActiveOrganizationLayoutProps> = ({
  children,
}) => {
  const { userId } = auth();
  
  if(!userId) return (
    <div className="w-full flex justify-center items-center">
      <Button variant="dark">User not found!</Button>
    </div>
  )

  return (
    <div>
      <OrgControl />
      <Info className="ml-[20px]" />
      <Separator className="my-[20px]" />
      {children}
    </div>
  );
};

export default ActiveOrganizationLayout;
