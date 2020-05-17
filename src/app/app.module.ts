import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {BreadcrumbsComponent} from './shared/breadcrumbs/breadcrumbs.component';
import {LogoComponent} from './shared/logo/logo.component';
import {UserComponent} from './shared/user/user.component';
import {LogOffComponent} from './shared/log-off/log-off.component';
import {CoursesModule} from './courses/courses.module';
import {RouterModule} from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AuthModule} from './auth/auth.module';
import {AuthPageComponent} from './auth/auth-page/auth-page.component';
import {PageNotFoundComponent} from './shared/page-not-found/page-not-found.component';
import {CourseEditPageComponent} from './courses/course-edit-page/course-edit-page.component';
import {AuthGuard} from './core/auth-guard.guard';
import {CoursesPageComponent} from './courses/courses-page/courses-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BreadcrumbsComponent,
    LogoComponent,
    UserComponent,
    LogOffComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    CoursesModule,
    AuthModule,
    RouterModule.forRoot([
      {
        path: '', redirectTo: 'courses', pathMatch: 'full',
      },
      {
        path: 'courses',
        canActivate: [AuthGuard],
        children: [
          {
            path: '', component: CoursesPageComponent,
          },
          {
            path: ':id', component: CourseEditPageComponent,
            data: {
              courseId: ':id',
              test: 'test'
            }
          },
          {
            path: 'new', component: CourseEditPageComponent
          }
        ]
      },
      {
        path: 'login', component: AuthPageComponent
      },
      {
        path: '**', component: PageNotFoundComponent
      },
    ]),
    NgbModule
  ],
  providers: [
    CoursesModule,
    AuthModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
