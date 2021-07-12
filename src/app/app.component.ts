
import { Component, OnInit, ViewEncapsulation, Injector, NgZone } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar } from '@angular/material/snack-bar';

import { MatDialog, DialogPosition } from '@angular/material';

import { Overlay } from '@angular/cdk/overlay';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements OnInit {
  title = 'O7';
  currentSession;
  chatDialogId;

  constructor(
    private swUpdate: SwUpdate,
    private snackBar: MatSnackBar,
    private zone: NgZone,
    private matDialog: MatDialog,
    private router: Router,
    private overlay: Overlay,

  ) { 
  }

  async ngOnInit() {

   

    // this.router.events.subscribe((value) => {
    //   if (value instanceof NavigationEnd) {
    //      this.openTherapistChatDialog();
    //   }
    // });

    this.checkForSwUpdate(this.swUpdate);
    
  }



  checkForSwUpdate(swUpdate: SwUpdate) {
    swUpdate.available.subscribe(async res => {
      //console.log('Update available');

      this.zone.run(() => {
        this.snackBar.open("Update available!", "Update", {
          horizontalPosition: "center",
          verticalPosition: "top",
          panelClass: ["snack-bar-default"]

        }).onAction().subscribe(() => {
          //console.log('The snack-bar action was triggered!');
          this.swUpdate.activateUpdate().then(() => {
            window.location.reload();
          })
        });
      });
    });
  }

}