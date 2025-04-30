import NextAuth from "next-auth";

declare module "next-auth" {
  interface Session {
    user: {
      id: string; // CI
      name: string; // nickname
      role: "encargado" | "supervisor" | "económico" | "director";
    };
  }

  interface User {
    id: string;
    name: string;
    role: "encargado" | "supervisor" | "económico" | "director";
  }
}

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    name: string;
    role: string;
  }
}