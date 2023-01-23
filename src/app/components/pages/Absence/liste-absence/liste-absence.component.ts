import { Component, OnInit } from '@angular/core';
import { Absence } from 'src/app/models/absence';
import { AbsenceService } from 'src/app/services/absence/absence.service';

@Component({
  selector: 'app-liste-absence',
  templateUrl: './liste-absence.component.html',
  styleUrls: ['./liste-absence.component.css']
})
export class ListeAbsenceComponent implements OnInit {
  listA :Absence[];

  constructor(private Absence:AbsenceService) { 
    this.listA=[]
  }

  ngOnInit(): void {
    this.Absence.getAllAbsence().subscribe(res=>{console.log(res);this.listA=res});
  }

}
