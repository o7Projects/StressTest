import { Component, ElementRef, EventEmitter, HostListener, Input, OnInit, Output, ViewChild } from '@angular/core';
import { throwMatDialogContentAlreadyAttachedError } from '@angular/material';
import { Router } from '@angular/router';
import * as htmlToImage from 'html-to-image';
import { Observable, Subscription } from 'rxjs';
import { UserInfo } from 'src/app/common/models/userInfo';
import { StressTestService } from 'src/app/services/stress-test/stress-test.service';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss']
})
export class ScoreComponent implements OnInit {
  @Output() ResetView: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Input() finalScore: Number;
  scoreText: any = "";
  scoreDetails1: any = "";
  scoreDetails2: any = "";
  resBtnText: any = "";

  score: Number;
  key = 'totalScore';
  className: any;
  imgCapture: any;
  displayShareIcons = false;

  shareTitle: any = "My Stress Score In o7therapy";
  shareImage: any = "https://media.gemini.media/img/yallakora/Normal//2020/8/22/untitled-12020_8_22_21_22.jpg";
  shareURL: any = "https://o7therapy.com/stress-test-questions/";
  // shareURL: any = location.origin + "/intro";
  shareText: any;

  textToShare: any;


  resizeObservable$: Observable<Event>
  resizeSubscription$: Subscription


  @ViewChild('myIdentifier',{static:false})
  myIdentifier: ElementRef;

  @ViewChild('myMeter',{static:false})
  myMeter: ElementRef;

  @ViewChild('myMeterBelow',{static:false})
  myMeterBelow: ElementRef;

 UserInfo:UserInfo;

  constructor(private route: Router) {

    this.score = Number(localStorage.getItem(this.key));
    localStorage.removeItem(this.key);

    this.imgCapture = new Image();
  }

  ngOnInit(): void {


    if (this.score >= 0 && this.score <= 13) {
      this.scoreText = "Low Stress";
      this.className = "LowColor";
      this.scoreDetails1 = "Look at you managing your stress! Keep it up. It has been a stressful time around the world, and you’ve been able to keep your stress at bay.";
      this.scoreDetails2 = "Experiencing some levels of stress can actually be useful! It has been shown to enhance motivation, build resilience and can be part of having a meaningful life.";
      this.resBtnText = "Learn More";
    }
    if (this.score >= 14 && this.score <= 26) {
      this.scoreText = "Moderate Stress";
      this.className = "MedColor";
      this.scoreDetails1 = "We all experience day-to-day stressors, especially throughout the challenges of the past year. You may be having trouble with work, family-related challenges, and thus experiencing symptoms of stress like lack of focus and sleep, irritability, and changes in appetite.";
      this.scoreDetails2 = "Experiencing some levels of stress can actually be useful! It has been shown to enhance motivation, build resilience and can be part of having a meaningful life. However, if your stress has left you feeling exhausted, unable to be productive, or restless, try our Destress Program and learn ways to better manage your stress in just 4 sessions.";
      this.resBtnText = "Destress Program";

    }
    if (this.score >= 27 && this.score <= 37) {
      this.scoreText = "High Stress";
      this.className = "highColor";
      this.scoreDetails1 = "You might be feeling extreme lack of focus, exhaustion, agitation, changes in appetite, difficulty breathing, headaches or frequent upset stomach, along with potentially feeling a general sense of malaise.";
      this.scoreDetails2 = "We all reach moments in life where we need professional care. Our therapists are equipped to listen, empathize, and guide you through your stress, and on your journey to wellness.";
      this.resBtnText = "View Therapists";

    }

    if (this.score >= 38) {
      this.scoreText = "Very High Stress";
      this.className = "highColor";
      this.scoreDetails1 = "You might be feeling extreme lack of focus, exhaustion, agitation, changes in appetite, difficulty breathing, headaches or frequent upset stomach, along with potentially feeling a general sense of malaise.";
      this.scoreDetails2 = "We all reach moments in life where we need professional care. Our therapists are equipped to listen, empathize, and guide you through your stress, and on your journey to wellness.";
      this.resBtnText = "View Therapists";

    }



  }

