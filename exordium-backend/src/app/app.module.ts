import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// External
import { RecaptchaModule, RecaptchaFormsModule, RECAPTCHA_SETTINGS, RecaptchaSettings } from 'ng-recaptcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';

import { LoadingBarRouterModule } from '@ngx-loading-bar/router';
import { LoadingBarModule } from '@ngx-loading-bar/core';

// Services
import { AuthconfigInterceptor } from './__services/authconfig.interceptor';

// General Components
import { NotyfToast } from './_components/notyf.toast';

// Directives
import { ScrollbarDirective } from './__directives/perfect-scrollbar.directive';
import { NavbarDirective } from './__directives/navbar.directive';
import { TabDirective } from './__directives/tabs.directive';
import { ThemeSwitchDirective } from './__directives/theme-switch.directive';
import { SidebarsDirective } from './__directives/sidebars.directive';

// Main Component
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// RouterOutlet Components
import { AppAuthModule } from './_pages/auth/app-auth.module';
import { AppAuthComponent } from './_pages/auth/app-auth.component';
import { AppDashboardModule } from './_pages/dashboard/app-dashboard.module';
import { AppDashboardComponent } from './_pages/dashboard/app-dashboard.component';

// Authentication Pages
import { SigninComponent } from './_pages/auth/signin/signin.component';
import { RegisterComponent } from './_pages/auth/register/register.component';
import { ForgottenPassComponent } from './_pages/auth/forgotten-pass/forgotten-pass.component';
import { LockedComponent } from './_pages/auth/locked/locked.component';

// Clients
import { DashboardComponent } from './_pages/dashboard/clients/dashboard/dashboard.component';
import { BlogOverviewComponent } from './_pages/dashboard/clients/blog/blog-overview/blog-overview.component';
import { BlogArticleComponent } from './_pages/dashboard/clients/blog/blog-article/blog-article.component';
import { NetworkStatusComponent } from './_pages/dashboard/clients/network-status/network-status.component';
import { UserConnectionsComponent } from './_pages/dashboard/clients/user/user-connections/user-connections.component';
import { UserLogsComponent } from './_pages/dashboard/clients/user/user-logs/user-logs.component';
import { UserOverviewComponent } from './_pages/dashboard/clients/user/user-overview/user-overview.component';
import { UserSecurityComponent } from './_pages/dashboard/clients/user/user-security/user-security.component';
import { UserSessionsComponent } from './_pages/dashboard/clients/user/user-sessions/user-sessions.component';
import { UserSettingsComponent } from './_pages/dashboard/clients/user/user-settings/user-settings.component';

// Management
import { StaffContactComponent } from './_pages/dashboard/management/support/staff-contact/staff-contact.component';
import { StaffUsersOverviewComponent } from './_pages/dashboard/management/users/staff-users-overview/staff-users-overview.component';
import { StaffUsersEditComponent } from './_pages/dashboard/management/users/staff-users-edit/staff-users-edit.component';
import { StaffUsersDisableComponent } from './_pages/dashboard/management/users/staff-users-disable/staff-users-disable.component';

import { StaffUsersAddComponent } from './_pages/dashboard/management/users/staff-users-add/staff-users-add.component';
import { StaffBlogOverviewComponent } from './_pages/dashboard/management/blogs/staff-blog-overview/staff-blog-overview.component';
import { StaffBlogAddComponent } from './_pages/dashboard/management/blogs/staff-blog-add/staff-blog-add.component';
import { StaffBlogEditComponent } from './_pages/dashboard/management/blogs/staff-blog-edit/staff-blog-edit.component';
import { StaffBlogComponent } from './_pages/dashboard/management/dev/staff-blog/staff-blog.component';


@NgModule({
  declarations: [
    NotyfToast,

    ScrollbarDirective,
    NavbarDirective,
    TabDirective,
    ThemeSwitchDirective,
    SidebarsDirective,

    AppComponent,

    AppAuthComponent,
    AppDashboardComponent,

    SigninComponent,
    RegisterComponent,
    ForgottenPassComponent,
    LockedComponent,

    DashboardComponent,
    BlogOverviewComponent,
    BlogArticleComponent,
    NetworkStatusComponent,

    UserConnectionsComponent,
    UserLogsComponent,
    UserOverviewComponent,
    UserSecurityComponent,
    UserSessionsComponent,
    UserSettingsComponent,

    StaffContactComponent,
    StaffUsersOverviewComponent,
    StaffUsersEditComponent,
    StaffUsersDisableComponent,
    StaffUsersAddComponent,

    StaffBlogOverviewComponent,
    StaffBlogAddComponent,
    StaffBlogEditComponent,
    StaffBlogComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    HttpClientModule,

    FormsModule,
    ReactiveFormsModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    NgbModule,
    CKEditorModule,

    LoadingBarRouterModule,
    LoadingBarModule,

    AppRoutingModule,
    AppAuthModule,
    AppDashboardModule,

    NgxDatatableModule,
    NgSelectModule,
    ToastrModule.forRoot({
      toastComponent: NotyfToast,
      timeOut: 6000,
      positionClass: 'toast-bottom-right'
    }),
  ],
  entryComponents: [
    NotyfToast
  ],
  providers: [
    {
       provide: LocationStrategy,
       useClass: HashLocationStrategy,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthconfigInterceptor,
      multi: true
    },
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: '6LeB5uIUAAAAAMQWnwCUpUHbdsHO4iV4emdn9KOL'
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppModule { }
