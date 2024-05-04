import { UserRole } from "@prisma/client";

export type ServiceProp = {
  title: string;
  image: string;
  slug: string;
  id: number;
};

type RegisterProp = {
  fullName: string;
  password: string;
  phone: string;
  email: string;
  role: UserRole;
};

type TemplateParams = {
  token: string;
  userId?: string;
  name: string;
  linkText: string;
  email: string;
  message: string;
};
