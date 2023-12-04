import { UpdateComponent } from './equipe/update/update.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: 'equipe',
    loadChildren: () => import('./equipe/equipe.module').then(m => m.EquipeModule)
  },

  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  },
  { path: 'update/:id', component: UpdateComponent }, // Assurez-vous d'ajuster le chemin et le composant

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
