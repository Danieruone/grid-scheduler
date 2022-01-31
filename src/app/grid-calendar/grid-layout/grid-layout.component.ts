import { Component, OnInit } from '@angular/core';

// utils
import { daysWeek } from 'src/app/utils/misc';
import { timesWeek } from 'src/app/utils/misc';

// types
import { WeekCell } from 'src/app/types/week-cell.type';

@Component({
  selector: 'app-grid-layout',
  templateUrl: './grid-layout.component.html',
  styleUrls: ['./grid-layout.component.css'],
})
export class GridLayoutComponent implements OnInit {
  days: WeekCell[] = daysWeek;
  times: WeekCell[] = timesWeek;

  constructor() {}

  ngOnInit(): void {}
}
