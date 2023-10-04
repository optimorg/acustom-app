import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/services/fireauth/auth.service'; 
@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  constructor(private auth: AuthService, private router: Router) {}
  ngOnInit(): void {
    
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('token');
    alert('Logged out successfully');
    this.router.navigate(['/login']);
  }
}
