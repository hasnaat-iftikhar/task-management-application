import { FC, ReactNode } from "react";

// Components
import Container from "@/components/others/Container";
import DashboardSidebar from "../_components/Sidebar";

interface OrganizationLayoutProps {
  children: ReactNode;
}

const OrganizationLayout: FC<OrganizationLayoutProps> = ({ children }) => {
  return (
    <div>
      <Container>
        <div className="flex justify-between items-start">
          <DashboardSidebar className="max-w-[300px]" />
          <div className="flex-1">{children}</div>
        </div>
      </Container>
    </div>
  );
};

export default OrganizationLayout;
