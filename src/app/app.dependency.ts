
import { ErrorHandler } from '@angular/core';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from './common/common.module';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import {AngularFireModule  } from '@angular/fire'
import { AngularFireAuthModule } from "@angular/fire/auth";
import { AngularFireMessagingModule } from "@angular/fire/messaging";
import { AngularFireDatabaseModule  } from '@angular/fire/database'
import { environment  } from '../environments/environment'


export let DependencyModules = {
    imports: [
        HttpClientModule,
        BrowserAnimationsModule,
        CommonModule,
        AngularFireDatabaseModule,
        AngularFireMessagingModule,
        AngularFireAuthModule,
        AngularFireModule.initializeApp(environment.firebase),
        LoadingBarHttpClientModule,
        LoadingBarRouterModule,
        LoadingBarModule      
    ],
    providers: [
     
      
  
          // CORE.FE Managers
        //   StorageManager,
      
    ]
};

