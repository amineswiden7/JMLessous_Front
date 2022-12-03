import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-utilisateur-profile',
  templateUrl: './utilisateur-profile.component.html',
  styleUrls: ['./utilisateur-profile.component.css']
})
export class UtilisateurProfileComponent implements OnInit {

  constructor() { }
  public chart: any;
  datasets = [
    {
      label: 'Traffic',
      data: [2112, 2343, 2545, 3423, 2365, 1985, 987],
    },
  ];

  labels = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  ngOnInit(): void {
  }
  

}
