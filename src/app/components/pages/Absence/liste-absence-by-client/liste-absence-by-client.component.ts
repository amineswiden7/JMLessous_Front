import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/models/absence';
import { AbsenceService } from 'src/app/services/absence/absence.service';

@Component({
  selector: 'app-liste-absence-by-client',
  templateUrl: './liste-absence-by-client.component.html',
  styleUrls: ['./liste-absence-by-client.component.css']
})
export class ListeAbsenceByClientComponent implements OnInit {
  listA :Absence[];

  constructor(private Absence:AbsenceService) { 
    this.listA=[]
  }

  ngOnInit(): void {
    this.Absence.getAllAbsencebyuser(1).subscribe(res=>{console.log(res);this.listA=res});
  }

}
