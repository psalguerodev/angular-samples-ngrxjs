import { Component, OnInit } from '@angular/core';
import { RxjsService } from './services/rxjs.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor() {}

  ngOnInit() {
    // this.rxjsService.intervalMethod();
    // this.rxjsService.fromEventMethod();
    // this.rxjsService.mapMethod();
    // this.rxjsService.filterMapMethod();
    // this.rxjsService.forkJoinMethod();
  }

}
