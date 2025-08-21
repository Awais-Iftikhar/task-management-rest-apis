export enum TASK_STATUS_VALUES {
  PENDING = 'pending',
  IN_PROGRESS = 'in_progress',
  COMPLETED = 'completed',
}

export const TASK_API_DESCRIPTIONS = {
  TITLE: {
    description: 'Title of task',
    example: 'Learn Coding',
  },
  DESCRIPTION: {
    description: 'Description of task',
    example: 'Complete the course',
  },
  STATUS: {
    enum: TASK_STATUS_VALUES,
    description: 'Current status of the task',
    example: 'pending',
  },
} as const;
