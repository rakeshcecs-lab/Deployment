export interface User {
  id: string;
  email: string;
  name: string;
  role: "admin" | "manager" | "salesperson";
  createdAt: Date;
  updatedAt: Date;
}

export interface Sale {
  id: string;
  amount: number;
  customerId: string;
  productId: string;
  userId: string;
  status: "pending" | "approved" | "rejected";
  createdAt: Date;
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  userId: string;
  createdAt: Date;
}

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  createdAt: Date;
}

export type UserRole = "admin" | "manager" | "salesperson";

export interface ApiResponse<T = any> {
  success: boolean;
  data?: T;
  error?: string;
  message?: string;
}