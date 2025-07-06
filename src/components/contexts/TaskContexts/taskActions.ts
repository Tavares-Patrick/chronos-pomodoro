import type { TaskModel } from "../../../models/TaskModel";

// Constantes de ações
export const TaskActionTypes = {
  START_TASK: 'START_TASK',
  INTERRUPT_TASK: 'INTERRUPT_TASK',
} as const;

// Tipo de ações
export type TaskActionModel =
  | { type: typeof TaskActionTypes.START_TASK; payload: TaskModel }
  | { type: typeof TaskActionTypes.INTERRUPT_TASK };
