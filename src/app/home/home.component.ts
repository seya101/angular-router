import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  hideBtn = null;

  constructor(
    private router: Router,
    private authService: AuthService

  ) { }

  ngOnInit() {
  }

  onLoadServerPage(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'], 
      {queryParams: {allowEdit: '1'}, 
      fragment: 'loading'
      });
  }

  onLogin() {
    this.authService.login();
    this.hideBtn = this.authService.loggedIn;

  }

  onLogout() {
    this.authService.logout();
    this.hideBtn = this.authService.loggedIn;
  }

}
