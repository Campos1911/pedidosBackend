import prisma from "../../config";
import { OrderModel } from "../../models/orderModel";

export class createOrderService {
  async execute(orderData: OrderModel) {
    return await prisma.order.create({ data: orderData });
  }
}
