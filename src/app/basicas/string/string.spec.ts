// describe('Pruebas de strings');
// it('Debe regresar un string');

import { mensaje } from './string';

describe('Pruebas de strings ->', () => {
  it('Debe regresar un string', () => {
    const nombre = mensaje('Mario');

    expect(typeof nombre).toBe('string');
  });

  it('Debe retornar un saludo con el nombre enviado', () => {
    const nombre = 'Mario';
    const saludo = mensaje(nombre);

    // expect(saludo).toBe(`Saludos ${nombre}`);
    expect(saludo).toContain(nombre);
  });
});
