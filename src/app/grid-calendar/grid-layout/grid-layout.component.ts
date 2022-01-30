import { Component, OnInit } from '@angular/core';

// utils
import { daysWeek } from '../../utils/misc';
import { timesWeek } from '../../utils/misc';

// types
import { WeekCell } from '../../types/week-cell.type';

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
