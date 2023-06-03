import { TestBed, ComponentFixture } from '@angular/core/testing';
import { MedicoComponent } from './medico.component';
import { MedicoService } from './medico.service';
import { HttpClientModule } from '@angular/common/http';

describe('MedicoComponent 2 ->', () => {
  let component: MedicoComponent;
  let fixture: ComponentFixture<MedicoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MedicoComponent],
      providers: [MedicoService],
      imports:[ HttpClientModule]
    });

    fixture = TestBed.createComponent(MedicoComponent);
    component = fixture.componentInstance;
  });

  it('Debe de crearse el componente', () => {
    expect(component).toBeTruthy();
  });

  it('Debe de retornar el nombre del médico', () => {
    const nombre = 'Juan Carlos';
    const respuesta = component.saludarMedico(nombre);

    expect(respuesta).toContain(nombre);
  });
});
