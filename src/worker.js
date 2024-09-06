self.addEventListener('message', (event) => {
    console.log('worker received message:', event);
    self.postMessage('hello from worker');
});
