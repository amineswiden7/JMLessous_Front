import { Component, OnInit, ViewChild} from '@angular/core';
import {CoursactionsService} from '../../../services/marcheactions/coursactions.service';
import {Router} from '@angular/router';
import {interval} from 'rxjs';
import {Market} from '../../models/marcheactions/market';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {Intraday} from '../../models/marcheactions/intraday';
import {Limit} from '../../models/marcheactions/limit';


@Component({
  selector: 'app-marcheactions',
  templateUrl: './marcheactions.component.html',
  styleUrls: ['./marcheactions.component.css']
})
export class MarcheactionsComponent implements OnInit {
  markets: Market[];
  intradays: Intraday[];
  limits: Limit[];
  actionMarket: Market;

  constructor(config: NgbModalConfig, private modalService: NgbModal, private coursService: CoursactionsService, private router: Router) {}

  async open(content, isin: string): Promise<void> {
    this.getDetails(isin).finally(() => {
      this.modalService.open(content, {centered: true, animation: true, scrollable: true, size: 'lg'});
    });
  }

  ngOnInit(): void {
    this.getDetails('TN0007250012');
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

  // Récupération des données de l'action
  async getDetails(isin: string): Promise<void> {
    this.coursService.getLimits(isin)
      .subscribe((response) => {
          this.limits = response.limits;
        }, error => {
          console.log(error);
        }
      );

    this.coursService.getIntradays(isin)
      .subscribe((response) => {
          this.intradays = response.intradays;
        }, error => {
          console.log(error);
        }
      );

    this.coursService.getMarket(isin)
      .subscribe((response) => {
          this.actionMarket = response.market;
        }, error => {
          console.log(error);
        }
      );
  }
}
