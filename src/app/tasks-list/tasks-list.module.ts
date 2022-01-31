import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListContainerComponent } from './list-container/list-container.component';
import { TaskCardComponent } from './task-card/task-card.component';

@NgModule({
  declarations: [ListContainerComponent, TaskCardComponent],
  exports: [ListContainerComponent],
  imports: [CommonModule],
})
export class TasksListModule {}
