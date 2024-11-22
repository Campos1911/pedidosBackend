import { FastifyInstance, FastifyReply, FastifyRequest } from "fastify";
import { authMiddleware } from "../middlewares/authMiddleware";
import { User } from "@prisma/client";
import {
  loginUserController,
  registerUserController,
} from "../controllers/User/index";

export default async function userRoutes(app: FastifyInstance) {
  app.post(
    "/register",
    async (req: FastifyRequest<{ Body: User }>, reply: FastifyReply) => {
      return new registerUserController().execute(req, reply);
    }
  );
  app.post(
    "/login",
    async (
      req: FastifyRequest<{ Body: { email: string; password: string } }>,
      reply: FastifyReply
    ) => {
      return new loginUserController().execute(req, reply);
    }
  );
  app.get("/profile", { preHandler: [authMiddleware] }, async (req, reply) => {
    reply.send({ message: "Protected route" });
  });
}
