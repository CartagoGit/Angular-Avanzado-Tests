import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

fdescribe('Incremendator Component ->', () => {
  let component: IncrementadorComponent;
  let fixture: ComponentFixture<IncrementadorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      // declarations: [ IncrementadorComponent ],
      // imports: [ FormsModule ]
      imports: [FormsModule, IncrementadorComponent],
    });

    fixture = TestBed.createComponent(IncrementadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Debe mostrar la leyenda', () => {
    component.leyenda = 'Progreso de carga';
    fixture.detectChanges();

    const element: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;

    expect(element.innerHTML).toContain('Progreso de carga');
  });

  it('Debe mostrar en el input el valor del progreso', () => {
    component.cambiarValor(5);
    fixture.detectChanges();

    const input = fixture.debugElement.query(By.css('input'));
    const element: HTMLInputElement = input.nativeElement;

    return fixture.whenStable().then(() => {
      expect(element.value).toBe('55');
    });
  });

  it('Debe incrementar/decrementar en 5, con un click en el botón', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    //* No se puede hacer con la referencia local del template
    // const botonIncrementar =
    //   fixture.debugElement.nativeElement.querySelector('#btnIncrementar');

    // const botonDecrementar = fixture.debugElement.query(
    //   By.css('#btnDecrementar')
    // );

    // console.log(botonIncrementar, botonDecrementar);

    botones[0].triggerEventHandler('click', null);
    // botonDecrementar.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.progreso).toBe(45);

    botones[1].triggerEventHandler('click', null);
    // botonIncrementar.triggerEventHandler('click', null);
    fixture.detectChanges();
    expect(component.progreso).toBe(50);
  });

  it('En el título del componente, debe mostrar el progreso', () => {
    const botones = fixture.debugElement.queryAll(By.css('.btn-primary'));
    botones[0].triggerEventHandler('click', null);
    fixture.detectChanges();
    const element: HTMLElement = fixture.debugElement.query(
      By.css('h3')
    ).nativeElement;
    expect(element.innerHTML).toContain('45');
  });
});
