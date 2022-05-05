import { defineProps } from 'vue';

const props = defineProps();

console.log(props);

/**
 * 1
 * @param {*} a
 * @returns
 */
function test(a) {
  if (a > 0) {
    return false;
  }
  return true;
}

test(1);

export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

fetch('/api/a').then(res => res.json())
  .then(data => {
    console.log(data);
  });

async function waitDo(ms, cb) {
  await delay(ms);
  cb();
}

waitDo(3, () => {
  console.log('1');
});
