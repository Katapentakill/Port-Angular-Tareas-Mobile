import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from 'src/app/services/task.service';
import { StatusService } from 'src/app/services/status.service';
import { Task } from '../../models/task';
import { Status } from '../../models/status';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
})
export class TaskDetailComponent implements OnInit {
  task: Task | undefined;
  statuses: Status[] = [];
  selectedStatusId: number | undefined;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService,
    private statusService: StatusService,
    private eventService: EventService
  ) {}

  ngOnInit() {
    const taskId = +this.route.snapshot.paramMap.get('id')!;
    this.taskService.getTaskById(taskId).subscribe(
      (task) => {
        this.task = task;
        this.selectedStatusId = task.statusId;
      },
      (error) => {
        console.error('Error fetching task', error);
      }
    );

    this.statusService.getAllStatuses().subscribe(
      (data) => {
        this.statuses = data;
      },
      (error) => {
        console.error('Error fetching statuses', error);
      }
    );
  }

  changeStatus() {
    if (this.task && this.selectedStatusId != null) {
      console.log('Actualizando estado de tarea...'); // Agrega este console.log
      this.taskService.assignStatus(this.selectedStatusId, this.task.id).subscribe(
        (updatedTask) => {
          this.task = updatedTask;
          console.log('Estado de tarea actualizado exitosamente');
          this.eventService.emitTaskStatusUpdated(); // Emite el evento
        },
        (error) => {
          console.error('Error updating task status', error);
        }
      );
    }
  }
}
