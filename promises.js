function doTheHeavyWork(delayMs, ok) {
  return new Promise((resolve, reject) => {
    setTimeout(() => ok ? resolve('OK') : reject('ERROR'), delayMs);
  });
}

// 1
doTheHeavyWork(2000, true)
  .then(value => console.log('1:', value));

doTheHeavyWork(2000, false)
  .then(value => console.log('2:', value))
  .catch(err => console.error('Error: ', err));

// 2
doTheHeavyWork(2000, true).then(value => console.log(value));
console.log(1);
console.log(2);
console.log(3);
console.log(4);
console.log(5);

// 3
async function doWork() {
  try {
    const value = await doTheHeavyWork(2000, true);
    console.log(value);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  } catch (err) {
    console.error('Error happened:', err);
  }
}

doWork();

//4
async function doWork2() {
  try {
    const value = await doTheHeavyWork(2000, false);
    console.log(value);
    console.log(1);
    console.log(2);
    console.log(3);
    console.log(4);
    console.log(5);
  } catch (err) {
    console.error('Error happened:', err);
  }
}

doWork2();
