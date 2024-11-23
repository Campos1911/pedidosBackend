import { FastifyReply, FastifyRequest } from "fastify";
import { getOrderService } from "../../services/Order/getOrderService";

export class getOrderController {
  async execute(
    req: FastifyRequest<{ Params: { userId: string } }>,
    reply: FastifyReply
  ) {
    const { userId } = req.params;
    const getOrder = new getOrderService();
    try {
      const orders = await getOrder.execute(userId);
      return reply.status(200).send({ orders });
    } catch (error) {
      return reply.status(500).send({ error });
    }
  }
}
