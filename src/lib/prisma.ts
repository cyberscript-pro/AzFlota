import { PrismaClient } from "../generated/prisma";

const prisma = new PrismaClient();

export default prisma;

// import { PrismaClient } from "../generated/prisma";

// const globalForPrisma = global as unknown as { prisma: PrismaClient };

// const prisma =
//   globalForPrisma.prisma ||
//   new PrismaClient({
//     log: ["query"],
//   });

// if (process.env.NODE_ENV !== "production") globalForPrisma.prisma = prisma;

// export default prisma;
