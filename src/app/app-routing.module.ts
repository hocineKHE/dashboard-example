import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DefaultComponent} from "./layouts/default/default.component";
import {DashboardComponent} from "./modules/dashboard/dashboard.component";
import {PostComponent} from "./modules/post/post.component";
import {ArticlesComponent} from "./modules/articles/articles.component";

const routes: Routes = [
  {
    path: '',
    component: DefaultComponent,
    children:[{
      path: '',
      component: DashboardComponent
    },
      {
        path: 'posts',
        component: PostComponent
      },
      {
        path: 'articles',
        component: ArticlesComponent
      }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
