import prisma from "../../config";
import { OrderModel } from "../../models/orderModel";

export class editOrderService {
  async execute(orderId: string, orderData: OrderModel) {
    return await prisma.order.update({
      where: { id: orderId },
      data: orderData,
    });
  }
}
