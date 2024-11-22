import prisma from "../../config";

export class deleteFoodService {
  async execute(foodId: string) {
    return await prisma.food.delete({ where: { id: foodId } });
  }
}
