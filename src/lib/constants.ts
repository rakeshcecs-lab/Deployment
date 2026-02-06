export const ROUTES = {
  // Public routes
  HOME: "/",
  ABOUT: "/about",
  PRODUCTS: "/products",
  PRICING: "/pricing",
  BLOG: "/blog",
  CONTACT: "/contact",
  FAQ: "/faq",
  
  // Auth routes
  LOGIN: "/login",
  REGISTER: "/register",
  FORGOT_PASSWORD: "/forgot-password",
  
  // Dashboard routes
  DASHBOARD: "/dashboard",
  USERS: "/users",
  SALES: "/sales",
  CUSTOMERS: "/customers",
  PRODUCTS_MANAGE: "/products",
  REPORTS: "/reports",
  SETTINGS: "/settings",
} as const;

export const USER_ROLES = {
  ADMIN: "admin",
  MANAGER: "manager",
  SALESPERSON: "salesperson",
} as const;

export const API_ENDPOINTS = {
  AUTH: {
    LOGIN: "/api/auth/login",
    REGISTER: "/api/auth/register",
    LOGOUT: "/api/auth/logout",
    REFRESH: "/api/auth/refresh",
  },
  USERS: "/api/users",
  SALES: "/api/sales",
  CUSTOMERS: "/api/customers",
  PRODUCTS: "/api/products",
} as const;