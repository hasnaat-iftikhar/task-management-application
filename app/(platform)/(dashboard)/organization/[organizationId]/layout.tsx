import { FC, ReactNode } from "react";

// Components
import OrgControl from "./_components/OrgControl";

interface ActiveOrganizationLayoutProps {
  children: ReactNode;
}

const ActiveOrganizationLayout: FC<ActiveOrganizationLayoutProps> = ({
  children,
}) => {
  return (
    <div>
      <OrgControl />
      {children}
    </div>
  );
};

export default ActiveOrganizationLayout;
