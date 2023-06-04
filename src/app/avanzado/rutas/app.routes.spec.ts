import { MedicoComponent } from 'src/app/intermedio2/medico/medico.component';
import { RUTAS } from './app.routes';

fdescribe('Rutas principales ->', () => {
  it('Debe existir la ruta /', () => {
    expect(RUTAS).toContain({
      path: 'medico/:id',
      component: MedicoComponent,
    });
  });
});
