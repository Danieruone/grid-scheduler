import { Component, Input, OnInit } from '@angular/core';

// types
import { Task } from 'src/app/types/task.type';

@Component({
  selector: 'app-task-card',
  templateUrl: './task-card.component.html',
  styleUrls: ['./task-card.component.css'],
})
export class TaskCardComponent implements OnInit {
  @Input() task!: Task;

  constructor() {}

  ngOnInit(): void {}
}
