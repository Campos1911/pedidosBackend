import prisma from "../../config";

export class getOrderService {
  async execute(userId: string) {
    return await prisma.order.findMany({ where: { userId } });
  }
}
