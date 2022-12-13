import { FormGroup, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { ProduitFinancierService } from './../../../../services/produitFinancier/produit-financier.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CoursactionsService } from './../../../../services/marcheactions/coursactions.service';
import { ProduitFinancier } from './../../../models/produitFinancier/produit-financier';
import { Portfeuille } from './../../../models/portfeuille/portfeuille';
import { Component, OnInit } from '@angular/core';
import { PortfeuilleService } from 'src/app/services/portfeuille/portfeuille.service';
import { Router } from '@angular/router';
import { promise } from 'protractor';

@Component({
  selector: 'app-portfeuille',
  templateUrl: './portfeuille.component.html',
  styleUrls: ['./portfeuille.component.css']
})
export class PortfeuilleComponent implements OnInit {
  public produits : ProduitFinancier [];
  public portfeuille = new Portfeuille();
  p : any ={solde : 0};
  last :any;
  performance : number = 0 ;
  gain : number =0;
  total : number = 0;
  capital : number=0;
  isin :any;
  prix:any;
  nombre : any;
  titre:any;
  solde : any ;
  produit : any = {
    isin:""
  }
  idPortfeuille:any;
  Pvar : number=0;
  confiance :any;
  horizon : any;
  var : FormGroup;
  submitted = false;
 

  constructor(private service:PortfeuilleService,public router: Router, private coursService: CoursactionsService,private modalQuantite: NgbModal,private modalPortfeuille: NgbModal,private serviceProduit:ProduitFinancierService,private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loadPortfeuille();
    //this.alet()
//    this.loadProduits(this.portfeuille);
    this.var =this.formBuilder.group({
    con : [, [Validators.required,Validators.min(1),(control: AbstractControl) => Validators.max(99)(control)]],
    hor : [, [Validators.required,Validators.min(1)]]
    });
  }

  get hor() {
    return this.var.get("hor");
  }
  get con() {
    return this.var.get("con");
  }


  loadPortfeuille():void {
    
    this.service.getPortfeuilleByUser(1).subscribe(
      data => {
       // console.log(data);
        
        this.portfeuille=data;
        this.idPortfeuille=this.portfeuille.idPortfeuille;
        this.loadProduits(this.portfeuille.idPortfeuille);
        //this.getVar(this.portfeuille.idPortfeuille);
        /*this.produits.forEach(produit => {
          
        });*/
      }
    )
  }

  loadProduits(p:any) : void{
   // console.log(p);
    this.service.getProduits(p).subscribe(
      data => {
        console.log(data);
        this.produits=data;
        this.portfeuille.gain = this.gain;
        this.produits.forEach(produit => {
          this.coursService.getMarket(produit.isin)
            .subscribe((response) => {
                produit.last= response.market.last;
                produit.capital = produit.last*produit.quantite;
                produit.montant = produit.montantAchat * produit.quantite;
                produit.gain = produit.capital - produit.montant;
                this.total+= produit.montant;
                this.gain += produit.gain;
                this.capital+=produit.capital;
                this.portfeuille.montant = this.total;
                this.portfeuille.gain = this.gain;
                this.portfeuille.capital=this.capital;
                console.log(this.portfeuille.montant);
                console.log(this.portfeuille.gain);
                console.log(this.portfeuille.gain/this.portfeuille.montant);
              }, error => {
                console.log(error);
              }
            );
         /* this.getProduit(produit.isin);
          produit.last= this.last;
          console.log(this.getProduit(produit.isin));*/
        });       

        console.log(this.produits);
      }
    )
  }

  getProduit(isin):void{
    this.coursService.getMarket(isin)
      .subscribe((response) => {
          this.last= response.market.last;
        }, error => {
          console.log(error);
        }
      );
  }


  openDialog(quantite,isin:any,prix:any,titre:any): void {
    const modalRef = this.modalQuantite.open(quantite, {
      centered: true, animation: true, scrollable: true, size: 'lg'
    });
    this.isin=isin;
    this.prix = prix;
    this.titre=titre
  }

  vendre():void{
    console.log(this.isin)
    this.produit.isin=this.isin;
    console.log(this.produit);
    this.serviceProduit.vendreProduit(this.produit,this.idPortfeuille,this.prix,this.nombre).subscribe((data: {}) => {
      console.log(this.produit);
      this.modalQuantite.dismissAll();
        this.loadPortfeuille()
        this.router.navigate(['/Mon-Portfeuille']);
    });
  }


  openDialogPortfeuille(portfeuilleD): void {
    const modalRef = this.modalPortfeuille.open(portfeuilleD, {
      centered: true, animation: true, scrollable: true, size: 'lg'
    });
    
  }


  addPortfeuille():void{
    
    console.log(this.solde);
    this.service.addPortfeuille(this.solde,1).subscribe((data: {}) => {
      this.modalPortfeuille.dismissAll();
      this.loadPortfeuille()
      this.router.navigate(['/Mon-Portfeuille']);
    });
  }


  getVar() {
    this.submitted = true;
    console.log(this.con)
    // stop here if form is invalid
    console.log(this.var.invalid)
    /*if (this.var.invalid) {
        return;
    }
    
    else{*/
    // console.log(p);
    console.log(this.confiance+" : "+this.horizon);
     this.service.getPortfeuilleVar(this.idPortfeuille,this.confiance,this.horizon).subscribe(
       data => {
        console.log(data);
        this.Pvar=data;
       });}
      // this.var.reset();
  //}

}
