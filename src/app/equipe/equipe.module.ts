import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EquipeRoutingModule } from './equipe-routing.module';
import { Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddComponent } from './add/add.component';
import { ListComponent } from './list/list.component';
import { MainComponent } from './main/main.component';
import { UpdateComponent } from './update/update.component';

@NgModule({
  declarations: [
    AddComponent,
    ListComponent,
    MainComponent,
    UpdateComponent
  ],
  imports: [
    EquipeRoutingModule,
    FormsModule,
    CommonModule,
    ReactiveFormsModule,
  ]
})
export class EquipeModule { }
