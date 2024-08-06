import { Task } from './task';

export interface Status {
  id: number;
  name: string;
  tasks?: Task[]; // Añadir esta propiedad para almacenar tareas asociadas
}
