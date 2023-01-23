import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation/formation.service';

@Component({
  selector: 'app-formations',
  templateUrl: './formations.component.html',
  styleUrls: ['./formations.component.css']
})
export class FormationsComponent implements OnInit {
  formation !: any;
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

}
