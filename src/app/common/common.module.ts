import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CommonModule as Common } from '@angular/common';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { ClipboardModule } from 'ngx-clipboard';
import { RouterModule } from '@angular/router';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
    MatSnackBarModule,
    MatRadioModule,
    MatFormFieldModule,
    MatNativeDateModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDialogModule,
    MatBadgeModule,
    MatCardModule,
    MatExpansionModule,
    MatDividerModule
} from '@angular/material';


@NgModule({
    declarations: [
      
       
    ],
    exports: [
     
      
        MatDialogModule,
        ClipboardModule,
        MatDividerModule,
        MatExpansionModule,
        MatFormFieldModule,
      
        MatBadgeModule,
      
      
     
    ],
    imports: [
        Common,
        FormsModule,
        MatProgressBarModule,
        MatSnackBarModule,
        MatDialogModule,
    
        MatBadgeModule,
       
        ClipboardModule,
        NgxSkeletonLoaderModule,
       
        RouterModule,
        MatExpansionModule,
      
        MatDividerModule,
        
        MatRadioModule,
     
        MatFormFieldModule,
        ReactiveFormsModule,
        MatNativeDateModule,
        MatIconModule,
        MatInputModule,
        MatSelectModule,
        MatCheckboxModule,

    ],
    providers: [
      , 
    ],
    schemas: [CUSTOM_ELEMENTS_SCHEMA],
    entryComponents:[]
})
export class CommonModule {
    constructor() {
        
    }

}

