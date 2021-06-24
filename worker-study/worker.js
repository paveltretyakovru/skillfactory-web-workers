throw new Error('TEST ERROR');

addEventListener('message', () => {
  let myDate;

  for(let i = 0; i < 10000000; i++) {
    myDate = new Date();
  }

  postMessage(myDate);
});