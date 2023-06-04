import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, Observable } from 'rxjs';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  params: Observable<any> = EMPTY;
}

fdescribe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;
  let router: Router;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        { provide: ActivatedRoute, useClass: FakeActivatedRoute },
      ],
    });
    router = TestBed.inject(Router);
    fixture = TestBed.createComponent(RouterMedicoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`Debe de redireccionar a Médico cuando se guarde`, () => {
    const spy = spyOn(router, 'navigate');
    component.guardarMedico();
    expect(spy).toHaveBeenCalledWith(['medico', '1234']);
  });
});
