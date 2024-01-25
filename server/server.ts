import "dotenv/config.js";
import Fastify from "fastify";
import connect from "./db/db";

const envToLogger = {
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

fastify.register(connect);

fastify.get("/", async (request, reply) => {
  return { hello: "world!" };
});

const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (error) {
    fastify.log.error("error opening the server", error);
    process.exit(1);
  }
};

start();
