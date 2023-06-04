import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { RouterTestingModule } from '@angular/router/testing';
import { By } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

fdescribe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [RouterTestingModule.withRoutes([])],
    });
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it(`should have as title 'Angular-Avanzado-Tests'`, () => {
    expect(app.title).toEqual('Angular-Avanzado-Tests');
  });

  it('Debe de tener un router-outlet', () => {
    // const compiled = fixture.nativeElement;
    // expect(compiled.querySelector('router-outlet')).toBeTruthy();
    const compiled = fixture.debugElement;
    const routerOutlet = compiled.query(By.directive(RouterOutlet));
    expect(routerOutlet).toBeTruthy();
    // expect(routerOutlet).not.toBeNull();
  });
});
