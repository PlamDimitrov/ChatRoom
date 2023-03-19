import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router, RouterEvent } from '@angular/router';
import { filter } from 'rxjs';


@Component({
  selector: 'app-login-register-header',
  templateUrl: './login-register-header.component.html',
  styleUrls: ['./login-register-header.component.scss']
})
export class LoginRegisterHeaderComponent implements OnInit {
  routerEvent: any;
  currentUrl: String = "";
  switchTo: String = "/register";
  switchToTitle: String = "REGISTER";
  title: String = "LOGIN";

  constructor(public router: Router) {

    this.routerEvent = router.events.pipe(
      filter((e: any): e is NavigationEnd => e instanceof NavigationEnd)
    );
  }

  switchToRoute(route: String) {
    if (route.includes("login")) {
      this.switchTo = "/register";
      this.switchToTitle = "SIGN UP";
      this.title = "SIGN IN";
    } else if (route.includes("register")) {
      this.switchTo = "/login";
      this.switchToTitle = "SIGN IN";
      this.title = "SIGN UP";
    }
  }

  ngOnInit(): void {
    this.currentUrl = this.router.url;
    this.routerEvent.subscribe(
      (data: any) => {
        this.currentUrl = data.url;
        this.switchToRoute(this.currentUrl);
      }
    );
    this.switchToRoute(this.currentUrl);
  }
}


