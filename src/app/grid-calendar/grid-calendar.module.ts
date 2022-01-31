import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { CellItemComponent } from './cell-item/cell-item.component';
import { CreateTaskFormComponent } from './create-task-form/create-task-form.component';

// mat
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    GridLayoutComponent,
    CellItemComponent,
    CreateTaskFormComponent,
  ],
  exports: [GridLayoutComponent],
  imports: [CommonModule, MatDialogModule, MatButtonModule],
})
export class GridCalendarModule {}
