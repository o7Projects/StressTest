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
        animate(1000, style({ opacity: 0.8 }))
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
      let elem: HTMLElement = document.getElementById('sec1Big');
      elem.setAttribute("style", "overflow-x:hidden");

    }

    if (this.screenWidth <= 1050) {
      let elem: HTMLElement = document.getElementById('MyPage');
      elem.setAttribute("style", "background:#3C4342;opacity:0.6");
  
      let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
      elemSec2Text.setAttribute("style", "color:#000000;font-weight: bold");
  

    }

  }


  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.screenWidth = window.innerWidth;
    this.screenHeight = window.innerHeight;

    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#9c9e9d;font-weight: normal;margin-bottom: 30px; margin-right: 15px; margin-left: 15px;");

    if (this.screenWidth > 1050) {
      let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
      elemSec2Text.setAttribute("style", "color:#9c9e9d;font-weight: normal;margin-bottom: 30px; margin-right: 15px; margin-left: 15px;");
  
      this.hideItem();
    }

    if (this.screenWidth <= 1050) {

      if (this.showSmallText) {
        this.showSmallItem();

      }
      else {
        this.hideSmallItem();
      }

    }
  }


  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll(event) {
    this.hideSmallItem();
  }

  showItem() {
    this.showText = true;
    // this.renderer.setStyle(this.allPage.nativeElement, 'background', '#3C4342');
    let elem: HTMLElement = document.getElementById('MyPage');
    elem.setAttribute("style", "background:#3C4342;opacity:0.8");

    
    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#9c9e9d;font-weight: normal;margin-bottom: 30px; margin-right: 15px; margin-left: 15px;");



  }
  hideItem() {
    this.showText = false;

    let elem: HTMLElement = document.getElementById('MyPage');
    elem.setAttribute("style", "background:none;opacity:1");

    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#9c9e9d;font-weight: normal;margin-bottom: 30px; margin-right: 15px; margin-left: 15px;");

  }

  showSmallItem() {
    this.showSmallText = true;

    let elem: HTMLElement = document.getElementById('MyPage');
    elem.setAttribute("style", "background:#3C4342;opacity:0.6");

    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#000000;font-weight: bold;margin-bottom: 30px; margin-right: 15px; margin-left: 15px;");

    let elemSec1Head: HTMLElement = document.getElementById('section1Head');
    elemSec1Head.setAttribute("style", "color:#000000;");

    let elemSec1Title: HTMLElement = document.getElementById('section1Title');
    elemSec1Title.setAttribute("style", "color:#000000;font-weight: bold");



  }
  hideSmallItem() {
    this.showSmallText = false;

    let elem: HTMLElement = document.getElementById('MyPage');
    elem.setAttribute("style", "background:none;opacity:1");

    let elemSec2Text: HTMLElement = document.getElementById('sec2Text');
    elemSec2Text.setAttribute("style", "color:#9c9e9d;font-weight: normal;margin-bottom: 30px; margin-right: 15px; margin-left: 15px;");

    let elemSec1Head: HTMLElement = document.getElementById('section1Head');
    elemSec1Head.setAttribute("style", "color:#3C4342;");


    let elemSec1Title: HTMLElement = document.getElementById('section1Title');
    elemSec1Title.setAttribute("style", "color:#3C4342;font-weight: normal");


  }


  ViewMore() {
    window.open(
      'https://web.o7therapy.com/#/therapists/list/Maternal%20Mental%20Health',
      '_blank' // <- This is what makes it open in a new window.
    );

  }


  yesAnimate() {
    this.showText = true;

    // let elem: HTMLElement = document.getElementById('sec1Big');
    // elem.setAttribute("style", "overflow-x:hidden");

  }
  noAnimate() {
    this.showText = false;
    this.animation = 0;

    // let elem: HTMLElement = document.getElementById('sec1Big');
    // elem.setAttribute("style", "overflow-x:hidden");

  }




}
