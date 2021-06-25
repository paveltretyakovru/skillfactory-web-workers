addEventListener('message', (event) => {
  console.log('Message from main streaml:', event.data);
  console.log('Начало сложных вычислений');

  throw new Error('AAAAA PANIC AT THE DISCO!');

  for (let i = 0, max = 10000000; i < max; i++) {
    const date = new Date();
  }
  console.log('Конец сложных вычислений');

  postMessage('success');
});