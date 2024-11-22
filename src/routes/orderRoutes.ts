import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { OrderModel } from "../models/orderModel";
import { createOrderController } from "../controllers/Order";

export default async function orderRoutes(app: FastifyInstance) {
  app.post(
    "/create/order",
    async (req: FastifyRequest<{ Body: OrderModel }>, reply: FastifyReply) => {
      return new createOrderController().execute(req, reply);
    }
  );
}
