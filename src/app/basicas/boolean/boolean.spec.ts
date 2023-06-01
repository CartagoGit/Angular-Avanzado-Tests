import { usuarioIngresado } from './boolean';

describe('Pruebas de booleanos ->', () => {
  it('Debe ser un booleano', () => {
    const resp = usuarioIngresado();
    expect(typeof resp).toBe('boolean');
  });

  it('Debe retornar true', () => {
    const resp = usuarioIngresado();
    // expect(resp).toBeTruthy();
    // expect(resp).toBeTrue();
    // expect(resp).toBeFalsy();
    expect(resp).toBeFalse();
    // expect(resp).not.toBeTruthy();
  });
});
