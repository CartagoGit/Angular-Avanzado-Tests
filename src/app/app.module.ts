import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MedicosComponent } from 'downloads/Material+de+espías/medicos.component';
import { MedicoComponent } from './intermedio2/medico/medico.component';

@NgModule({
  declarations: [AppComponent, MedicosComponent, MedicoComponent],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
