import { prismaClient } from "./../lib/db";

export async function updateUserById(id: string) {
  if (id) {
    try {
      const user = await prismaClient.user.update({
        where: {
          id,
        },
        data: {
          isVerfied: true,
        },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
    console.log(id);
  }
}
