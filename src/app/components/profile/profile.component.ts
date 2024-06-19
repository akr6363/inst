import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProfileService } from '../../services/profile.service';
import { ProfileResponse } from '../../services/profile.service';

@Component({
  selector: 'inst-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less',
})
export class ProfileComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private profileService: ProfileService,
    private router: Router
  ) {}

  profile$!: Observable<ProfileResponse>;

  goBack(): void {
    this.router.navigate(['/users']);
  }

  ngOnInit(): void {
    const userId = this.route.snapshot.paramMap.get('userId');
    if (userId) {
      this.profile$ = this.profileService.getProfile(Number(userId));
    }
  }
}
