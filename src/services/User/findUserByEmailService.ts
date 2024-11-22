import prisma from "../../config";

class findUserByEmailService {
  async execute(email: string) {
    return await prisma.user.findUnique({ where: { email } });
  }
}

export { findUserByEmailService };
