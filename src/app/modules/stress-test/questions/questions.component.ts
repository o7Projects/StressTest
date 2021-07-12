import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss']
})
export class QuestionsComponent implements OnInit {


  viewIntro: boolean;
  viewSurvey: boolean;
  viewScore: boolean;


  userAge:Number;
  userGender:Number;
  userScore:Number;

  constructor() { }

  ngOnInit(): void {
    this.viewIntro = true;
    this.viewSurvey = false;
    this.viewScore = false;

  }
  displayIntro(e){
    this.viewIntro = e;
    this.viewSurvey = ! e;
  }

  
  setAge(e){
    this.userAge = e;
    localStorage.setItem("ageValue",this.userAge.toString());

  }

  
  setGender(e){
    this.userGender = e;
    localStorage.setItem("genderValue",this.userGender.toString());
  }


  displayScore(e){
    this.viewScore = e;
    this.viewSurvey = ! e;
  }

  
  setScore(e){
    this.userScore = e;
  }

  ResetView(e){
    this.viewScore = !e;
    this.viewIntro = e;
  }
}
