import {
  FastifyInstance,
  FastifyRequest,
  FastifyReply,
  FastifyError,
} from "fastify";

export async function markersRoutes(fastify: FastifyInstance, options: any) {
  fastify.get(
    "/api/markers",
    async (req: FastifyRequest, rep: FastifyReply) => {
      try {
        const markers = await fastify?.mongo?.db
          ?.collection("volnmap")
          .find()
          .toArray();

        console.log(markers);

        rep.send({ markers: markers }); // Returning markers array
      } catch (err: any) {
        console.error("Error retrieving markers:", err);
        rep
          .status(500)
          .send({ error: `Internal Server Error: ${err.message}` });
      }
    }
  );
}
