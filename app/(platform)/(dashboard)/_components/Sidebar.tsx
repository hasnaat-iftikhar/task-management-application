import { FC } from "react";
import { twMerge } from "tailwind-merge";

interface DashboardSidebarProps {
  className?: string;
}

const DashboardSidebar: FC<DashboardSidebarProps> = ({ className = "" }) => {
  return <div className={twMerge(className, "w-full")}>Dashboard Sidebar</div>;
};

export default DashboardSidebar;
