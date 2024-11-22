import { FastifyReply, FastifyRequest } from "fastify";
import { loginValidator } from "../../validators/userValidator";
import { signToken } from "../../utils/jwtUtils";
import bcrypt from "bcryptjs";
import { findUserByEmailService } from "../../services/User/findUserByEmailService";

class loginUserController {
  async execute(
    req: FastifyRequest<{ Body: { email: string; password: string } }>,
    reply: FastifyReply
  ) {
    const { error, value } = loginValidator.validate(req.body);
    const findUser = new findUserByEmailService();

    if (error) {
      return reply.status(400).send({ error: error.details[0].message });
    }

    const { email, password } = value;
    const user = await findUser.execute(email);

    if (!user || !(await bcrypt.compare(password, user.password))) {
      return reply.status(401).send({ error: "Invalid credentials" });
    }

    const token = signToken({ id: user.id });
    reply.send({ token });
  }
}

export { loginUserController };
