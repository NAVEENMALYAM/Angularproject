import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './container/home/home.component';
import { RegisterComponent } from './container/registerform/register.component';
import { ThankyouComponent } from './container/thankyou/thankyou.component';

const routes: Routes = [
  {path:"", component:HomeComponent},
  {path:"register", component:RegisterComponent},
  {path:"thankyou", component:ThankyouComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
