import { Tasklist } from 'src/app/model/tasklist';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { TasklistListComponent } from './tasklist/tasklist-list/tasklist-list.component';
import { TasklistCreateComponent } from './tasklist/tasklist-create/tasklist-create.component';
import { TasklistShowComponent } from './tasklist/tasklist-show/tasklist-show.component';
import { AddTaskComponent } from './task-item/task-item-create/task-item-create.component';
import { TaskItemShowComponent } from './task-item/task-item-show/task-item-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { TaskItemListComponent } from './task-item/task-item-list/task-item-list.component';
import { TaskItemDeleteComponent } from './task-item/task-item-show/task-item-delete/task-item-delete.component';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { TaskItemCreateDialogComponent } from './task-item/task-item-create/task-item-create-dialog/task-item-create-dialog.component';
import { TasklistCreateDialogComponent } from './tasklist/tasklist-create/tasklist-create-dialog/tasklist-create-dialog.component';
import { MatSelectModule } from '@angular/material/select';
import { JwtHelperService, JWT_OPTIONS } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasklistListComponent,
    TasklistCreateComponent,
    TasklistShowComponent,
    AddTaskComponent,
    TaskItemShowComponent,
    TaskItemDeleteComponent,
    TaskItemListComponent,
    TaskItemCreateDialogComponent,
    TasklistCreateDialogComponent,
  ],

  entryComponents: [
    TaskItemDeleteComponent,
    TaskItemCreateDialogComponent,
    TasklistCreateDialogComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatCheckboxModule,
    MatDialogModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
  ],
  providers: [
    { provide: JWT_OPTIONS, useValue: JWT_OPTIONS },
    JwtHelperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
