import fastifyPlugin from "fastify-plugin";
import fastifyMongo from "@fastify/mongodb";
import { FastifyInstance } from "fastify";

/**
 * @param {FastifyInstance} fastify
 * @param {Object} options
 */
export async function dbConnector(fastify: FastifyInstance, options: object) {
  try {
    fastify.register(fastifyMongo, {
      url: process.env.URL,
    });
    fastify.log.info("connected to database");
  } catch (err) {
    fastify.log.error(err);
  }
}

export default fastifyPlugin(dbConnector);
