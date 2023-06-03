import { Component } from '@angular/core';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss'],
})
export class MedicoComponent {
  constructor() {}

  saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }
}
