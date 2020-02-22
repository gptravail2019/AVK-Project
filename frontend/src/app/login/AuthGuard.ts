import { Router,CanActivate} from '@angular/router';
//import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';



@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate{


  constructor(private router : Router){
    }
    canActivate(){
      const currentUser = JSON.parse(localStorage.getItem('currentUser'));

        if(currentUser){


return true;
      }
      this.router.navigate(['/login']);
      //,{queryParams: {returnUrl: state.url}}
      return false;
    }

}
