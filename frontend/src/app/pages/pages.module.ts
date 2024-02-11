import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { GraficaComponent } from './grafica/grafica.component';

@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
  ],
  exports: [
    DashboardComponent,
    ProgressComponent,
    GraficaComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
