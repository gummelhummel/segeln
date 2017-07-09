import { Component } from '@angular/core';
import { SlideShowComponent } from './slide-show/slide-show.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionData = ["red", "green", "blue", "yellow"];

  get Type(){
    return SlideShowComponent;
  }

  data = [
    {
      type: 'SlideShowComponent',
      data: {
        images: ['red', 'blue', 'green']
      }

    },
    {
      type: 'picture',
      data: {
        url: 'google.de'
      }

    },
    {
      type: 'text',
      data: {
        text: 'bla bla bla'
      }
    }
  ]
}
