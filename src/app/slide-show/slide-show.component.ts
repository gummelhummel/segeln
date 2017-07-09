import { Component, OnInit } from '@angular/core';
import { Template } from "../template";
@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements Template {

  public data;

  constructor() { }

  ngOnInit() {
    console.log(this.data)
  }

}
