import { Entity } from '@clean-architecture-todo/domain/shared';

export type ToDoEntityParams = {
  id: string;
  title: string;
  description: string;
  completed: boolean;
};

export type IToDoEntity = Entity<ToDoEntityParams>
