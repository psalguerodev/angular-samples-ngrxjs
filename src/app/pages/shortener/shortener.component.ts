import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.styl']
})
export class ShortenerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  processCutUrl() {
    console.log('Shortener!');
  }

}
