import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { tap } from "rxjs/operators";

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  styleUrls: ['./intro.component.scss']
})
export class IntroComponent implements OnInit {

  // @ViewChild('screen', { static: true }) screen: any;


  form: FormGroup;
  submitted = false;
  img = "";
  ageNotValid = false;
  genderNotValid = false;


  @Output() IntroView: EventEmitter<boolean> = new EventEmitter<boolean>();
  @Output() ageValue: EventEmitter<Number> = new EventEmitter<Number>();
  @Output() genderValue: EventEmitter<Number> = new EventEmitter<Number>();

  constructor(private formBuilder: FormBuilder) { }


  ngOnInit() {
    this.form = new FormGroup({
      age: new FormControl('', [Validators.required, Validators.min(1), Validators.max(100), Validators.pattern("^[0-9]*$")]),
      gender: new FormControl('', [Validators.required]),

    });
  }


  get f() {
    return this.form.controls;
  }


  radioChange(event: any) {
    this.genderNotValid = false;
  }


  submit() {

    if (this.form.valid) {

      //more code here
      console.log(this.form.value);
      this.ageNotValid = false;
      this.genderNotValid = false;


      this.IntroView.emit(false);
      this.ageValue.emit(Number(this.form.value.age));
      this.genderValue.emit(Number(this.form.value.gender));
    }

    else {
      if (this.form.value.age == "")
        this.ageNotValid = true;
      else if (Number(this.form.value.age)) {
        if (Number(this.form.value.age) < 0 || Number(this.form.value.age) > 100) {
          this.ageNotValid = true;

        }
        else
          this.ageNotValid = false;
      }
      else {
        this.ageNotValid = true;
      }
      // else
      //   this.ageNotValid = false;

      if (this.form.value.gender == "")
        this.genderNotValid = true;
      else
        this.genderNotValid = false;


    }


  }



}
