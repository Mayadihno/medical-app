import { prismaClient } from "@/lib/db";

export async function getUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.findUnique({
        where: {
          id,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}
