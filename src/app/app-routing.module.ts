import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {VaccineComponent} from "./vaccine/vaccine.component";
import {VaccineDetailComponent} from "./vaccine-detail/vaccine-detail.component";

const routes: Routes = [
  {path: 'vaccines', component: VaccineComponent},
  {path: 'vaccine-detail/:id', component: VaccineDetailComponent}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
