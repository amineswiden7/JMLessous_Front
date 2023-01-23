import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation/formation.service';

@Component({
  selector: 'app-one-formation',
  templateUrl: './one-formation.component.html',
  styleUrls: ['./one-formation.component.css']
})
export class OneFormationComponent implements OnInit {
  idFormation !:any;
  formation !: any;

  constructor(private formationService:FormationService,
    private router: Router,
    private http:HttpClient,
    private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idFormation = this.route.snapshot.params['idFormation'];
    this.loadformation(this.idFormation);
  }

  loadformation(idFormation:any) {
    return this.formationService.getformation(idFormation).subscribe(
      data => {console.log(data);
      this.formation=data;}
    )
  }
}
