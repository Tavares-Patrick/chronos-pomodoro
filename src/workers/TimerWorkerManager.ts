import type { TaskStateModel } from "../models/TaskStateModel";

let instance: TimerWorkerManager | null = null

export class TimerWorkerManager {
  private worker: Worker;

  private constructor () {
    this.worker = new Worker("/workers/timerWorker.js");
  }

  static getInstance() {
    if (!instance) {
      instance = new TimerWorkerManager();
    }

    return instance
  }

  postMessage(message: TaskStateModel) {
  if (!message.activeTask || !message.secondsRemaining) {
    console.warn("Não foi enviado activeTask ou secondsRemaining ao worker.");
    return;
  }

  this.worker.postMessage(message);
}

  onmessage(cb: (e: MessageEvent) => void) {
    this.worker.onmessage = cb;
  }

  terminate() {
    this.worker.terminate();
    instance = null;
  }
}