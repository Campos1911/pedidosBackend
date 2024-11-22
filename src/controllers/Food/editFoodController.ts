import { FastifyReply, FastifyRequest } from "fastify";
import { FoodModel } from "../../models/foodModel";
import { foodEditValidator } from "../../validators/foodValidator";
import { editFoodService } from "../../services/Food/editFoodService";

export class editFoodController {
  async execute(
    req: FastifyRequest<{ Body: FoodModel; Params: { foodId: string } }>,
    reply: FastifyReply
  ) {
    const { foodId } = req.params;
    const editFood = new editFoodService();
    const { error, value } = foodEditValidator.validate(req.body);
    if (error) {
      return reply.status(500).send(error.details[0].message);
    }

    if (Object.keys(req.body).length === 0) {
      return reply
        .status(500)
        .send({ error: "O corpo da requisição está vazio" });
    }

    try {
      const food = await editFood.execute(value, foodId);
      return reply.status(200).send({ message: "Alimento editado!" });
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
