import { Component, OnInit, Input, ViewChild, ElementRef } from '@angular/core';
import { Moment } from 'moment'
import { MatDatepicker, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, TooltipComponent } from '@angular/material';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import * as moment from 'moment';

import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Placeholder } from '@angular/compiler/src/i18n/i18n_ast';

@Component({
  selector: 'app-data-selector',
  templateUrl: './data-selector.component.html',
})
export class DataSelectorComponent implements OnInit {
  year: number;
  month: string;


  form;
  @ViewChild('click') inputClick: ElementRef;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form=this.formBuilder.group({
      data:['',Validators.required]
    })
    this.clickFalso();
  }

  chosenYearHandler($event: Moment) {
    this.year = $event.year();
  }

  chosenMonthHandler(normalizedMonth: Moment, datepicker: MatDatepicker<Moment>) {
    const ctrlValue = moment()
    ctrlValue.month(normalizedMonth.month());
    ctrlValue.year(this.year);
   

    
    console.log(ctrlValue);
    this.form.controls['data'].setValue(ctrlValue);
    this.month = normalizedMonth.format('MM');
    datepicker.close();
    this.clickFalso();


  }

  clickFalso() {
    let el: HTMLElement = this.inputClick.nativeElement as HTMLElement;
    el.click();
    el.blur();
  }

}
