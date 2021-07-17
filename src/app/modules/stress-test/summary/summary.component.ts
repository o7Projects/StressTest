import { Component, HostListener, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-summary',
  templateUrl: './summary.component.html',
  styleUrls: ['./summary.component.scss']
})
export class SummaryComponent implements OnInit {


  adultType=0;

  subjectNotValid = false;
  mailNotValid = false;
  bodyNotValid = false;

  mailRegex;
  mailPattern="^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$";
  siteWidth: Number;

  responsiveOptions;
  products: any[];

  form: FormGroup;
  displayHint = false;

  constructor(private route: Router) {



    this.form = new FormGroup({
      mailSubject: new FormControl('', [Validators.required]),
      mailText: new FormControl('', [Validators.required,Validators.pattern(this.mailPattern)]),
      // mailText: new FormControl('', [Validators.required]),
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
        image: "prod1.jpg",
        name: "What to Expect in Therapy? كيف تبدو جلسات العلاج النفسي؟ - Lydia Gadallah",
        content: "Lorem Ipsum",
        url: "https://www.youtube.com/watch?time_continue=1&v=3xOcAS-8pH4&feature=emb_logo"
      },
      {
        image: "prod3.jpg",
        name: "Debunking BPD Myths - الخرافات المتعلقة باضطراب الشخصية الحدودية",
        content: "Lorem Ipsum",
        url: "https://www.youtube.com/watch?v=Xc4yF6_hrv8&feature=emb_logo"
      },
      {
        image: "prod2.jpg",
        name: "The Spectrum of Anxiety & Depression - Dr. Mohamed Salah Specialist Psychiatrist",
        content: "Lorem Ipsum",
        url: "https://www.youtube.com/watch?v=wudPHUo90JA&feature=emb_logo"
      },
      {
        image: "prod4.jpg",
        name: "How to tell if I need Therapy",
        content: "Lorem Ipsum",
        url: "https://www.youtube.com/watch?v=sQmTvttavJk&feature=emb_logo"
      }
    ];
  }



  ngOnInit(): void {
    this.getScreenSize();
  }
  @HostListener('window:resize', ['$event'])
  getScreenSize(event?) {
    this.siteWidth = window.innerWidth;
  }

  get f() {
    return this.form.controls;
  }

  submit() {
    debugger;
    this.mailRegex = new RegExp(this.mailPattern);
    if (this.form.valid) {

      //more code here
      console.log(this.form.value);
      this.subjectNotValid = false;
      this.mailNotValid = false;
      this.bodyNotValid = false;

    }
    else {
      if (this.form.value.mailSubject == "")
        this.subjectNotValid = true;

      if (this.form.value.mailText == "")
        this.mailNotValid = true;
      else{
        if(!this.mailRegex.test(this.form.value.mailText)){
        this.mailNotValid = true;
        }
      }  

      if (this.form.value.mailBody == "")
        this.bodyNotValid = true;
    }

  }

  open(url) {
    window.open(url, '_blank');
  }

  getPage(event) {
    // debugger;
    let pageIndex = event.first / event.rows + 1 // Index of the new page if event.page not defined.
  }

  mouseEnter() {
    this.displayHint = true;
  }
  mouseLeave() {
    this.displayHint = false;
  }




  hidePopup() {
    document.getElementById("popup").style.visibility = 'hidden';
  }
  showPopup() {

    console.log("Getting Started");

    document.getElementById("popup").style.visibility = 'visible';

  }


  radioChange(event: any) {
    // debugger;
    this.adultType = Number(event.value);
    
  }
  GetType(){
    if(this.adultType==1){this.open("https://web.o7therapy.com/#/challenges/matching-tool/adult")}
    if(this.adultType==2){this.open("https://web.o7therapy.com/#/therapists/list/couple")}
    if(this.adultType==3){this.open("https://web.o7therapy.com/#/challenges/matching-tool/child")}
  }

  submitType(){

  }

}
