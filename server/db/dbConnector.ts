import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";
import { FastifyInstance } from "fastify";

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
export async function dbConnector(fastify: FastifyInstance, options: object) {
  fastify.register(fastifyMongo, {
    url: process.env.URL,
  });
}

export default fastifyPlugin(dbConnector);
