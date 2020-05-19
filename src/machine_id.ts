import { getMachineId } from "https://deno.land/x/machine_id@v0.3.0/mod.ts";

console.log("My machine id: ", await getMachineId());