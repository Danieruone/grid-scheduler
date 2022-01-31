import { Component, OnInit, Input, OnDestroy, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

// componments
import { CreateTaskFormComponent } from 'src/app/grid-calendar/create-task-form/create-task-form.component';

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
  task!: Task;

  constructor(public taskService: TasksService, public dialog: MatDialog) {}

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

  addTask(taskName: string) {
    this.taskService.addTask({
      day: this.cellData.day,
      time: this.cellData.time,
      name: taskName,
    });
  }

  openDialog() {
    const dialogRef = this.dialog.open(CreateTaskFormComponent);

    dialogRef.afterClosed().subscribe((result) => {
      if (result && result !== 'false') {
        this.addTask(result);
      }
    });
  }
}
