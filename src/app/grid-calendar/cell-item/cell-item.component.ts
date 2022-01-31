import { Component, OnInit, Input, OnDestroy } from '@angular/core';

// services
import { TasksService } from 'src/app/services/tasks.service';

// types
import { CellData } from 'src/app/types/cell-data.type';
import { Task } from 'src/app/types/task.type';

@Component({
  selector: 'app-cell-item',
  templateUrl: './cell-item.component.html',
  styleUrls: ['./cell-item.component.css'],
})
export class CellItemComponent implements OnInit, OnDestroy {
  @Input() cellData!: CellData;
  subscription: any;

  task!: Task;

  constructor(public taskService: TasksService) {}

  ngOnInit(): void {
    this.updateTasks();
    this.taskService.onUpdateTask.subscribe(() => {
      this.updateTasks();
    });
  }

  ngOnDestroy(): void {
    this.taskService.onUpdateTask.unsubscribe();
  }

  updateTasks() {
    const foundTask = this.taskService.tasks.find(
      (task) =>
        task.day === this.cellData.day && task.time === this.cellData.time
    );

    this.task = foundTask!;
  }

  deleteTask() {
    this.taskService.deleteTask(this.task);
  }
}
