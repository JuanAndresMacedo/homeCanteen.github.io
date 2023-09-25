import {Pedido} from '../pedido';
import {Menu} from '../menu';
import {Comensal} from '../comensal';

describe('Tests clase pedidos', () =>{
  test('Crear clase pedido, revisar menu correcto', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(menu, '01/01/2000', comensal);
    const menuEsperado = pedidos.getMenu();
    expect(menu).toBe(menuEsperado);
  });

  test('Crear clase pedido, revisar fecha correcta', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(menu, '01/01/2000', comensal);
    const fechaEsperada = '01/01/2000';
    expect(pedidos.getFechaConsumo()).toBe(fechaEsperada);
  });

  test('Crear clase pedido, revisar comensal correcto', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(menu, '01/01/2000', comensal);
    const comensalEsperado = pedidos.getComensal();
    expect(comensal).toBe(comensalEsperado);
  });

  test('Crear clase pedido, asignar menu por funcion', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(null, '01/01/2000', comensal);
    pedidos.setMenu(menu);
    const menuEsperado = pedidos.getMenu();
    expect(menu).toBe(menuEsperado);
  });

  test('Crear clase pedido, asignar fecha por funcion', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(menu, '', comensal);
    pedidos.setFechaConsumo('01/01/2000');
    const fechaEsperada = '01/01/2000';
    expect(pedidos.getFechaConsumo()).toBe(fechaEsperada);
  });

  test('Crear clase pedido, asignar comensal por funcion', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(menu, '01/01/2000', null);
    pedidos.setComensal(comensal);
    const comensalEsperado = comensal;
    expect(pedidos.getComensal()).toBe(comensalEsperado);
  });

  test('toString de pedidos', ()=>{
    const menu = new Menu('Plato Prin', 'Postre', 220, 1, 1);
    const comensal = new Comensal();
    const pedidos = new Pedido(menu, '01/01/2000', comensal);
    const stringEsperado = 'El menu: ' + pedidos.getMenu() +
    ' se levanta el dia: ' + pedidos.getFechaConsumo();
    expect(pedidos.presentar()).toBe(stringEsperado);
  });
});
