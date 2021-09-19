import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListTodosComponent } from './list-todos/list-todos.component';
import { LoginpageComponent } from './loginpage/loginpage.component';
import { LogoutComponent } from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { RouteGaurdService } from './service/route-gaurd.service';
const routes: Routes = [

{ path:'' , component: LoginpageComponent},
{ path:'login' , component: LoginpageComponent} ,
{path:'welcome/:name',component: WelcomeComponent,canActivate:[RouteGaurdService]},
{ path:'todos' , component: ListTodosComponent,canActivate:[RouteGaurdService]},
{ path:'logout' , component: LogoutComponent,canActivate:[RouteGaurdService]},
{path:'**',component: ErrorComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
