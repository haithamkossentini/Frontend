import { MainComponent } from './main/main.component';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children:[
      {
        path: 'list',
       component: ListComponent,
      },
      {
        path: 'add',
       component: AddComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EquipeRoutingModule { }
