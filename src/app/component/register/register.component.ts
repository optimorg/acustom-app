import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/fireauth/auth.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  email : string = '';
  password : string = '';

  constructor(private auth: AuthService) {}

  ngOnInit(): void {
    
  }

  register() {
    if(this.email == '') {
      alert('Email field is empty. Please enter email address.')
    }
    if(this.password == '') {
      alert('Password field is empty. Please enter password.')
    }

    this.auth.register(this.email, this.password);
    this.email = ''
    this.password = ''
  }
  }
