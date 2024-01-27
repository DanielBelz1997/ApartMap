export async function markersRoutes(
  fastify: {
    [x: string]: any;
    get: (
      arg0: string,
      arg1: (req: any, rep: any) => Promise<{ hello: string }>
    ) => void;
  },
  options: any
) {
  fastify.get("/api/markers", async (req: any, rep: any) => {
    const markers = fastify.mongo.client.db("VolnMap").collection("volnmap");
    try {
      const allMarkers = await markers.find({});
      console.log(allMarkers);
      return allMarkers;
    } catch (err) {
      return err;
    }
  });
}
