import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.styl']
})
export class RepositoriesComponent implements OnInit {

  public users: Array<any> = [];
  public loading: boolean;

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.loading = true;
    this.usersService.mergeMapUsers()
      .pipe(
        finalize(() => {
          this.loading = false;
        })
      )
      .subscribe((result: any) => {
        if (result) {
          this.users.push(result);
          this.users.sort();
        }
      });
  }

}
