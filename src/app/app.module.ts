import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';
import { PostByTagComponent } from './post-by-tag/post-by-tag.component';
import { UserListComponent } from './user-list/user-list.component'; 

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    UserProfileComponent,
    NavbarComponent,
    PostByTagComponent,
    UserListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
