import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StatusService } from '../../services/status.service';
import { Status } from '../../models/status';
import { Task } from '../../models/task';
import { TaskService } from 'src/app/services/task.service';
import { AuthService } from '../../_pages/auth/auth.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-status-list',
  templateUrl: './status-list.component.html',
})
export class StatusListComponent implements OnInit {
  statuses: Status[] = [];

  constructor(
    private statusService: StatusService,
    private taskService: TaskService,
    private authService: AuthService,
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    console.log('Cargando estados y tareas...');
    this.loadStatusesAndTasks();

    this.eventService.taskStatusUpdated$.subscribe(() => {
      console.log('Evento de actualización de estado recibido');
      this.loadStatusesAndTasks(); // Recargar estados y tareas cuando se actualiza el estado de una tarea
    });
  }

  loadStatusesAndTasks() {
    console.log('Cargando estados y tareas...');
    this.statusService.getAllStatuses().subscribe(
      (data) => {
        console.log('Estados recibidos:', data);
        this.statuses = data;
        this.loadTasksForStatuses();
      },
      (error) => {
        console.error('Error fetching statuses', error);
      }
    );
  }

  loadTasksForStatuses() {
    this.statuses.forEach(status => {
      this.taskService.getTasksByStatus(status.id).subscribe(
        (tasks: Task[]) => {
          const userId = this.authService.getTokenPayload()?.sub;
          status.tasks = tasks.filter(task => task.userId === userId);
          console.log(`Tareas cargadas para estado ${status.id}:`, status.tasks);
        },
        (error) => {
          console.error(`Error fetching tasks for status ${status.id}`, error);
        }
      );
    });
  }

  viewTaskDetail(taskId: number) {
    this.router.navigate(['/task', taskId]);
  }
}
