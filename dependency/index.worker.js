export function run() {
    console.log('dependency:', DedicatedWorkerGlobalScope, self instanceof DedicatedWorkerGlobalScope)
}
