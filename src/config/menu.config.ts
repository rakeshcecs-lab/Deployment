import { UserRole } from "@/types";

export interface MenuItem {
  label: string;
  path: string;
  icon?: string;
  roles: UserRole[];
  children?: MenuItem[];
}

export const menuConfig: MenuItem[] = [
  {
    label: "Dashboard",
    path: "/dashboard",
    icon: "LayoutDashboard",
    roles: ["admin", "manager", "salesperson"],
  },
  {
    label: "Users",
    path: "/users",
    icon: "Users",
    roles: ["admin", "manager"],
  },
  {
    label: "Sales",
    path: "/sales",
    icon: "ShoppingCart",
    roles: ["admin", "manager", "salesperson"],
  },
  {
    label: "Customers",
    path: "/customers",
    icon: "UserCircle",
    roles: ["admin", "manager", "salesperson"],
  },
  {
    label: "Products",
    path: "/products",
    icon: "Package",
    roles: ["admin", "manager", "salesperson"],
  },
  {
    label: "Reports",
    path: "/reports",
    icon: "BarChart",
    roles: ["admin", "manager", "salesperson"],
  },
  {
    label: "Settings",
    path: "/settings",
    icon: "Settings",
    roles: ["admin", "manager", "salesperson"],
  },
];