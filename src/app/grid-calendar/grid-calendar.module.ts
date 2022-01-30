import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GridLayoutComponent } from './grid-layout/grid-layout.component';

@NgModule({
  declarations: [GridLayoutComponent],
  exports: [GridLayoutComponent],
  imports: [CommonModule],
})
export class GridCalendarModule {}
