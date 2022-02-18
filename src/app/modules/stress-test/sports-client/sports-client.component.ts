import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';
import { WhiteSpaceValidator } from 'src/app/whitespace.validator';

@Component({
  selector: 'app-sports-client',
  templateUrl: './sports-client.component.html',
  styleUrls: ['./sports-client.component.scss']
})
export class SportsClientComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  isSuccess:boolean = false;
  currentWidth = window.innerWidth;
  closeResult: string = '';
  selectedFiles?: FileList;
  currentFile?: File;
  progress = 0;
  message = '';
  fileInfos?: Observable<any>;

  constructor(private formBuilder: FormBuilder,private modalService: NgbModal) { }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.currentWidth = event.target.innerWidth;
  }
  ngOnInit() {

    this.registerForm = this.formBuilder.group({
      fullName: ['', [Validators.required, WhiteSpaceValidator.noWhiteSpace]],
      email: ['', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"), WhiteSpaceValidator.noWhiteSpace]],
      orgName: [''],
      title: ['', [Validators.required, WhiteSpaceValidator.noWhiteSpace]],
      phone: ['', [Validators.required,Validators.pattern("^(0|[1-9][0-9]*)$"), WhiteSpaceValidator.noWhiteSpace]],
      info: ['', [Validators.required, WhiteSpaceValidator.noWhiteSpace]],
      msg: [''],

    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.registerForm.controls; }
  
  onReset() {
    this.submitted = false;
    this.registerForm.reset();
  }

  onSubmit() {
    debugger;
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
      return;
    }

    // if success submit form must set (isSuccess = true)
    this.isSuccess = true;
    this.resetForm();
    // display form values on success
    // alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  resetForm(){

    this.registerForm.get("fullName").setValue("");
    this.registerForm.get("email").setValue("");
    this.registerForm.get("orgName").setValue("");
    this.registerForm.get("title").setValue("");
    this.registerForm.get("info").setValue("");
    this.registerForm.get("phone").setValue("");
    this.registerForm.get("msg").setValue("");

    this.submitted=false;

  }


  toFormReg() {
    document.getElementById("formReg").scrollIntoView();
  }
  
  toAbtInf() {
    document.getElementById("secondSec").scrollIntoView();
  }

  redirectClick(){
    window.open( 
      "https://web.o7therapy.com/#/o7/Sportspsychologytraining", "_blank");
  }

  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'xl'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    this.isSuccess = false;
    // this.submitted = false;
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
