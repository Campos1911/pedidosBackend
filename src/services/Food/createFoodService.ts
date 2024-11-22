import prisma from "../../config";
import { FoodModel } from "../../models/foodModel";

export class createFoodService {
  async execute(foodData: FoodModel) {
    return await prisma.food.create({ data: foodData });
  }
}
