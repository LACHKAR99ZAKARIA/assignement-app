import { Component } from '@angular/core';

@Component({
  selector: 'app-assignments',
  templateUrl: './assignments.component.html',
  styleUrls: ['./assignments.component.css']
})
export class AssignmentsComponent {
  title = "list des assignements:"
  assignements=[
    {
      nom:"TP1 grails",
      dateDeRendu:'2023-11-17',
      rendu:true
    },
    {
      nom:"TP1 NFC",
      dateDeRendu:'2023-01-30',
      rendu:true
    },
    {
      nom:"TP1 PFA",
      dateDeRendu:'2023-02-10',
      rendu:false
    },
  ]
}
