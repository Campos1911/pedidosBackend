import prisma from "../../config";

export class editUserService {
  async addOrder(orderId: string, userId: string) {
    return prisma.user.update({
      where: { id: userId },
      data: {
        orderId: {
          push: [orderId as string],
        },
      },
    });
  }
}
