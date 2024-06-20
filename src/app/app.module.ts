import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CredentionalsInterceptor } from './core/interceptors/credentionals.interceptor';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomeModule } from './home/home.module';
import { AuthModule } from './auth/auth.module';
import { ProfileModule } from './profile/profile.module';
import { NotFoundModule } from './not-found/not-found.module';
import { UsersModule } from './users/users.module';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    RouterOutlet,
    HomeModule,
    AuthModule,
    ProfileModule,
    NotFoundModule,
    UsersModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
  ],
  bootstrap: [AppComponent],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: CredentionalsInterceptor, multi: true }],
})
export class AppModule {}
