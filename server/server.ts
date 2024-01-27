import "dotenv/config.js";
import Fastify from "fastify";
import { dbConnector } from "./db/dbConnector";

import { markersRoutes } from "./routes/markers";

export const envToLogger = {
  development: {
    transport: {
      target: "pino-pretty",
      options: {
        translateTime: "HH:MM:ss Z",
        ignore: "pid,hostname",
      },
    },
  },
  production: true,
  test: false,
};
const fastify = Fastify({
  logger: envToLogger["development"] ?? true,
});

// database connection before routes

fastify.register(dbConnector);

// total routes, there is no other way

fastify.register(markersRoutes);

const start = async () => {
  try {
    // 0.0.0.0 : best for docker
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error("error opening the server", error);
    process.exit(1);
  }
};

start();
