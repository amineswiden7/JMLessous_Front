import { Component, OnInit } from '@angular/core';
import { NgWizardConfig, NgWizardService, StepChangedArgs, STEP_STATE, THEME } from 'ng-wizard';

@Component({
  selector: 'app-comptecourant',
  templateUrl: './comptecourant.component.html',
  styleUrls: ['./comptecourant.component.css']
})
export class ComptecourantComponent implements OnInit {

  stepStates = {
    normal: STEP_STATE.normal,
  };
  defaultconfig: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style2config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  style3config: NgWizardConfig = {
    selected: 0,
    theme: THEME.arrows,
  };
  constructor(private ngWizardService: NgWizardService) {
  }
  ngOnInit() {
  }
  showPreviousStep(_event?: Event) {
    this.ngWizardService.previous();
  }
  showNextStep(_event?: Event) {
    this.ngWizardService.next();
  }
  stepChanged(_args: StepChangedArgs) { }
}
