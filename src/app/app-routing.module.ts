import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {DetailComponent} from './detail/detail.component';
import {AddReviewComponent} from './add-review/add-review.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
const routes: Routes = [
{
	path:'login',
	component:LoginComponent
},
{
	path:'main',
	component:MainComponent
},
{
	path:'detail/:id',
	component:DetailComponent
},
{
	path:'add-review/:id',
	component:AddReviewComponent
},
{
	path:'**',
	component:PageNotFoundComponent
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
