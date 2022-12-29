import { Router } from '@angular/router';
import { AuthService } from './../../services/auth.service';
import { Component, OnInit} from '@angular/core';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private _AuthService: AuthService, private _Router: Router,private _ViewportScroller:ViewportScroller) { }

  loggedIn: boolean = false;

  ngOnInit(): void {
    this._AuthService.userData.subscribe({
      next: () => {
        if (this._AuthService.userData.getValue() != null) {
          this.loggedIn = true;
        } else {
          this.loggedIn = false;
        }
      }
    })
    
  }

  logOut() {
    localStorage.removeItem('userToken');
    this._AuthService.userData.next(null);
    this._Router.navigate(['/login']);
  }

}
