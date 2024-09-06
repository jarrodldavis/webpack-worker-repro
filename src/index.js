import { run } from 'dependency';

console.log('Hello, World!');

const worker = new Worker(new URL('./worker.js', import.meta.url));

worker.addEventListener('message', (event) => {
    console.log('worker sent message', event);
});

worker.postMessage('hello from main page');

console.log('running dependency in main page...')
run();
