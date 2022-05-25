import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Login/Login.component';
import { SubHeaderComponent } from './sub-header/sub-header.component';


const routes: Routes = [
  {path: "signUp",component: LoginComponent},
  {path:  "home", component: SubHeaderComponent},
  {path: '**', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
