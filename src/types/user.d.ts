export interface UserInfo {
  type: "email" | "phone" | "landline" | "fax";
  value: string;
}

export type UserRole = "admin" | "doctor" | "user" | "cashier" | "nurse";
