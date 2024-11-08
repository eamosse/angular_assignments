import {Component, Inject, Input, OnInit} from '@angular/core';
import {Assignment} from "../assignments/assignment.models";
import {MatCardModule} from "@angular/material/card";
import {CommonModule} from "@angular/common";
import {ActivatedRoute} from "@angular/router";
import {MatCheckboxModule} from "@angular/material/checkbox";
import {FormsModule} from "@angular/forms";
import {AssignmentsService} from "../shared/services/assignments.service";

@Component({
  selector: 'app-assignment-detail',
  standalone: true,
  imports: [CommonModule, MatCheckboxModule, MatCardModule, FormsModule],
  templateUrl: './assignment-detail.component.html',
  styleUrl: './assignment-detail.component.css'
})
export class AssignmentDetailComponent implements OnInit {
  assignmentService!: AssignmentsService
  assignment?: Assignment | undefined = undefined
  private route: ActivatedRoute;

  constructor(@Inject(AssignmentsService) assignmentService: AssignmentsService, route: ActivatedRoute) {
    console.log(assignmentService)
    this.assignmentService = assignmentService
    this.route = route
  }

  ngOnInit(): void {
    let id = Number(this.route.snapshot.params['id']);
    this.assignmentService.getAssignment(id).subscribe(assignment => this.assignment = assignment)
  }

}
