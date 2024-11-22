import { User } from "@prisma/client";
import { FastifyReply, FastifyRequest } from "fastify";
import { registerUserService } from "../../services/User/registerUserService";

class registerUserController {
  async execute(req: FastifyRequest<{ Body: User }>, reply: FastifyReply) {
    const registerService = new registerUserService();

    const user = await registerService.execute(req.body);
    reply.status(201).send(user);
  }
}

export { registerUserController };
