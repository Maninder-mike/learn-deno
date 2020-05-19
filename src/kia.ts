import Kia from "https://deno.land/x/kia/mod.ts";

const kia = new Kia("Hello!");

await kia.start();
await kia.info('this is info')
await kia.succeed("Action Completed.");