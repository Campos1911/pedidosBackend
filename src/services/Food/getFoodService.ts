import prisma from "../../config";

export class getFoodService {
  async execute() {
    return await prisma.food.findMany();
  }
  async verificaIds(ids: string[]) {
    return await prisma.food.findMany({
      where: {
        id: {
          in: ids,
        },
      },
    });
  }
}
