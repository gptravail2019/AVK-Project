import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
user ={
  email : "test@test.com",
  password:"test"
}
  constructor(private router: Router,) {

   }

  ngOnInit() {
    console.log(localStorage);
  }

  Login(formLogin){

    if (formLogin.value.email ==this.user.email && formLogin.value.password ==this.user.password) {
      localStorage.setItem('currentUser', JSON.stringify(this.user));
      this.router.navigate(['/dashboard']);
    }
  }

}
