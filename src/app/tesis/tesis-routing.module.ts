import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApiComponent } from './pages/api/api.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { InfoPageComponent } from './pages/info-page/info-page.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'info', component: InfoPageComponent },
      { path: 'api', component: ApiComponent },
      { path: 'contact', component: ContactComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TesisRoutingModule { }
