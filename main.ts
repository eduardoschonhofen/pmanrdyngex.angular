import './polyfills';
import { MatButton, MatButtonModule, MatIconModule, MatDividerModule, MatDialog, MatDialogModule, DateAdapter, MAT_DATE_LOCALE, MAT_DATE_FORMATS, MatInputModule, MatSelectModule, MatNativeDateModule, MatDatepickerModule, MatCheckboxModule, MatStepperModule, MatFormFieldModule, MatTableModule, MatCardModule, MatToolbarModule, MatMenuModule, MatTabsModule, MatSnackBarModule, MatTooltip, MatTooltipModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MomentDateAdapter, MAT_MOMENT_DATE_FORMATS, MomentDateModule } from '@angular/material-moment-adapter';
import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {DataSelectorComponent} from './app/data-selector.component'
import {NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
@NgModule({
  imports:[MatCheckboxModule,
        CommonModule,
        FormsModule,
        MatStepperModule,
        BrowserAnimationsModule,
        MatIconModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        HttpClientModule,
        MatNativeDateModule,
        MatInputModule,
        MatSelectModule,
        MatNativeDateModule,
        MatDatepickerModule,
        MomentDateModule,
        MatTableModule,
        MatCardModule,
        MatToolbarModule,
        MatMenuModule,
        MatDialogModule,
        MatDividerModule,
        MatTabsModule,
        MatSnackBarModule,
        MatButtonModule,MatTooltipModule],
  entryComponents: [DataSelectorComponent],
  declarations: [DataSelectorComponent],
  bootstrap: [DataSelectorComponent],
  providers: []
})
export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);


/**  Copyright 2019 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */