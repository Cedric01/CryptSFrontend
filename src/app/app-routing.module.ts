import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AuthButtonComponentComponent } from './auth-button-component/auth-button-component.component';

const routes: Routes = [
  {path: '', component: AuthButtonComponentComponent},
  {path: 'Exchanges', component: AppComponent},
  {path: '**', component: AuthButtonComponentComponent, pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
