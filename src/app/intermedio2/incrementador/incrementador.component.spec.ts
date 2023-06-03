import { TestBed, ComponentFixture } from '@angular/core/testing';
import { IncrementadorComponent } from './incrementador.component';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('Incremendator Component ->', () => {
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

    fixture.whenStable().then(() => {
      const input = fixture.debugElement.query(By.css('input'));
      const element: HTMLInputElement = input.nativeElement;

      expect(element.value).toBe('55');
    });
  });
});
