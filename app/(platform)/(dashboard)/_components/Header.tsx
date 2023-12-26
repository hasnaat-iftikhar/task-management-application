import React from "react";

// Clerk
import { OrganizationSwitcher, UserButton } from "@clerk/nextjs";

// Components
import Container from "@/components/others/Container";
import Logo from "@/components/others/Logo";

const DashboardHeader = () => {
  return (
    <div className="w-full py-[8px] border-b border-[rgba(0,0,0,0.1)]">
      <Container>
        <div className="flex justify-between items-center">
          <Logo variant="dark" size="sm" />
          <div className="flex justify-center items-center gap-[12px]">
            <OrganizationSwitcher
              hidePersonal
              afterCreateOrganizationUrl="/organization/:id"
              afterLeaveOrganizationUrl="/organization/:id"
              afterSelectOrganizationUrl="/organization/:id"
              appearance={{
                elements: {
                  rootBox: {
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                  },
                },
              }}
            />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox: {
                    width: 32,
                    height: 32,
                    borderRadius: "0.375rem",
                  },
                },
              }}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default DashboardHeader;
