import { Component, OnInit } from '@angular/core';
import { MedicosService } from './medicos.service';

@Component({
  selector: 'app-medicos',
  template: ` <p>medicos works!</p> `,
  styles: [],
})
export class MedicosComponent implements OnInit {
  public medicos: any[] = [];
  public mensajeError: string = '';

  constructor(public _medicoService: MedicosService) {}

  ngOnInit() {
    this._medicoService
      .getMedicos()
      .subscribe((medicos) => (this.medicos = medicos));
  }

  public llamadaQuellama(): void {
    this.agregarMedico();
  }

  public agregarMedico(): void {
    const medico = { nombre: 'Médico Juan Carlos' };

    this._medicoService.agregarMedico(medico).subscribe({
      next: (medicoDB) => this.medicos.push(medicoDB),
      error: (err) => {
        this.mensajeError = err;
      },
    });
  }

  public borrarMedico(id: string): void {
    const confirmar = confirm('Estas seguro que desea borrar este médico');
    if (confirmar) this._medicoService.borrarMedico(id);
  }
}
