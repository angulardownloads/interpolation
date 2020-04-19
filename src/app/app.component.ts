import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  public siteurl =window.location.href;
  greetname(){
    return "Welcome to htmlconversions.com"
  }
}
