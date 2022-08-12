import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'tesis',
    loadChildren: () => import('./tesis/tesis.module').then(m => m.TesisModule)
  },
  {
    path: '**',
    redirectTo: 'tesis'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
