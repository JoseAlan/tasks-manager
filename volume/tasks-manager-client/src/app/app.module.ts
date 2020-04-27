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
import { AddTaskComponent } from './tasklist/add-task/add-task.component';
import { TaskItemShowComponent } from './task-item-show/task-item-show.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatExpansionModule } from '@angular/material/expansion';
import { TaskItemListComponent } from './task-item-list/task-item-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    TasklistListComponent,
    TasklistCreateComponent,
    TasklistShowComponent,
    AddTaskComponent,
    TaskItemShowComponent,
    TaskItemListComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    // MatExpansionPanel,
    MatExpansionModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
