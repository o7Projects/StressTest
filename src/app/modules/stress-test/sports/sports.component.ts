import { HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.scss']
})
export class SportsComponent implements OnInit {
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
      fullName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      o7Therapist: ['', [Validators.required]],
      resume: ['', Validators.required]
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

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
  }

  onFileChange(event:any){
    debugger;
    this.selectedFiles = event.target.files;

    this.registerForm.get("resume").setValue(this.selectedFiles[0].name)
    console.log(event);
  }

  upload(): void {
    this.progress = 0;

    if (this.selectedFiles) {
      const file: File | null = this.selectedFiles.item(0);

      if (file) {
        this.currentFile = file;

        // this.uploadService.upload(this.currentFile).subscribe(
        //   (event: any) => {
        //     if (event.type === HttpEventType.UploadProgress) {
        //       this.progress = Math.round(100 * event.loaded / event.total);
        //     } else if (event instanceof HttpResponse) {
        //       this.message = event.body.message;
        //       this.fileInfos = this.uploadService.getFiles();
        //     }
        //   },
        //   (err: any) => {
        //     console.log(err);
        //     this.progress = 0;

        //     if (err.error && err.error.message) {
        //       this.message = err.error.message;
        //     } else {
        //       this.message = 'Could not upload the file!';
        //     }

        //     this.currentFile = undefined;
        //   });

      }

      this.selectedFiles = undefined;
    }
  }
  open(content:any) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title',size: 'lg'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }


  toFormReg() {
    document.getElementById("formReg").scrollIntoView();
  }
  logoClick(){
    window.open( 
      "https://o7therapy.com", "_blank");

  }

}
