import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  text: string = "";
  options: any = { maxLines: 1000, printMargin: false };

  onChange(code) {
    console.log("new code", code);
  }

}
