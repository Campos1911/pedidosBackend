import { FastifyReply, FastifyRequest } from "fastify";
import { OrderModel } from "../../models/orderModel";
import { createOrderService } from "../../services/Order/createOrderService";
import { orderValidator } from "../../validators/orderValidator";
import { getFoodService } from "../../services/Food/getFoodService";
import { editUserService } from "../../services/User/editUserService";

export class createOrderController {
  async execute(
    req: FastifyRequest<{ Body: OrderModel }>,
    reply: FastifyReply
  ) {
    const createOrder = new createOrderService();
    const getFood = new getFoodService();
    const addOrder = new editUserService();
    const { error, value } = orderValidator.validate(req.body);

    if (error) {
      return reply.status(500).send(error);
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

      const order = await createOrder.execute(value);
      await addOrder.addOrder(order.id, order.userId);
      return reply.status(200).send({ order });
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
