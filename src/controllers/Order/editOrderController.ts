import { FastifyReply, FastifyRequest } from "fastify";
import { OrderModel } from "../../models/orderModel";
import { orderEditValidator } from "../../validators/orderValidator";
import { editOrderService } from "../../services/Order/editOrderService";
import { getFoodService } from "../../services/Food/getFoodService";

export class editOrderController {
  async execute(
    req: FastifyRequest<{ Body: OrderModel; Params: { orderId: string } }>,
    reply: FastifyReply
  ) {
    const editOrder = new editOrderService();
    const getFood = new getFoodService();
    const { orderId } = req.params;
    const { error, value } = orderEditValidator.validate(req.body);

    if (error) {
      return reply.status(500).send(error.details[0].message);
    }

    try {
      const foods = await getFood.verificaIds(value.foodId);
      const encontrados = foods.map((item) => item.id.toString());
      const todosPresentes = value.foodId.every((id: string) =>
        encontrados.includes(id)
      );

      if (!todosPresentes) {
        return reply
          .status(404)
          .send({ error: "Algum alimento não existente foi enviado" });
      }

      const editedOrder = await editOrder.execute(orderId, value);
      return reply
        .status(200)
        .send({ message: `Editado com sucesso`, pedido: editedOrder });
    } catch (error) {
      return reply.status(500).send({ error });
    }
  }
}
