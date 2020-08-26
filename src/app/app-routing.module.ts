import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndexComponent } from './index/index.component';
import { PostByTagComponent } from './post-by-tag/post-by-tag.component';


const routes: Routes = [
  { path: '', redirectTo: '/index' , pathMatch: 'full'},
  { path: 'index', component: IndexComponent },
  { path: 'postByTag/:tagId', component: PostByTagComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
