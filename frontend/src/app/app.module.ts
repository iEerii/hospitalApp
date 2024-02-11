import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { AppRoutingModule } from './app-routing.module';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { BreadcrumbsComponent } from './shared/breadcrumbs/breadcrumbs.component';
import { PagesComponent } from './pages/pages.component';
import { AuthModule } from './auth/auth.module';
import { PagesModule } from './pages/pages.module';
import { NopagefoundComponent } from './nopagefound/nopagefound.component';

@NgModule({
  declarations: [
    AppComponent,
    BreadcrumbsComponent,
    SidebarComponent,
    HeaderComponent,
    PagesComponent,
    NopagefoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PagesModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
