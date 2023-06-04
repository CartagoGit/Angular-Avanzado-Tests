import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterMedicoComponent } from './router-medico.component';
import { Router, ActivatedRoute } from '@angular/router';
import { EMPTY, Observable, Subject, from } from 'rxjs';

class FakeRouter {
  navigate(params: any) {}
}

class FakeActivatedRoute {
  // params: Observable<any> = EMPTY;
  private _subject = new Subject();
  get params() {
    return this._subject.asObservable();
  }

  inserta(valor: any) {
    this._subject.next(valor);
  }
}

fdescribe('RouterMedicoComponent', () => {
  let component: RouterMedicoComponent;
  let fixture: ComponentFixture<RouterMedicoComponent>;
  let router: Router;
  let activatedRoute: FakeActivatedRoute;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterMedicoComponent],
      providers: [
        { provide: Router, useClass: FakeRouter },
        {
          provide: ActivatedRoute,
          useClass: FakeActivatedRoute,
        },
      ],
    });
    router = TestBed.inject(Router);
    activatedRoute = TestBed.inject(
      ActivatedRoute as any
    ) as unknown as FakeActivatedRoute;
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

  it('Debe de colocar el id = nuevo', () => {
    activatedRoute.inserta({ id: 'nuevo' });
    expect(component.id).toBe('nuevo');
  });
});
