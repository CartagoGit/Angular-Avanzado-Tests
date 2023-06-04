import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from 'downloads/Material+de+espías/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';
import { HospitalComponent } from './intermedio2/hospital/hospital.component';
import { RouterModule } from '@angular/router';
import { RUTAS } from './avanzado/rutas/app.routes';

@NgModule({
  declarations: [
    AppComponent,
    MedicosComponent,
    MedicoComponent,
    HospitalComponent,
  ],
  imports: [BrowserModule, RouterModule.forRoot(RUTAS)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
