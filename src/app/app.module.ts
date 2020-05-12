import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { LogoComponent } from './shared/logo/logo.component';
import { UserComponent } from './shared/user/user.component';
import { LogOffComponent } from './shared/log-off/log-off.component';
import { CoursesModule } from './courses/courses.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AuthModule} from './auth/auth.module';
import {CoursesPageComponent} from './courses/courses-page/courses-page.component';
import {AuthPageComponent} from './auth/auth-page/auth-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    UserComponent,
    LogOffComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    AuthModule,
    RouterModule.forRoot([
      {
        path: '', component: CoursesPageComponent
      },
      {
        path: 'login', component: AuthPageComponent
      }
    ]),
    NgbModule
  ],
  providers: [
    CoursesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
