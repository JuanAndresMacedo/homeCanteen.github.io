import {Sistema} from '../sistema';
import {Responsable} from '../responsable';
import {Menu} from '../menu';

describe('Tests clase sistema', () => {
  test('Agregar menu', () =>{
    const responsable = new Responsable();
    const sistema = new Sistema(responsable, []);
    const menu = new Menu('Plato Prin', 'Postre', '220', '1', '1', '1', '1');
    sistema.agregarMenu(menu);
    const largoListaMenus = 1;
    expect(sistema.getListaDeMenus().length).toBe(largoListaMenus);
  });

  test('Invalido: Agregar menu no definido', () =>{
    const responsable = new Responsable();
    const sistema = new Sistema(responsable, []);
    const expectedErrorMessage = 'No se pudo agregar el Menu';
    expect(()=> sistema.agregarMenu(undefined)).toThrow(expectedErrorMessage);
  });

  test('Invalido: Agregar menu nulo', () =>{
    const responsable = new Responsable();
    const sistema = new Sistema(responsable, []);
    const expectedErrorMessage = 'No se pudo agregar el Menu';
    expect(()=> sistema.agregarMenu(null)).toThrow(expectedErrorMessage);
  });

  test('Obtener responsable luego de agregarlo al sistema', () =>{
    const responsable = new Responsable(0, [], [], []);
    const sistema = new Sistema();
    sistema.setResponsable(responsable);
    expect(sistema.getResponsable()).toBe(responsable);
  });

  test('Agregar lista vacia a sistema', () =>{
    const responsable = new Responsable(0, [], [], []);
    const sistema = new Sistema();
    sistema.setResponsable(responsable);
    sistema.setListaDeMenus([]);
    const expectedLength = 0;
    expect(sistema.getListaDeMenus().length).toBe(expectedLength);
  });
});
