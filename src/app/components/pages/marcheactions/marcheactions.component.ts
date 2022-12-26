import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Portfeuille } from './../../models/portfeuille/portfeuille';
import { PortfeuilleService } from 'src/app/services/portfeuille/portfeuille.service';
import { Ordre } from './../../models/ordre/ordre';
import { ProduitFinancier } from './../../models/produitFinancier/produit-financier';
import { ProduitFinancierService } from './../../../services/produitFinancier/produit-financier.service';
import { QuantiteAchatComponent } from './quantiteAchat/quantite-achat/quantite-achat.component';
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
  nombre:any;
  produit : any = {
    montantAchat : 0,
    titre : "",
    quantite: 0,
    isin:"",
    symbol:""
  }
  ordre = new Ordre
  titre:any;
  prix:any;
  isin:any;
  symbol:any;
  portfeuille = new Portfeuille();
  idPortfeuille:any;
  quantiteForm :FormGroup;
  submitted = false;
  maxvalue:any;
  qtevente:any;
  date : Date;
  ouvert:string = 'ouvert';
  actualites = [];
  
  constructor(config: NgbModalConfig, private modalService: NgbModal, private coursService: CoursactionsService, private router: Router,private modalQuantite: NgbModal,private service: ProduitFinancierService,private servicePortfeuille:PortfeuilleService,private formBuilder: FormBuilder) {}

  async open(content, isin: string,ticker: string): Promise<void> {
    this.getDetails(isin,ticker).finally(() => {

      this.modalService.open(content, {centered: true, animation: true, scrollable: true, size: 'lg'});
    });
    
  }

  ngOnInit(): void {
    this.date=new Date();
    if (this.date.getDay() == 0 || this.date.getDate()==6 || this.date.getHours()>14 || this.date.getHours() < 9)
      this.ouvert='fermé';
    this.loadPortfeuille();
    //this.getDetails('TN0007250012');
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

    this.quantiteForm =this.formBuilder.group({
      qte : [, [Validators.required,Validators.min(1),
        (control: AbstractControl) => Validators.max(this.maxvalue)(control)]]
      });
  }
  get qte() {
    return this.quantiteForm.get('qte');
 }

  //get f() { return this.quantiteForm.controls; }

  // Récupération des données de l'action
  async getDetails(isin: string,ticker:string): Promise<void> {
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

      this.coursService.getProdActu(ticker).subscribe(
        data => {
          console.log(data);
          this.actualites=data;
        }
      );
  }

  openDialog(quantite,isin:any,titre:any,prix:any,qte:any,symbol:any): void {
    const modalRef = this.modalQuantite.open(quantite, {
      centered: true, animation: true, scrollable: true, size: 'lg'
    });
    this.isin=isin;
    this.titre=titre;
    this.prix=prix;
    this.symbol=symbol;
    this.qtevente=qte;
    this.maxvalue = Math.floor(this.portfeuille.solde/this.prix);
    if (this.qtevente<this.maxvalue) {
      this.maxvalue=this.qtevente;
      
    } 
    
    console.log(this.maxvalue)

  }
  /*openDialog(dialogQuantite : TemplateRef<any>,name): void {

    const dialogRef = this.dialog.open(dialogQuantite, {
      width: '250px',
      data: {name: this.name},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      //this.credit.payedAmount = result;
    });
  }

  closeDialog(): void {
    this.dialog.closeAll();
  }*/

  loadPortfeuille():void {
    
    this.servicePortfeuille.getPortfeuilleByUser(1).subscribe(
      data => {
       // console.log(data);
        
        this.portfeuille=data;
        this.idPortfeuille=this.portfeuille.idPortfeuille;
        /*this.produits.forEach(produit => {
          
        });*/
      }
    )
  }

  acheter(){
    this.submitted = true;

    // stop here if form is invalid
    console.log(this.quantiteForm.invalid)
    if (this.quantiteForm.invalid) {
        return;
    }
    else{
    this.produit.quantite=this.nombre;
    this.produit.titre=this.titre;
    this.produit.montantAchat=this.prix;
    this.produit.isin=this.isin;
    this.produit.symbol=this.symbol;
    console.log(this.produit);
    this.service.addProduit(this.produit,this.idPortfeuille,this.prix,this.nombre).subscribe((data: {}) => {
      console.log(this.produit);
       this.modalQuantite.dismissAll();
        this.router.navigate(['/coursActions']);
    });}
    this.quantiteForm.reset();
  }


 
}
