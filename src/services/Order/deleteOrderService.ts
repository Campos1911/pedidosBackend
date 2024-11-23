import prisma from "../../config";

export class deleteOrderService {
  async execute(orderId: string) {
    return await prisma.order.delete({ where: { id: orderId } });
  }
}
