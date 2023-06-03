import { Component } from '@angular/core';
import { MedicoService } from './medico.service';

@Component({
  selector: 'app-medico',
  templateUrl: './medico.component.html',
  styleUrls: ['./medico.component.scss'],
})
export class MedicoComponent {
  public medicos: any[] = [];

  constructor(public medicosSvc: MedicoService) {}

  saludarMedico(nombre: string): string {
    return `Hola ${nombre}`;
  }

  obtenerMedicos() {
    this.medicosSvc.getMedicos().subscribe((medicos: any[]) => {
      this.medicos = medicos;
    });
  }
}
