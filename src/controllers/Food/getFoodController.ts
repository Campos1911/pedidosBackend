import { FastifyReply, FastifyRequest } from "fastify";
import { getFoodService } from "../../services/Food/getFoodService";

export class getFoodController {
  async execute(req: FastifyRequest, reply: FastifyReply) {
    const getFood = new getFoodService();
    try {
      const foods = await getFood.execute();
      return reply.status(200).send({ foods });
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
