import { Component, OnInit } from '@angular/core';
import {CoursactionsService} from '../../../services/marcheactions/coursactions.service';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {Market} from '../../models/market';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-marcheactions',
  templateUrl: './marcheactions.component.html',
  styleUrls: ['./marcheactions.component.css']
})
export class MarcheactionsComponent implements OnInit {
  markets: Market[];

  constructor(config: NgbModalConfig, private modalService: NgbModal, private coursService: CoursactionsService, private router: Router) {}

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content, { centered: true });
  }

  ngOnInit(): void {
    const obs$ = interval(5000);
    obs$.subscribe((n) => {
      this.coursService.getMarkets()
        .subscribe((response) => {
          this.markets = response.markets;
          }, error => {
          console.log(error);
          }
        );
    });

  }

  // tslint:disable-next-line:typedef
  getDetails(isin: string) {
    console.log(isin);
  }
}
