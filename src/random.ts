import Random from 'https://deno.land/x/random/Random.js'

let r = new Random();

let m =  r.int(0, 10);
let str = r.string(5);
let str_upper = r.string(5, Random.UPPER_ALPHABETS);
let pick = r.pick(2,3,4,5,54,65);
let pick_1 = r.pick('a','e','i','o','u');
let weight = r.weighted(0.3,0.7);
let weight_1 = r.weighted(0.3, 0.5, 0.6, 0.9)

console.log(m);
console.log(str)
console.log(str_upper)
console.log(pick)
console.log(pick_1)
console.log(weight)
console.log(weight_1)