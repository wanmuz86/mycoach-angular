import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {DetailComponent} from './detail/detail.component';
import {AddReviewComponent} from './add-review/add-review.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import {AuthGuardGuard as AuthGuard} from './auth-guard.guard'

const routes: Routes = [
{
	path:'login',
	component:LoginComponent
},
{
	path:'main',
	component:MainComponent,
	canActivate:[AuthGuard]
},
{
	path:'detail/:id',
	component:DetailComponent,
	canActivate:[AuthGuard]

},
{
	path:'add-review/:id',
	component:AddReviewComponent,
	canActivate:[AuthGuard]
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
