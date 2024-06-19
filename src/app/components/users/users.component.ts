import { Observable } from 'rxjs';
import { User, UsersService } from '../../services/users.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'inst-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.less',
})
export class UsersComponent implements OnInit {
  constructor(
    private usersService: UsersService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  users$!: Observable<User[]>;

  getUsers(page: number) {
    this.users$ = this.usersService.getUsers(page);
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.getUsers(params['page'] ? Number(params['page']) : 1);
    });
  }

  getNextUsers(): void {
    const page = Number(this.route.snapshot.queryParamMap.get('page'));

    const nextPage = page ? page + 1 : 2;

    this.router.navigate(['/users'], {
      queryParams: { page: nextPage },
    });
  }
}
