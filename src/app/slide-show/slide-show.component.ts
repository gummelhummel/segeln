import { Component, OnInit } from '@angular/core';
import { Sectionable } from "../section/sectionable";
@Component({
  selector: 'app-slide-show',
  templateUrl: './slide-show.component.html',
  styleUrls: ['./slide-show.component.css']
})
export class SlideShowComponent implements Sectionable {

  data;

  constructor() { }

  setData(data){
    this.data = data;
  }

}
