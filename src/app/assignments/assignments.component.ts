import {Component, Inject, OnInit} from '@angular/core';
import {CommonModule} from "@angular/common";

import {NotRenderDirective, RenderDirective} from "../render.directive";
import {MatButton} from "@angular/material/button";
import {FormGroup, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatFormField, MatFormFieldModule} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Assignment} from "./assignment.models";
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatInputModule} from '@angular/material/input';
import {provideNativeDateAdapter} from '@angular/material/core';
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {AssignmentDetailComponent} from "../assignment-detail/assignment-detail.component";
import {MatActionList, MatList, MatListItem, MatListSubheaderCssMatStyler} from "@angular/material/list";
import {MatDivider} from "@angular/material/divider";
import {AddAssignmentComponent} from "../add-assignment/add-assignment.component";
import {AssignmentsService} from "../shared/services/assignments.service";
import {RouterLink} from "@angular/router";

@Component({
  selector: 'app-assignments',
  standalone: true,
  providers: [provideNativeDateAdapter()],
  imports: [CommonModule, RenderDirective, NotRenderDirective, MatButton, ReactiveFormsModule, FormsModule, MatFormField, MatInput, MatDatepickerToggle, MatDatepicker, MatDatepickerInput, MatFormFieldModule, MatInputModule, MatDatepickerModule, AssignmentDetailComponent, MatList, MatListSubheaderCssMatStyler, MatListItem, MatDivider, AddAssignmentComponent, RouterLink, MatActionList],
  templateUrl: './assignments.component.html',
  styleUrl: './assignments.component.css'
})
export class AssignmentsComponent implements OnInit {
  title = "Gestion des assiggnments"
  assignmentService!: AssignmentsService
  formVisible = false
  assignments!: Assignment[]

  constructor(@Inject(AssignmentsService) assignmentService: AssignmentsService) {
    this.assignmentService = assignmentService
  }

  ngOnInit() {
    this.assignmentService.getAssignments().subscribe(assignments => this.assignments = assignments)
  }

  onSelect(id: number) {
    this.assignmentService.selectAssignment(id)
  }

  switchForm() {
    this.formVisible = !this.formVisible
  }

  onCreated() {
    this.formVisible = false
  }
}


