import { Component, OnInit, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-form',
  templateUrl: './create-task-form.component.html',
  styleUrls: ['./create-task-form.component.css'],
  providers: [{ provide: MAT_DIALOG_DATA, useValue: {} }],
})
export class CreateTaskFormComponent implements OnInit {
  taskName!: string;

  constructor(
    @Inject(MAT_DIALOG_DATA) public modalData: { taskName: string }
  ) {}

  ngOnInit(): void {}

  OnInputTaskName(event: any) {
    this.modalData.taskName = event.target.value;
  }
}
