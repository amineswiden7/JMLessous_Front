import { Component, OnInit } from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {OffresAssureursComponent} from '../offres-assureurs.component';

@Component({
  selector: 'app-side-bar-offres-assureurs',
  templateUrl: './side-bar-offres-assureurs.component.html',
  styleUrls: ['./side-bar-offres-assureurs.component.css']
})
export class SideBarOffresAssureursComponent implements OnInit {

  constructor(config: NgbModalConfig, private modalService: NgbModal, public offres: OffresAssureursComponent) { }

  async open(content): Promise<void> {
    this.modalService.open(content, {centered: true, animation: true, scrollable: true, size: 'lg'});
  }

  ngOnInit(): void {
  }

  showAll(): void{
    this.offres.diffused = this.offres.allOffers;
  }
  showRejected(): void{
    this.offres.diffused = this.offres.rejectedOffers;
  }
  showSuspended(): void{
    this.offres.diffused = this.offres.suspendedOffers;
  }
  showPub(): void{
    this.offres.diffused = this.offres.publishedOffers;
  }
  showNotPub(): void{
    this.offres.diffused = this.offres.notPublishedOffers;
  }
  showValid(): void{
    this.offres.diffused = this.offres.validationOffrees;
  }

}
