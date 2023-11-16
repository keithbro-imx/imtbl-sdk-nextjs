import { immutablexClient, config } from "@imtbl/sdk";

export function POST() {
  const x = new immutablexClient.ImmutableXClient({
    baseConfig: new config.ImmutableConfiguration({
      environment: config.Environment.SANDBOX,
    }),
  });
  return Response.json({});
}
