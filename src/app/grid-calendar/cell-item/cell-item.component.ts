import { Component, OnInit, Input } from '@angular/core';

// services
import { TasksService } from '../../services/tasks.service';

// types
import { CellData } from '../../types/cell-data.type';

@Component({
  selector: 'app-cell-item',
  templateUrl: './cell-item.component.html',
  styleUrls: ['./cell-item.component.css'],
})
export class CellItemComponent implements OnInit {
  @Input() cellData!: CellData;
  taskName!: String;

  constructor(public taskService: TasksService) {}

  ngOnInit(): void {
    const foundTask = this.taskService.tasks.find(
      (task) =>
        task.day === this.cellData.day && task.time === this.cellData.time
    );

    this.taskName = foundTask?.name || '';
  }
}
