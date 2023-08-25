import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentAddComponent } from './student-add/student-add.component';

const routes: Routes = [
  { path: ' ', component: StudentListComponent },
  { path: 'add', component: StudentAddComponent },

  // { path: 'add', component: StudentAddComponent },
  // { path: 'update/:id', component: StudentUpdateComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
