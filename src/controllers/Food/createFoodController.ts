import { FastifyReply, FastifyRequest } from "fastify";
import { FoodModel } from "../../models/foodModel";
import { foodValidator } from "../../validators/foodValidator";
import { createFoodService } from "../../services/Food/createFoodService";

export class createFoodController {
  async execute(req: FastifyRequest<{ Body: FoodModel }>, reply: FastifyReply) {
    const { error, value } = foodValidator.validate(req.body);
    const createFood = new createFoodService();
    if (error) {
      return reply.status(500).send(error.details[0].message);
    }
    try {
      const food = await createFood.execute(value);
      return reply.status(200).send({ message: "Sucesso! Alimento criado" });
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
