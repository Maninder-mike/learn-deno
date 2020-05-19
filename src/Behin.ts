import Behin from "https://deno.land/x/behin/mod.ts"

let secret = Behin.generateSecret();

let token = Behin.totp.generate(secret);

let isValid = Behin.totp.verify(secret, token)


console.log(secret);
console.log(token);
console.log(isValid)