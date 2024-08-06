import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private taskStatusUpdatedSource = new Subject<void>();

  taskStatusUpdated$ = this.taskStatusUpdatedSource.asObservable();

  emitTaskStatusUpdated() {
    console.log('Emitiendo evento de actualización de estado de tarea'); // Agrega este console.log
    this.taskStatusUpdatedSource.next();
  }
}
