import { serve } from "https://deno.land/std@0.50.0/http/server.ts";
const s = serve({ port: 8000 });
console.log(`server running on port`);
for await (const req of s) {
	req.respond({body: "hello world"});
}
