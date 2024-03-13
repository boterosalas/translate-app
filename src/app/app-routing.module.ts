import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'translate',
    loadChildren: () => import('./pages/translate/translate.module').then(m => m.TranslateModule)
  },
  {
    path: '**',
    redirectTo: 'translate',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
