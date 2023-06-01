import { obtenerRobots } from './array';

describe('Pruebas de arreglos ->', () => {
  it('Debe ser un array', () => {
    const resp = obtenerRobots();
    expect(typeof resp).toBe('object');
    expect(resp instanceof Array).toBeTruthy();
    expect(Array.isArray(resp)).toBeTrue();
  });
  it('Debe retornar al menos 3 elementos', () => {
    const resp = obtenerRobots();
    expect(resp.length).toBeGreaterThanOrEqual(3);
  });

  it('Debe existir Megaman y Ultron', () => {
    const resp = obtenerRobots();
    expect(resp).toContain('Megaman');
    expect(resp).toContain('Ultron');
  });
});
