import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PostByTagComponent } from './post-by-tag/post-by-tag.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserListComponent } from './user-list/user-list.component';


const routes: Routes = [
  { path: '', redirectTo: '/index' , pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'postByTag/:tag', component: PostByTagComponent },
  { path: 'userPrf/:id', component: UserProfileComponent},
  { path: 'allUser', component: UserListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
