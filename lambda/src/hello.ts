import { APIGatewayEvent } from "aws-lambda";
import { AuthorizationCode } from "simple-oauth2";

export const handler = async (event: APIGatewayEvent) => {
  // PROBLEM START
  const client = new AuthorizationCode({
    client: {
      id: "<client-id>",
      secret: "<client-secret>",
    },
  });
  console.log({client});
  // PROBLEM END

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello!",
      nodeRuntime: process.version,
    }),
  };
};
