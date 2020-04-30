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
import {RouterModule} from '@angular/router';

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
    RouterModule.forRoot([
      {
        path: '', component: CoursesModule
      },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
