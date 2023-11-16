import { Environment, ImmutableConfiguration } from "@imtbl/sdk/config";
import { ImmutableXClient } from "@imtbl/sdk/immutablex_client";

export async function POST() {
  const x = new ImmutableXClient({
    baseConfig: new ImmutableConfiguration({
      environment: Environment.SANDBOX,
    }),
  });

  const collections = await x.collectionApi.listCollections();

  return Response.json({ collections: collections.data.result });
}
