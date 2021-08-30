import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';
import { HostListener } from "@angular/core";
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';
import { ITherapists } from '../_Models/ITherapists';

@Component({
  selector: 'app-elnada',
  templateUrl: './elnada.component.html',
  styleUrls: ['./elnada.component.scss'],
  // animations: [
  //   trigger('slideInRight', [
  //     transition(':enter', [
  //       style({ transform: 'translateX(50%)' }),
  //       animate('1000ms ease-in', style({ transform: 'translateX(-10%)' }))
  //     ]),
  //   ])
  // ]

  animations: [
    trigger('fade', [ 
      transition('void => *', [
        style({ opacity: 0 }), 
        animate(2000, style({opacity: 0.8}))
      ]) 
    ])
  ]




})
export class ElnadaComponent implements OnInit {

  animation = 0;
  showText = false;
  showSmallText = true;
  mouseAboveAnimated = false;


  // Declare height and width variables
  screenWidth: any;
  screenHeight: any;
  @ViewChild('allPage', { static: false }) allPage: ElementRef<HTMLInputElement>;
  @ViewChild('hiddenSmall', { static: false }) hiddenSmall: ElementRef<HTMLInputElement>;

  therapists: ITherapists[];


  constructor(private renderer: Renderer2) {

    this.therapists = [
      {
        image: "https://web.o7therapy.com:443/api/identity/imgapi/IMG_2021-01-03-13_62529.jpg",
        name: "Dina Zaklama",
        content: "Clinical Psychologist",
        specialist: " A clinical psychologist with experience in marital counseling, depression, anxiety and OCD.",
        salary: 950,
        available: "Available 25 August 11:00 am",
        btnText: "Book",
        isAvailable: true,
        experience: 21
      },
      {
        image: "https://web.o7therapy.com:443/api/identity/imgapi/IMG_2021-01-03-13_15724.jpg",
        name: "Eman Abdalraheem",
        content: "Assistant Lecturer of Psychiatry",
        specialist: " Assistant Lecturer of Psychiatry at Kasr Alainy, Cairo University.",
        salary: 500,
        available: "No Available Slots",
        btnText: "Book",
        isAvailable: false,
        experience: 7
      },
      {
        image: "https://web.o7therapy.com:443/api/identity/imgapi/IMG_2021-01-03-13_31185.jpg",
        name: "Dalia Enaba",
        content: "Professor of Psychiatry",
        specialist: " A Consultant Psychiatrist and Professor in the Psychiatric Department, Cairo University. Working with Adult and Adolescent males and females.",
        salary: 600,
        available: "No Available Slots",
        btnText: "Book",
        isAvailable: false,
        experience: 22
      },
      {
        image: "https://web.o7therapy.com:443/api/identity/imgapi/IMG_2020-03-15-10_30570.jpg",
        name: "Eman Samir",
        content: "Specialist Psychiatrist",
        specialist: " Specialist Psychiatrist with interest in women's rights, refugees rights, and children living in street situations.",
        salary: 750,
        available: "No Available Slots",
        btnText: "Book",
        isAvailable: false,
        experience: 11
      },
    ];


  }


  ngOnInit() {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;


    if (this.screenWidth > 1050) {
      let elemSec1Big: HTMLElement = document.getElementById('sec1Big');
      elemSec1Big.setAttribute("style", "overflow-x:hidden");

    }

    if (this.screenWidth <= 1050) {
      let elemSec1Big: HTMLElement = document.getElementById('MyPage');
      elemSec1Big.setAttribute("style", "background:#5a6967;opacity:0.8");

      let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
      elemSec2Text.setAttribute("style", "color:#3C4342;");

      
    }

  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    if (this.screenWidth > 1050) {
      this.hideItem();
    }

    if (this.screenWidth <= 1050) {

      if (this.showSmallText) {
        let elemSec1Big: HTMLElement = document.getElementById('MyPage');
        elemSec1Big.setAttribute("style", "background:#5a6967;opacity:0.8");

        let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
        elemSec2Text.setAttribute("style", "color:#3C4342;");


      }
      else {
        let elemSec1Big: HTMLElement = document.getElementById('MyPage');
        elemSec1Big.setAttribute("style", "background:none;opacity:1");

        let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
        elemSec2Text.setAttribute("style", "color:#9c9e9d;");



      }

    }
  }

  showItem() {
    this.showText = true;
    // el.setAttribute('style', 'color: white; background: red');

    // this.renderer.setStyle(this.allPage.nativeElement, 'background', '#3C4342');
    // this.renderer.setStyle(this.allPage.nativeElement, 'opacity', '0.5');

    let elemSec1Big: HTMLElement = document.getElementById('MyPage');
    elemSec1Big.setAttribute("style", "background:#3C4342;opacity:0.8");

  }
  hideItem() {
    this.showText = false;
    // this.renderer.setStyle(this.allPage.nativeElement, 'background', 'none');
    // this.renderer.setStyle(this.allPage.nativeElement, 'opacity', '1');

    let elemSec1Big: HTMLElement = document.getElementById('MyPage');
    elemSec1Big.setAttribute("style", "background:none;opacity:1");

  }

  showSmallItem() {
    this.showSmallText = true;

    // this.renderer.setStyle(this.allPage.nativeElement, 'background', '#5a6967');
    // this.renderer.setStyle(this.allPage.nativeElement, 'opacity', '0.5');

    let elemSec1Big: HTMLElement = document.getElementById('MyPage');
    elemSec1Big.setAttribute("style", "background:#5a6967;opacity:0.8");

    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#3C4342;");


  }
  hideSmallItem() {
    this.showSmallText = false;

    // this.renderer.setStyle(this.allPage.nativeElement, 'background', 'none');
    // this.renderer.setStyle(this.allPage.nativeElement, 'opacity', '1');

    let elemSec1Big: HTMLElement = document.getElementById('MyPage');
    elemSec1Big.setAttribute("style", "background:none;opacity:1");

    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#9c9e9d;");

  }

  tooggleSmallItem() {
    this.showSmallText = !this.showSmallText;

    if (this.showSmallText) {
      this.renderer.setStyle(this.allPage.nativeElement, 'background', '#3C4342');
      this.renderer.setStyle(this.allPage.nativeElement, 'opacity', '0.5');
    }
    else {
      this.renderer.setStyle(this.allPage.nativeElement, 'background', 'none');
      this.renderer.setStyle(this.allPage.nativeElement, 'opacity', '1');
    }
  }


  ViewMore() {
    window.open(
      'https://web.o7therapy.com/#/therapists/list/Maternal%20Mental%20Health',
      '_blank' // <- This is what makes it open in a new window.
    );

  }


  yesAnimate() {
    this.showText = true;

    let elemSec1Big: HTMLElement = document.getElementById('sec1Big');
    elemSec1Big.setAttribute("style", "overflow-x:hidden");

  }
  noAnimate() {
    this.showText = false;
    this.animation = 0;

    let elemSec1Big: HTMLElement = document.getElementById('sec1Big');
    elemSec1Big.setAttribute("style", "overflow-x:hidden");

  }




}
