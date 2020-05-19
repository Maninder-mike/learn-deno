import { readCSV } from "https://deno.land/x/csv/mod.ts";

const f = await Deno.open("C:\\Users\\mike\\Documents\\Data_Files\\books.csv");

for await (const row of readCSV(f)) {
  console.log("row: ");
  for await (const cell of row) {
    console.log(`cell: ${cell}`);
  }
}

f.close();
