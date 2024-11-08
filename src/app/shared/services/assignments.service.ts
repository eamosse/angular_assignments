import {Injectable} from '@angular/core';
import {Assignment} from "../../assignments/assignment.models";
import {BehaviorSubject, of} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AssignmentsService {

  backendUrl = "http://localhost:8010/api/assignments"

  /*private assignments: Assignment[] = [
    {
      nom: "Assignment 1",
      rendu: true,
      dateDeRendu: new Date()
    },
    {
      nom: "Assignment 2",
      rendu: false
    },
    {
      nom: "Assignment 3",
      rendu: true,
      dateDeRendu: new Date()
    },
    {
      nom: "Assignment 4",
      rendu: false
    }
  ]*/

  private sharedObjectSource = new BehaviorSubject<number|undefined>(undefined);
  currentAssignment = this.sharedObjectSource.asObservable();

  //currentAssignment?: Assignment|undefined = undefined;
  private client: HttpClient;

  constructor(client: HttpClient) {
    this.client = client
  }

  getAssignments() {
    return this.client.get<Assignment[]>(this.backendUrl)
  }

  selectAssignment(id: number) {
    this.sharedObjectSource.next(id)
  }

  getAssignment(id: number) {
    return this.client.get<Assignment>(this.backendUrl + "/" + id)
  }

  addAssignment(assignment: Assignment) {
    //this.assignments.push(assignment)
    return of("Assignment added")
  }

  updateAssignment(assignment: Assignment, index: number) {
    //this.assignments[index] = assignment
  }

  deleteAssignment(index: number) {
    //this.assignments.splice(index, 1)
  }

}
