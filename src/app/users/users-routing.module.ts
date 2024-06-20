import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersComponent } from './compoments/users/users.component';
import { authGuard } from '../core/guards/auth.guard';

const routes: Routes = [{ path: 'users', component: UsersComponent, canActivate: [authGuard] }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UsersRoutingModule {}
