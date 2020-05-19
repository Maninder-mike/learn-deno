import { isOnline } from "https://deno.land/x/online/mod.ts";

const result = await isOnline();

console.log(result)