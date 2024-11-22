import prisma from "../../config";
import { User } from "../../models/userModel";
import bcrypt from "bcryptjs";

class registerUserService {
  async execute(userData: User): Promise<User | null> {
    const hashedPassword = await bcrypt.hash(userData.password, 10);
    const user = await prisma.user.create({
      data: { ...userData, password: hashedPassword },
    });
    return user;
  }
}

export { registerUserService };
