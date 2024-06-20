import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { ActivatedRouteSnapshot } from '@angular/router';
import { RouterStateSnapshot } from '@angular/router';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
) => {
  const isAuth = inject(AuthService).isAuth;
  const router = inject(Router);

  if (!isAuth) {
    router.navigate(['/login'], {
      queryParams: {
        isAuth: false,
      },
    });
  }

  return isAuth;
};
