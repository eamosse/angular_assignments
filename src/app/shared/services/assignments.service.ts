import {Injectable} from '@angular/core';
import {Assignment} from "../../assignments/assignment.models";
import {BehaviorSubject, of} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  private assignments: Assignment[] = [
    {
      id: 1,
      nom: "Assignment 1",
      rendu: true,
      dateDeRendu: new Date()
    },
    {
      id: 2,
      nom: "Assignment 2",
      rendu: false
    },
    {
      id: 3,
      nom: "Assignment 3",
      rendu: true,
      dateDeRendu: new Date()
    },
    {
      id: 4,
      nom: "Assignment 4",
      rendu: false
    }
  ]

  private sharedObjectSource = new BehaviorSubject<number | undefined>(undefined);
  currentAssignment = this.sharedObjectSource.asObservable();


  constructor() {
  }

  getAssignments() {
    return of(this.assignments)
  }

  selectAssignment(id: number) {
    this.sharedObjectSource.next(id)
  }

  getAssignment(id: number) {
    return of(this.assignments.find(a => a.id === id))
  }

  addAssignment(assignment: Assignment) {
    assignment.id = this.assignments.length + 1
    this.assignments.push(assignment)
    return of("Assignment added")
  }

}
