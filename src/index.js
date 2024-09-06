import { run } from 'dependency';

console.log('Hello, World!');

const worker = new Worker(new URL('./worker.js', import.meta.url));

worker.addEventListener('message', (event) => {
    console.log('worker sent message', event);
});

worker.postMessage('hello from main page');

console.log('running dependency in main page...')
run();

setTimeout(() => {
    const worker2 = new Worker('./worker.js');

    worker2.addEventListener('message', (event) => {
        console.log('worker 2 sent message', event);
    });

    worker2.postMessage('hello from main page to worker 2');
}, 1000);
