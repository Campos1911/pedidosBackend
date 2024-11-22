import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import {
  createFoodController,
  deleteFoodController,
  editFoodController,
  getFoodController,
} from "../controllers/Food";
import { FoodModel } from "../models/foodModel";

export default async function foodRoutes(app: FastifyInstance) {
  app.get("/get/food", async (req: FastifyRequest, reply: FastifyReply) => {
    return new getFoodController().execute(req, reply);
  });

  app.post(
    "/create/food",
    async (req: FastifyRequest<{ Body: FoodModel }>, reply: FastifyReply) => {
      return new createFoodController().execute(req, reply);
    }
  );

  app.delete(
    "/delete/food/:foodId",
    async (
      req: FastifyRequest<{ Params: { foodId: string } }>,
      reply: FastifyReply
    ) => {
      return new deleteFoodController().execute(req, reply);
    }
  );

  app.patch(
    "/edit/food/:foodId",
    async (
      req: FastifyRequest<{ Body: FoodModel; Params: { foodId: string } }>,
      reply: FastifyReply
    ) => {
      return new editFoodController().execute(req, reply);
    }
  );
}
