import { TasklistStoreService } from './../../../shared/services/tasklist/tasklist-store.service';
import { Component, OnInit, Inject } from '@angular/core';
import { Tasklist } from 'src/app/model/tasklist';
import { ApiService } from 'src/app/shared/services/api/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tasklist-create-dialog',
  templateUrl: './tasklist-create-dialog.component.html',
  styleUrls: ['./tasklist-create-dialog.component.css'],
})
export class TasklistCreateDialogComponent implements OnInit {
  tasklist: Tasklist = <Tasklist>{};

  constructor(
    private api: ApiService,
    public dialogRef: MatDialogRef<TasklistCreateDialogComponent>,
    private tasklistStore: TasklistStoreService,
    @Inject(MAT_DIALOG_DATA) public data: Tasklist
  ) {}

  ngOnInit(): void {}

  onCancelClick(): void {
    this.dialogRef.close();
  }

  onCreateClick(): void {
    this.api.createTaskList(this.tasklist).subscribe(
      (response) => this.handleSuccess(response),
      (error) => this.handleFail(error)
    );
    this.dialogRef.close();
  }

  handleSuccess(response): void {
    const tasklist = new Tasklist(response.data);
    this.tasklistStore.addTasklist(tasklist);
  }

  handleFail(error: HttpErrorResponse): void {
    console.error(error.error.error_message);
  }
}
