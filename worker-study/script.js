const $hardButton = document.getElementById('run-button');
const $echoButton = document.getElementById('echo');

$hardButton.addEventListener('click', hardLoad);
$echoButton.addEventListener('click', () => console.log('Hello friend!'));

const worker = new Worker('worker.js');

worker.addEventListener('message', (workerEvent) => {
  console.log('Worker event value:', workerEvent.data);
});

worker.addEventListener('error', (ev) => {
  console.log('Worker error event', ev.message);
})

function hardLoad() {
  worker.postMessage('script value');
}