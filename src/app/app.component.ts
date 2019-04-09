import { Component, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { Angulartics2GoogleAnalytics } from 'angulartics2/ga';
import { Angulartics2 } from 'angulartics2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

@Injectable()
export class AppComponent {
  constructor(private http : HttpClient, angulartics2GoogleAnalytics: Angulartics2GoogleAnalytics, private angulartics2: Angulartics2) {
    angulartics2GoogleAnalytics.startTracking();
    this.angulartics2.eventTrack.next({
      action: 'pageview'
    });
  }

  emailAddress : string;
  showForm = true;
  showError = false;
  errorMessage : string;

  public onSubmit() {
    var mcUrl = "https://synersteel.us10.list-manage.com/subscribe/post-json?u=3c4255b0f2add1624ed41ab37&id=53531987d9&EMAIL="
      + this.emailAddress;

    this.showError = false;

    this.http.jsonp(mcUrl, "c")
      .subscribe(response => {
        if(response['result'] == "error") {
          this.showError = true;
          this.errorMessage = "The following error occurred while signing up: " + response['msg'];
        } else if(response['result'] == 'success') {
          this.showForm = false;
        }
      }, error => {
        this.showError = true;
        this.errorMessage = "Please try again or contact us directly at contact@synersteel.com";
      });

    return false;
  }
}