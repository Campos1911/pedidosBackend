import prisma from "../../config";
import { FoodModel } from "../../models/foodModel";

export class editFoodService {
  async execute(foodData: FoodModel, foodId: string) {
    return await prisma.food.update({ where: { id: foodId }, data: foodData });
  }
}
