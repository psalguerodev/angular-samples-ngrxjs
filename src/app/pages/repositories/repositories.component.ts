import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-repositories',
  templateUrl: './repositories.component.html',
  styleUrls: ['./repositories.component.styl']
})
export class RepositoriesComponent implements OnInit {

  public users: Array<any> = [];

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.mergeMapUsers().subscribe((result: any) => {
      if (result) {
        this.users.push(result);
      }
    });
  }

}
