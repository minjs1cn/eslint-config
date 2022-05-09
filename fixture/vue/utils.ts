export function add(a, b) {
  return a + b;
}

interface IUser {
  name: string;
}

export function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

export function sum(a, b) {
  return a + b;
}

async function waitDo(ms, cb) {
  await delay(ms);
  cb();
}

waitDo(3, () => console.log('1'));
