import type { TaskModel } from "../../../models/TaskModel";

// Constantes de ações
export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
  RESET_STATE: 'RESET_STATE',
  COUNT_DOWN: 'COUNT_DOWN',
  COMPLETE_TASK: 'COMPLETE_TASK',
} as const;


// Tipo de ações
export type TaskActionsWithPayLoad =
  | { type: typeof TaskActionTypes.START_TASK; payload: TaskModel }
  | { type: typeof TaskActionTypes.COUNT_DOWN; payload: { secondsRemaining: number}; }
  

export type TaskActionsWithoutPayLoad = 
  | { type: typeof TaskActionTypes.RESET_STATE }
  | { type: typeof TaskActionTypes.INTERRUPT_TASK }
  | { type: typeof TaskActionTypes.COMPLETE_TASK };

export type TaskActionModel =
  | TaskActionsWithPayLoad
  | TaskActionsWithoutPayLoad;