  ngAfterViewInit() {
    // debugger;
    var Divwidth = this.myIdentifier.nativeElement.offsetWidth;
    var Meterwidth = 260;

    if (window.innerWidth <= 335)
      Meterwidth = 160;

    var DivLeft = this.myIdentifier.nativeElement.offsetLeft;

    let val = this.score;
    if (this.score > 40) {
      val = 40;
    }

    let position = (Divwidth / 2) - (Meterwidth / 2) - DivLeft + ((Number(val) / 40) * Meterwidth)
    // this.myMeterBelow.nativeElement.style.left=position+"px";


    document.getElementById('myMeterBelowImg').style.left = (position) + "px";

    if (this.score >= 0 && this.score < 10)
      document.getElementById('scoreValue').style.left = (position + 19) + "px";
    else
      document.getElementById('scoreValue').style.left = (position + 13) + "px";

  }





  Reset() {
    // this.ResetView.emit(true);

    let url = "";
    if (this.score >= 0 && this.score <= 13) {
      url = "https://o7therapy.com/discover/ ";
    }
    if (this.score >= 14 && this.score <= 26) {
      url = "https://o7therapy.com/stress-management-program/ ";
    }
    if (this.score >= 27 && this.score <= 38) {
      url = "https://web.o7therapy.com/#/therapists/list/Anxiety";
    }
    if (this.score >= 39) {
      url = "https://web.o7therapy.com/#/therapists/list/Anxiety ";
    }

    window.open(url, "_blank");

    // this.route.navigate(['/home']);

  }

  share() {
    // debugger;

    // this.textToShare = "Just%20took%20the%20O7%20Therapy%20Stress%20Test,%20and%20I'm%20" + this.scoreText.toString() + "%20with%20a%20score%20of%20" + this.score.toString() + "/40.%20Check%20out%20your%20stress%20levels!"
    this.textToShare = "I%20just%20took%20the%20O7%20Therapy%20Stress%20Test,%20and%20I'm%20experiencing%20"+this.scoreText.toString()+"%20with%20a%20score%20of%20"+this.score.toString()+"/40.%20Check%20out%20your%20stress%20levels!";

    var node = document.getElementById('contentShare');
    var img2 = new Image();

    htmlToImage.toPng(node)
      .then(function (dataUrl) {

        img2.src = dataUrl;

        // document.body.appendChild(img2);

      })
      .catch(function (error) {
        console.error('oops, something went wrong!', error);
      });

    this.imgCapture = img2;
    this.displayShareIcons = true;
  }

  socialFace() {

    let baseurl = this.shareURL;
    let url = "https://www.facebook.com/sharer/sharer.php?u=" + baseurl + "&quote=" + this.textToShare;
    window.open(url, '_blank');

  }

  socialTwitter() {

    let baseurl = this.shareURL;
    let url = "https://twitter.com/intent/tweet?text=" + this.textToShare + "&url=" + baseurl;
    window.open(url, '_blank');

  }

  socialWhatsup() {

    let baseurl = this.shareURL;


    var Divwidth = document.getElementById("contentShare").offsetWidth;
    if (Divwidth < 700) {
      let url = "https://wa.me?text=" + this.textToShare + "...%20use%20this%20link%20for%20exam%3A" + baseurl;
      window.open(url, '_blank');
    }
    else {
      let url = "https://web.whatsapp.com/send?text=" + this.textToShare + "%20...%20use%20this%20link%20for%20exam%3A" + baseurl;
      window.open(url, '_blank');
    }

  }

  socialTelegram() {

    let baseurl = this.shareURL;

    var Divwidth = document.getElementById("contentShare").offsetWidth;
    if (Divwidth < 700) {
      let url = "https://t.me/share/url?url=" + baseurl + "&text=" + this.textToShare;
      window.open(url, '_blank');
    }
    else {
      // let url = "https://web.telegram.org/k/?url=" + baseurl+"&text=" + this.textToShare;
      let url = "https://web.telegram.org/k?url=" + baseurl + "&text=" + this.textToShare;

      window.open(url, '_blank');
    }


  }

}
