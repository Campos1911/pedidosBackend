import { FastifyReply, FastifyRequest } from "fastify";
import { deleteFoodService } from "../../services/Food/deleteFoodService";

export class deleteFoodController {
  async execute(
    req: FastifyRequest<{ Params: { foodId: string } }>,
    reply: FastifyReply
  ) {
    const deleteFood = new deleteFoodService();
    const { foodId } = req.params;
    try {
      const food = await deleteFood.execute(foodId);
      return reply.status(200).send({ message: "Deletado com sucesso!" });
    } catch (error) {
      return reply.status(500).send(error);
    }
  }
}
