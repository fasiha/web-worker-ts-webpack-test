import { expose } from 'comlink';

const someSillyFunction = async () => {
  return await Promise.resolve("42 WAS HERE");
};

const workerApi = {
  someSillyFunction
};

export type WorkerApi = typeof workerApi;

expose(workerApi);
