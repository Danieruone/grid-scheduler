import { Component, OnInit } from '@angular/core';

// services
import { TasksService } from 'src/app/services/tasks.service';

// types
import { Task } from 'src/app/types/task.type';

@Component({
  selector: 'app-list-container',
  templateUrl: './list-container.component.html',
  styleUrls: ['./list-container.component.css'],
})
export class ListContainerComponent implements OnInit {
  tasks!: Task[];

  constructor(public tasksService: TasksService) {}

  ngOnInit(): void {
    this.tasks = this.tasksService.tasks;
    this.tasksService.onUpdateTask.subscribe((tasks) => (this.tasks = tasks));
  }
}
