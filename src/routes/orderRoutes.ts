import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { OrderModel } from "../models/orderModel";
import {
  createOrderController,
  getOrderController,
} from "../controllers/Order";

export default async function orderRoutes(app: FastifyInstance) {
  app.get(
    "/get/orders/:userId",
    async (
      req: FastifyRequest<{ Params: { userId: string } }>,
      reply: FastifyReply
    ) => {
      return new getOrderController().execute(req, reply);
    }
  );

  app.post(
    "/create/order",
    async (req: FastifyRequest<{ Body: OrderModel }>, reply: FastifyReply) => {
      return new createOrderController().execute(req, reply);
    }
  );
}
