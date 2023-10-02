import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth : AngularFireAuth, private router : Router) { }

  //login method
  login(email : string, password : string) {
    this.fireAuth.signInWithEmailAndPassword(email, password).then( () => {
        localStorage.setItem('token','true');
        this.router.navigate(['dashboard']);
    }, err => {
        alert(err.message);
        this.router.navigate(['/login']);
    })//end of then
  }//end of login method

  //register method
  register(email: string, password : string) {
    this.fireAuth.createUserWithEmailAndPassword(email, password).then( () => {
      alert('Registration successful');
      this.router.navigate(['/login']);  
    }, err => {
        alert(err.message);
        this.router.navigate(['/register']);
    })//end of then
  }//end of register method
}//end of Auth Service
