import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Injector } from '@angular/core';
import { AppRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { DependencyModules } from './app.dependency';
import { ServiceWorkerModule } from '@angular/service-worker';
import { Settings } from './app.settings';

import { ToastrModule } from 'ngx-toastr';

import { Ng2DeviceDetectorModule } from 'ng2-device-detector';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    NgbModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    Ng2DeviceDetectorModule.forRoot(),
    ToastrModule.forRoot({
      tapToDismiss :true,
      timeOut: 10000,
       //disableTimeOut :true,
      countDuplicates: true,
      positionClass: 'toast-bottom-left',
    }),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: false/*environment.production*/ }),
    ...DependencyModules.imports,
  ],
  declarations: [AppComponent],
  providers: [
    ...DependencyModules.providers
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor( 
   
   )  {
    this.initSettings();
    this.initContext();

  }

  private initSettings() {



    const settings = new Settings();

    // initialize application manager
  

  }

  private initContext() {
  
  }
}

