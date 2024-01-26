export async function markersRoutes(
  fastify: {
    get: (
      arg0: string,
      arg1: (req: any, rep: any) => Promise<{ hello: string }>
    ) => void;
  },
  options: any
) {
  fastify.get("/api/markers", async (req: any, rep: any) => {
    return { hello: "markers" };
  });
}
