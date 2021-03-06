import { EventEmitter, Injectable, Output } from '@angular/core';

// types
import { Task } from 'src/app/types/task.type';

@Injectable({
  providedIn: 'root',
})
export class TasksService {
  @Output() onUpdateTask: EventEmitter<Task[]> = new EventEmitter();

  public tasks: Task[] = [
    { day: 1, time: 1, name: 'task 1' },
    { day: 5, time: 3, name: 'task 2' },
  ];

  constructor() {}

  public addTask(task: Task) {
    this.tasks.push(task);
    this.onUpdateTask.emit(this.tasks);
  }

  public deleteTask(task: Task) {
    this.tasks = this.tasks.filter(
      (taskObject) =>
        !(taskObject.day === task.day && taskObject.time === task.time)
    );
    this.onUpdateTask.emit(this.tasks);
  }
}
