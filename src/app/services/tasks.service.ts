import { Injectable } from '@angular/core';

// types
import { Task } from '../types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  public tasks: Task[] = [
    { day: 1, time: 1, name: 'tarea 1' },
    { day: 5, time: 3, name: 'tarea 2' },
  ];

  constructor() {}

  public addTask(task: Task) {
    this.tasks.push(task);
  }
}
