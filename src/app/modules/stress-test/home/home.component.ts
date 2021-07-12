import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private route: Router) {
  }

  ngOnInit(): void {
    console.log(location.origin);


  }

  navigate(){
    // this.route.navigate(['/home']);

    window.location.href = "https://o7therapy.com/";
  }
  
  testStart() {
    this.route.navigate(['stresstest/intro']);
    // this.route.navigate(['/user_invitation'],
    //   { queryParams: { email: loginEmail, code: userCode } });
  }
}
