import { FastifyInstance } from "fastify";
import mongoDB from "@fastify/mongodb";
import fp from "fastify-plugin";

export default fp(async function (fastify: FastifyInstance) {
  fastify.register(mongoDB, { url: process.env.URL, forceClose: true });
});
