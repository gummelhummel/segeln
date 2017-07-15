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
        slides: [
          {
            image: 'https://lorempixel.com/900/500?r=1',
            title: "Tag 1: Raue See",
            text: "Bei schlechtem Wetter und rauer See..."
          }, {
            image: 'https://lorempixel.com/900/500?r=2',
            title: "Tag 2: Leck im Boot",
            text: "Das starke Unwetter hat seine Schäden hinterlassen..."
          }, {
            image: 'https://lorempixel.com/900/500?r=3',
            title: "Tag 3: Boot gesunken",
            text: "Die Crew konnte mit der Situation nicht umgehen und..."
          }
        ],
        height: '100vh'
      }

    },
    {
      type: 'TextComponent',
      data: {
        title: "TextComponent Title",
        text: "Gaaaannzz viel Text..........",
        height: "80vh"
      }
    },
    {
      type: 'SlideShowComponent',
      data: {
        slides: [
          {
            image: 'https://lorempixel.com/900/500?r=4',
            title: "Titel 1",
            text: "Text 1"
          }, {
            image: 'https://lorempixel.com/900/500?r=5',
            title: "Titel 2",
            text: "Text 2"
          }, {
            image: 'https://lorempixel.com/900/500?r=6',
            title: "Titel 3",
            text: "Text 3"
          }
        ],
        height: '150vh'
      }

    },
    {
      type: 'SlideShowComponent',
      data: {
        slides: [
          {
            image: 'https://lorempixel.com/900/500?r=4',
            title: "Titel 1",
            text: "Text 1"
          }, {
            image: 'https://lorempixel.com/900/500?r=5',
            title: "Titel 2",
            text: "Text 2"
          }, {
            image: 'https://lorempixel.com/900/500?r=6',
            title: "Titel 3",
            text: "Text 3"
          }
        ],
        height: '80vh'
      }

    }
  ]
}
