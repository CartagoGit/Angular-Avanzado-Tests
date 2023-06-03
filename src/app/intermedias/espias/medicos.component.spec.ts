import { MedicosComponent } from './medicos.component';
import { MedicosService } from './medicos.service';
import { from, Observable, of } from 'rxjs';

describe('MedicosComponent ->', () => {
  let componente: MedicosComponent;
  const servicio = new MedicosService(null as any);

  beforeEach(() => {
    componente = new MedicosComponent(servicio);
  });

  // Sin importar el resultado
  it('Init: debe cargar los médicos', () => {
    const medicos = ['medico1', 'medico2', 'medico3'];
    spyOn(servicio, 'getMedicos').and.callFake(() => {
      return from([medicos]);
    });
    componente.ngOnInit();

    expect(componente.medicos.length).toBeGreaterThan(0);
  });

  it('Debe de llamar al servidor para agregar un médico', () => {
    const espia = spyOn(servicio, 'agregarMedico').and.callFake((medico) => {
      // return from([medico])
      return of(null)
    });

    // componente.agregarMedico();
    //* Tambien funciona si la funcion es llamadda atraves de otro metodo
    componente.llamadaQuellama();

    expect(espia).toHaveBeenCalled();
  });
});
