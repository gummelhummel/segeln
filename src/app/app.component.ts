import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  sectionData = ["red", "green", "blue", "yellow"];

  data = [
    {
      type: 'SlideShowComponent',
      data: {
        images: ['red'],
        height: '150vh'
      }

    },
    {
      type: 'TextComponent',
      data: {
        text: 'bla bla bla'
      }
    },
    {
      type: 'SlideShowComponent',
      data: {
        images: ['green'],
        height: '80vh'
      }

    },
    {
      type: 'SlideShowComponent',
      data: {
        images: ['blue']
      }

    }
  ]
}
