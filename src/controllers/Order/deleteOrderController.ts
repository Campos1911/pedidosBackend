import { FastifyReply, FastifyRequest } from "fastify";
import { deleteOrderService } from "../../services/Order/deleteOrderService";

export class deleteOrderController {
  async execute(
    req: FastifyRequest<{ Params: { orderId: string } }>,
    reply: FastifyReply
  ) {
    const { orderId } = req.params;
    const deleteOrder = new deleteOrderService();
    try {
      const deletedOrder = await deleteOrder.execute(orderId);
      return reply.status(200).send({ message: "Pedido deletado!" });
    } catch (error) {
      return reply.status(500).send({ error });
    }
  }
}
