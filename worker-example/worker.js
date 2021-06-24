addEventListener('message', (event) => {
  console.log('Message from main streaml:', event.data);
  console.log('Начало сложных вычислений');
  for (let i = 0, max = 10000000; i < max; i++) {
    const date = new Date();
  }
  console.log('Конец сложных вычислений');

  postMessage('success');
});