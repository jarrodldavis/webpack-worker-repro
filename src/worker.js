import { run } from 'dependency';

self.addEventListener('message', (event) => {
    console.log('worker received message:', event);
    self.postMessage('hello from worker');
});

console.log('running dependency in worker...')
run();
