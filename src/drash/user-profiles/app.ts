import { Drash } from "https://deno.land/x/drash@v1.0.3/mod.ts";
import UsersResource from "./user_resource.ts";

const server = new Drash.Http.Server({
  response_output: "application/json",
  resources: [UsersResource],
});

server.run({
  hostname: "localhost",
  port: 1447
});
