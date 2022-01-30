import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';
import { CellItemComponent } from './cell-item/cell-item.component';

@NgModule({
  declarations: [GridLayoutComponent, CellItemComponent],
  exports: [GridLayoutComponent],
  imports: [CommonModule],
})
export class GridCalendarModule {}
