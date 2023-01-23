import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Formation } from 'src/app/models/formation';
import { FormationService } from 'src/app/services/formation/formation.service';

@Component({
  selector: 'app-ajouter-formation',
  templateUrl: './ajouter-formation.component.html',
  styleUrls: ['./ajouter-formation.component.css']
})
export class AjouterFormationComponent implements OnInit {
 
  formation !: any;
formationn = new Formation();
  constructor(private formationService:FormationService,
    private router: Router,
    private http:HttpClient,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.formationService.getAllFormations().subscribe(data => {
      this.formation = data;
      },
      error => console.log(error));
  }
  addFormation(){
    this.formationService.addFormation(this.formationn).subscribe( data => {
      console.log(data);
      window.location.reload();
    }) ;
  }

}
