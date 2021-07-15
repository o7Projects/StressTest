import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {

  responsiveOptions;
  products: any[];

  form: FormGroup;
  displayHint=false;

  constructor(private route: Router) {


    this.form = new FormGroup({
      mailSubject: new FormControl('', [Validators.required]),
      // mailText: new FormControl('', [Validators.required,Validators.pattern("^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$")]),
      mailText: new FormControl('', [Validators.required]),
      mailBody: new FormControl('', [Validators.required]),
    });



    this.responsiveOptions = [
      {
        breakpoint: '1024px',
        numVisible: 3,
        numScroll: 3
      },
      {
        breakpoint: '768px',
        numVisible: 2,
        numScroll: 2
      },
      {
        breakpoint: '560px',
        numVisible: 1,
        numScroll: 1
      }
    ];

    this.products = [
      {
        image: "NoPath1.png",
        name: "Lorem Ipsum is simply dummy text of the printing",
        content: "Lorem Ipsum"
      },
      {
        image: "NoPath2.png",
        name: "Lorem Ipsum is simply dummy text of the printing",
        content: "Lorem Ipsum"
      },
      {
        image: "NoPath3.png",
        name: "Lorem Ipsum is simply dummy text of the printing",
        content: "Lorem Ipsum"
      },
    ];
  }


  ngOnInit(): void {
  }


  get f() {
    return this.form.controls;
  }

  submit() {
  }

  getPage(event) {
    // debugger;
    let pageIndex = event.first / event.rows + 1 // Index of the new page if event.page not defined.
  }

  mouseEnter(){
    this.displayHint=true;
  }
  mouseLeave(){
    this.displayHint=false;
  }


}
