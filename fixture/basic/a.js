import { add, delay } from "./utils";

async function foo() {
  const results = [];
  for (const thing of [1, 2, 3]) {
    results.push(await delay(thing));
  }
  return results;
}
foo(1);

function a() {
  console.log(add(1, 2));
}
a();
