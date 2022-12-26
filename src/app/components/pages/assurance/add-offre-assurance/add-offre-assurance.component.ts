import { Router } from '@angular/router';
import { OffreAssuranceService } from 'src/app/services/assurance/offre-assurance.service';
import { OffreAssurance } from './../../../models/offre-assurance';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl} from '@angular/forms';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';
import { AngularEditorConfig } from '@kolkov/angular-editor';

declare var tinymce: any;

@Component({
  selector: 'app-add-offre-assurance',
  templateUrl: './add-offre-assurance.component.html',
  styleUrls: ['./add-offre-assurance.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class AddOffreAssuranceComponent implements OnInit {

  phase: number;

  @Input() offreAssurance = {
    type : '',
    categorie : '',
    image : '',
    description: '',
    shortDescription: '',
    assurance : '',
    // typePeriode : '',
    nbreContrats : 0,
    gainTotal : 0,
    lienLogo : '',
    statut : 'NOTPUBLISHED'};

    htmlContent = '';
    config: AngularEditorConfig = {
      editable: true,
      spellcheck: true,
      height: 'auto',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Entrer du text ici...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['upload', 'uploadurl']
    ]
    };

    // offreAssurance = new OffreAssurance();

  // tslint:disable-next-line:variable-name
  constructor(private _formBuilder: FormBuilder, private service: OffreAssuranceService, public router: Router) {
  }
  ngOnInit() {

  /*tinymce.init({
    selector: 'textarea',
    hidden : false,
    width: 300,
    plugins: 'preview importcss searchreplace autolink autosave save directionality code visualblocks visualchars fullscreen image link media template codesample table charmap pagebreak nonbreaking anchor insertdatetime advlist lists wordcount help charmap quickbars emoticons',
    menubar: 'file edit view insert format tools table help',
    toolbar: 'undo redo | bold italic underline strikethrough | fontfamily fontsize blocks | alignleft aligncenter alignright alignjustify | outdent indent |  numlist bullist | forecolor backcolor removeformat | pagebreak | charmap emoticons | fullscreen  preview save print | insertfile image media template link anchor codesample | ltr rtl',
  });*/
  }


  addOffre() {
    this.service.addOffreAssurance(this.offreAssurance).subscribe((data: {}) => {
      console.log(this.offreAssurance);
      this.router.navigate(['/offres-assureurs']);
    });
  }

}
