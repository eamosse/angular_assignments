import {Component, EventEmitter, Inject, Input, Output} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {MatButton} from "@angular/material/button";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatInput} from "@angular/material/input";
import {Assignment} from "../assignments/assignment.models";
import {AssignmentsService} from "../shared/services/assignments.service";
import {AssignmentsComponent} from "../assignments/assignments.component";
import {provideNativeDateAdapter} from "@angular/material/core";

@Component({
  selector: 'app-add-assignment',
  standalone: true,
  imports: [
    FormsModule,
    MatButton,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    MatFormField,
    MatHint,
    MatInput,
    MatLabel,
    MatSuffix
  ],
  providers: [provideNativeDateAdapter(),],
  templateUrl: './add-assignment.component.html',
  styleUrl: './add-assignment.component.css'
})
export class AddAssignmentComponent {
  newAssignment: Assignment = new Assignment()
  assignmentService!: AssignmentsService
  @Output() assignmentCreate = new EventEmitter<void>()

  constructor(@Inject(AssignmentsService) service: AssignmentsService) {
    this.assignmentService = service
  }

  onCreate() {
    const assignment = new Assignment()
    assignment.nom = this.newAssignment.nom
    assignment.dateDeRendu = this.newAssignment.dateDeRendu
    this.assignmentService.addAssignment(assignment).subscribe(result => {
      this.newAssignment = new Assignment()
      this.assignmentCreate.emit()
    })
  }
}
