import { NgModule } from "@angular/core";

import { CommonTranslation } from "src/app/common/common.translation";
import { HomeComponent } from "./home/home.component";
import { IntroComponent } from "./intro/intro.component";
import { QuestionsComponent } from "./questions/questions.component";
import { ScoreComponent } from "./score/score.component";
import { StressTestRouting } from "./stress-test.routing";
import { StressTestTranslation } from "./stress-test.translation";
import { SurveyComponent } from "./survey/survey.component";
import { CommonModule } from '@angular/common';
import { CommonModule as CommonUIModule } from '../../common/common.module';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import { MatCheckboxModule } from "@angular/material/checkbox";
import { MatSliderModule } from "@angular/material/slider";
import { MatTabsModule } from "@angular/material/tabs";
import { MatStepperModule } from "@angular/material/stepper";
import { MatDatepickerModule } from "@angular/material/datepicker";
import { MatNativeDateModule } from "@angular/material/core";
import { MatMenuModule } from "@angular/material/menu";
import { MatButtonModule } from "@angular/material/button";
import { MatInputModule } from "@angular/material/input";
import { MatRippleModule } from "@angular/material/core";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatTooltipModule } from "@angular/material/tooltip";
import { MatSelectModule } from "@angular/material/select";
import { MatDialogModule } from "@angular/material/dialog";
import {MatListModule} from '@angular/material/list';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatRadioModule } from '@angular/material/radio';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';

import { ModalModule } from 'ngx-bootstrap/modal';


import { NgxSocialShareModule } from 'ngx-social-share';
import { NgxCaptureModule } from 'ngx-capture';

import { NgxPaginationModule } from 'ngx-pagination';

import { AngularResizedEventModule } from 'angular-resize-event';
import { SummaryComponent } from './summary/summary.component';
import { ElnadaComponent } from './elnada/elnada.component';

@NgModule({
    imports: [
      StressTestRouting,
      CommonModule,
      CommonUIModule,
      MatListModule,
      FormsModule,
      ReactiveFormsModule,
      NgxPaginationModule,
      ModalModule,
      MatButtonModule,
      MatCheckboxModule,
      MatRippleModule,
      MatFormFieldModule,
      MatInputModule,
      MatSelectModule,
      MatAutocompleteModule,
      MatTooltipModule,
      MatSliderModule,
      MatTabsModule,
      MatStepperModule,
      MatDatepickerModule,
      MatNativeDateModule,
      MatMenuModule,
      MatDialogModule,
      MatRadioModule,
      MatSortModule,
      MatIconModule,
      MatCardModule,
      MatExpansionModule,

      NgxSocialShareModule,
      NgxCaptureModule,
      AngularResizedEventModule
    ],
    declarations: [
        HomeComponent,
        IntroComponent,
        QuestionsComponent,
        ScoreComponent,
        SurveyComponent,
        SummaryComponent,
        ElnadaComponent
    ],
   
    entryComponents: [HomeComponent],
  })
  export class StressTestModule {
  
    constructor() {
    
    }
  
  }