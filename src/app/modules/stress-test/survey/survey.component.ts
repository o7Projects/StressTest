import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UserInfo } from 'src/app/common/models/userInfo';
import { StressTestService } from 'src/app/services/stress-test/stress-test.service';


@Component({
  selector: 'app-survey',
  templateUrl: './survey.component.html',
  styleUrls: ['./survey.component.css']
})
export class SurveyComponent implements OnInit {



  @Output() ScoreView: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ScoreValue: EventEmitter<Number> = new EventEmitter<Number>();

  current = 1;
  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;
  sixthFormGroup: FormGroup;
  seventhFormGroup: FormGroup;
  eighthFormGroup: FormGroup;
  ninthFormGroup: FormGroup;
  tenthFormGroup: FormGroup;

  totalScore = 0;
  userGender = 0;
  userAge = 0;
  constructor(private _formBuilder: FormBuilder,private StressTestService:StressTestService) {
    this.userGender = Number(localStorage.getItem("genderValue"));
    this.userAge = Number(localStorage.getItem("ageValue"));

  }

  ngOnInit() {

    this.next(this.current);

    this.firstFormGroup = this._formBuilder.group({
      question1: new FormControl('', [Validators.required]),
    });
    this.secondFormGroup = this._formBuilder.group({
      question2: new FormControl('', [Validators.required]),
    });

    this.thirdFormGroup = this._formBuilder.group({
      question3: new FormControl('', [Validators.required]),
    });
    this.fourthFormGroup = this._formBuilder.group({
      question4: new FormControl('', [Validators.required]),
    });

    this.fifthFormGroup = this._formBuilder.group({
      question5: new FormControl('', [Validators.required]),
    });
    this.sixthFormGroup = this._formBuilder.group({
      question6: new FormControl('', [Validators.required]),
    });

    this.seventhFormGroup = this._formBuilder.group({
      question7: new FormControl('', [Validators.required]),
    });
    this.eighthFormGroup = this._formBuilder.group({
      question8: new FormControl('', [Validators.required]),
    });

    this.ninthFormGroup = this._formBuilder.group({
      question9: new FormControl('', [Validators.required]),
    });
    this.tenthFormGroup = this._formBuilder.group({
      question10: new FormControl('', [Validators.required]),
    });

  }

  next(index) {
    this.current = index;


    for (let i = 1; i <= 10; i++) {
      let id = 'step' + i;
      var doc = document.getElementById(id);

      if (i <= index) {

        if (!doc.className.includes("addGreen")) {
          doc.classList.remove("noneGreen");

          doc.className += " addGreen";
        }
      }
      else {
        doc.classList.remove("addGreen");

        if (!doc.className.includes("noneGreen"))
          doc.className += " noneGreen";


      }
    }






  }

  calculateScore() {


    



    this.totalScore += Number(this.firstFormGroup.value.question1) + Number(this.secondFormGroup.value.question2) + Number(this.thirdFormGroup.value.question3) + Number(this.fourthFormGroup.value.question4) +
      Number(this.fifthFormGroup.value.question5) + Number(this.sixthFormGroup.value.question6) + Number(this.seventhFormGroup.value.question7) + Number(this.eighthFormGroup.value.question8) + Number(this.ninthFormGroup.value.question9) + Number(this.tenthFormGroup.value.question10);

    // this.totalScore +=this.userGender;
    localStorage.setItem('totalScore', this.totalScore.toString());

    const obj = new UserInfo();
    obj["age"] = this.userAge;
    obj["gender"] = this.userGender;
    obj["pass_1"] = Number(this.firstFormGroup.value.question1);
    obj["pass_2"] = Number(this.secondFormGroup.value.question2);
    obj["pass_3"] = Number(this.thirdFormGroup.value.question3);
    obj["pass_4"] = Number(this.fourthFormGroup.value.question4);
    obj["pass_5"] = Number(this.fifthFormGroup.value.question5);
    obj["pass_6"] = Number(this.sixthFormGroup.value.question6);
    obj["pass_7"] = Number(this.seventhFormGroup.value.question7);
    obj["pass_8"] = Number(this.eighthFormGroup.value.question8);
    obj["pass_9"] = Number(this.ninthFormGroup.value.question9);
    obj["pass_10"] = Number(this.tenthFormGroup.value.question10);
    obj["score"] = this.totalScore;
    obj["category_id"] = 0;

    this.StressTestService.Create('http://104.42.35.134:8080/api/sessions/stresstest/v1',obj,'application/json');
   
    this.ScoreValue.emit(this.totalScore);
    this.ScoreView.emit(true);

  }
}
