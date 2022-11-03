import Fastify from "fastify";
import cors from "@fastify/cors";
import jwt, { Secret } from "@fastify/jwt";

import { pollRoutes } from "./routes/poll";
import { userRoutes } from "./routes/user";
import { guessRoutes } from "./routes/guess";
import { authRoutes } from "./routes/auth";
import { gameRoutes } from "./routes/game";

require("dotenv").config();

async function bootstrap() {
  const fastify = Fastify({
    logger: true,
  });

  await fastify.register(cors, {
    origin: true,
  });

  await fastify.register(jwt, {
    secret: `${process.env.JWT_SECRET}`,
  });

  await fastify.register(pollRoutes);
  await fastify.register(userRoutes);
  await fastify.register(guessRoutes);
  await fastify.register(authRoutes);
  await fastify.register(gameRoutes);

  await fastify.listen({ port: 3333, host: "0.0.0.0" });
}

bootstrap();
