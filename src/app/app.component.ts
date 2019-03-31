import { Component, OnInit } from '@angular/core';
import { RxjsService } from './services/rxjs.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
    // this.rxjsService.intervalMethod();
    // this.rxjsService.fromEventMethod();
    // this.rxjsService.mapMethod();
    // this.rxjsService.filterMapMethod();
    // this.rxjsService.forkJoinMethod();
  }

  public openUrlRepo(): void {
    window.open('https://github.com/psalguerodev/ngrxjs', '_blank');
  }

  public nav(path: string): void {
    this.router.navigate([path]);
  }

}
