import { Component, OnInit } from '@angular/core';
import { Sectionable } from '../section/sectionable';

@Component({
  selector: 'app-text',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.css']
})
export class TextComponent implements Sectionable {

  data;

  constructor() { }

  setData(data){
    this.data = data;
  }

}
