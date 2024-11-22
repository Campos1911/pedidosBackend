import Fastify from "fastify";
import cors from "@fastify/cors";
import userRoutes from "./routes/userRoutes";
import foodRoutes from "./routes/foodRoutes";
import orderRoutes from "./routes/orderRoutes";

const app = Fastify();

app.register(cors, { origin: "*" });
app.register(userRoutes, { prefix: "/api/users" });
app.register(foodRoutes);
app.register(orderRoutes);

app.listen({ port: 3333 }, (err, address) => {
  if (err) {
    console.error(err);
    process.exit(1);
  }
  console.log(`Server running on ${address}`);
});
