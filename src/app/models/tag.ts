import { Task } from './task';

export interface Tag {
  id: number;
  name: string;
  color: string;
  tasks: Task[];
}
