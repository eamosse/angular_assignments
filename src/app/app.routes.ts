import { Routes } from '@angular/router';
import {AssignmentsComponent} from "./assignments/assignments.component";
import {AddAssignmentComponent} from "./add-assignment/add-assignment.component";
import {AssignmentDetailComponent} from "./assignment-detail/assignment-detail.component";

export const routes: Routes = [
  {path: '', component: AssignmentsComponent},
  {path: 'home', component: AssignmentsComponent},
  {path: 'add', component: AddAssignmentComponent},
  {path: 'edit/:id', component: AssignmentDetailComponent}
];
