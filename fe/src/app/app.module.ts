import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppComponent} from './app.component';
import {CollectstudentListComponent} from './collectstudent/collectstudent-list/collectstudent-list.component';
import {HttpClientModule} from "@angular/common/http";
import {CollectstudentAddComponent} from './collectstudent/collectstudent-add/collectstudent-add.component';
import {RouterModule} from "@angular/router";
import {CollectstudentComponent} from './collectstudent/collectstudent/collectstudent.component';
import {ReactiveFormsModule} from "@angular/forms";
import {StudentListComponent} from './student/student-list/student-list.component';
import {StudentComponent} from './student/student/student.component';
import {StudentAddComponent} from './student/student-add/student-add.component';
import { StudentEditComponent } from './student/student-edit/student-edit.component';
import { StudentDetailComponent } from './student/student-detail/student-detail.component';
import { CollectstudentEditComponent } from './collectstudent/collectstudent-edit/collectstudent-edit.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CollectstudentDeleteComponent } from './collectstudent/collectstudent-delete/collectstudent-delete.component';
import {MatDialogModule} from "@angular/material/dialog";
import { StudentDeleteComponent } from './student/student-delete/student-delete.component';

@NgModule({
  declarations: [
    AppComponent,
    CollectstudentListComponent,
    CollectstudentAddComponent,
    CollectstudentComponent,
    StudentListComponent,
    StudentComponent,
    StudentAddComponent,
    StudentEditComponent,
    StudentDetailComponent,
    CollectstudentEditComponent,
    CollectstudentDeleteComponent,
    StudentDeleteComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: "collectstudent", component: CollectstudentComponent, children: [
          {path: "", component: CollectstudentListComponent},
          {path: "add/:id", component: CollectstudentAddComponent},
          {path:"edit/:id", component: CollectstudentEditComponent}
        ]
      },
      {
        path: "student", component: StudentComponent, children: [
          {path: "", component: StudentListComponent},
          {path: "add", component: StudentAddComponent},
          {path: "edit/:id", component: StudentEditComponent},
          {path: "detail/:id", component: StudentDetailComponent}
        ]
      }
    ]),
    BrowserAnimationsModule,
    MatDialogModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
