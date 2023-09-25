import {Responsable} from '../responsable';
import {Comensal} from '../comensal';
import {Pedido} from '../pedido';
import {Menu} from '../menu';

describe('Tests clase responsable', () => {
  test('Crear un responsable, revisar saldo correcto', () =>{
    const responsable = new Responsable();
    responsable.setSaldo(110);
    const saldoResponsable = responsable.getSaldo();
    const saldoEsperado = 110;
    expect(saldoResponsable).toBe(saldoEsperado);
  });

  test('Crear un responsable, agregar comensal a la lista', () =>{
    const responsable = new Responsable(0);
    const comensal = new Comensal('Carlos', 12345678);
    responsable.agregarComensal(comensal);
    const largoComensales = 1;
    expect(responsable.getListaComensales().length).toBe(largoComensales);
  });

  test('Crear un responsable, agregar comensal ya agregado a la lista', () =>{
    const responsable = new Responsable(0);
    const comensal = new Comensal('Carlos', 12345678);
    responsable.agregarComensal(comensal);
    const expectedErrorMessage =
      `No se pudo agregar. ${comensal.getNombre()} ya está en la lista.`;
    expect(() =>
      responsable.agregarComensal(comensal)).toThrow(expectedErrorMessage);
  });

  test('Crear un responsable, agregar comensal con mismo numero de cedula',
      () =>{
        const responsable = new Responsable(0);
        const comensal = new Comensal('Carlos', 12345678);
        responsable.agregarComensal(comensal);
        const comensal1 = new Comensal('Pedro', 12345678);
        const expectedErrorMessage =
        `No se pudo agregar. ${comensal1.getNombre()} ya está en la lista.`;
        expect(() =>
          responsable.agregarComensal(comensal1)).toThrow(expectedErrorMessage);
      });

  test('Crear un responsable, agregar comensal con mismo nombre',
      () =>{
        const responsable = new Responsable(0);
        const comensal = new Comensal('Carlos', 12345678);
        responsable.agregarComensal(comensal);
        const comensal1 = new Comensal('Carlos', 87654321);
        const largoComensales = 2;
        responsable.agregarComensal(comensal1);
        expect(responsable.getListaComensales().length).toBe(largoComensales);
      });

  test('Invalido: saldo responsable nulo preset', () =>{
    const responsable = new Responsable(null);
    const expectedErrorMessage = 'El monto a ingresar no puede ser vacío';
    expect(() => responsable.setSaldo()).toThrow(expectedErrorMessage);
  });

  test('Invalido: saldo responsable nulo postset', () =>{
    const responsable = new Responsable();
    const expectedErrorMessage = 'El monto a ingresar no puede ser vacío';
    expect(() => responsable.setSaldo(null)).toThrow(expectedErrorMessage);
  });

  test('Invalido: saldo responsable undefined preset', () =>{
    const responsable = new Responsable(undefined);
    const expectedErrorMessage = 'El monto a ingresar no puede ser vacío';
    expect(() => responsable.setSaldo()).toThrow(expectedErrorMessage);
  });

  test('Invalido: saldo responsable undefined postset', () =>{
    const responsable = new Responsable();
    const expectedErrorMessage = 'El monto a ingresar no puede ser vacío';
    expect(() => responsable.setSaldo(undefined)).toThrow(expectedErrorMessage);
  });

  test('Invalido: saldo responsable caracter vacio preset', () =>{
    const responsable = new Responsable('');
    const expectedErrorMessage = 'El monto a ingresar no puede ser vacío';
    expect(() => responsable.setSaldo()).toThrow(expectedErrorMessage);
  });

  test('Invalido: saldo responsable caracter vacio postset', () =>{
    const responsable = new Responsable();
    const expectedErrorMessage = 'El monto a ingresar no puede ser vacío';
    expect(() => responsable.setSaldo('')).toThrow(expectedErrorMessage);
  });

  test('Invalido: saldo responsable menor a 0', () =>{
    const responsable = new Responsable();
    const expectedErrorMessage = 'El monto a ingresar debe ser mayor a 0';
    expect(() => responsable.setSaldo(-1)).toThrow(expectedErrorMessage);
  });

  test('Saldo responsable mayor a 0', () =>{
    const responsable = new Responsable();
    responsable.setSaldo(1);
    const saldoEsperado = 1;
    expect(responsable.getSaldo()).toBe(saldoEsperado);
  });

  test('Presentar saldo responsable', () =>{
    const responsable = new Responsable(1000, [], [], []);
    responsable.setSaldo(1000);
    const expectedString = 'Saldo: 1000';
    expect(responsable.presentar()).toBe(expectedString);
  });

  test('Agregar lista completados', () =>{
    const respon = new Responsable(1000, [], [], []);
    const comensal = new Comensal('Nombre', 12345678);
    const menu = new Menu('Plato Prin', 'Postre', '220', '1', '1', '1', '1');
    const pedidoCom = new Pedido(menu, '01/01/2000', '01/01/2000',
        comensal);
    respon.agregarListaPedidosCompletados(pedidoCom);
    const expectedLength = 1;
    expect(respon.getListaPedidosCompletados().length).toBe(expectedLength);
  });

  test('Invalido: Agregar lista completados nula', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage = 'No se pudo agregar el pedido';
    expect(()=> responsable.agregarListaPedidosCompletados(null)).toThrow(
        expectedErrorMessage);
  });

  test('Invalido: Agregar lista completados undefined', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage = 'No se pudo agregar el pedido';
    expect(()=> responsable.agregarListaPedidosCompletados(undefined)).toThrow(
        expectedErrorMessage);
  });

  test('Agregar lista pedidos pendientes', () =>{
    const responsable = new Responsable(1000, [], [], []);
    const comensal = new Comensal('Nombre', 12345678);
    const menu = new Menu('Plato Prin', 'Postre', '220', '1', '1');
    const pedido = new Pedido(menu, '01/01/2000', comensal);
    responsable.agregarListaPedidosPendientes(pedido);
    const expectedLength = 1;
    expect(responsable.getListaPedidosPendientes().length).toBe(expectedLength);
  });

  test('Invalido: Agregar lista pendientes nula', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage = 'No se pudo agregar el pedido';
    expect(()=> responsable.agregarListaPedidosPendientes(null)).toThrow(
        expectedErrorMessage);
  });

  test('Invalido: Agregar lista pendientes undefined', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage = 'No se pudo agregar el pedido';
    expect(()=> responsable.agregarListaPedidosPendientes(undefined)).toThrow(
        expectedErrorMessage);
  });

  test('Invalido: Descontar un costo nulo', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage = 'El saldo no puede ser vacío';
    expect(()=> responsable.descontarSaldo(null)).toThrow(expectedErrorMessage);
  });

  test('Invalido: Descontar un costo undefined', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage = 'El saldo no puede ser vacío';
    expect(()=> responsable.descontarSaldo(undefined)).toThrow(
        expectedErrorMessage);
  });

  test('Invalido: Descontar un costo mayor', () => {
    const responsable = new Responsable(1000, [], [], []);
    const expectedErrorMessage =
      'El saldo no es suficiente para pagar su pedido';
    expect(()=> responsable.descontarSaldo(1001)).toThrow(expectedErrorMessage);
  });

  test('Descontar un costo valido', () => {
    const responsable = new Responsable(1000, [], [], []);
    responsable.setSaldo(1000);
    const unCosto = 500;
    responsable.descontarSaldo(unCosto);
    const costoEsperado = 500;
    expect(responsable.getSaldo()).toBe(costoEsperado);
  });

  test('Descontar un costo valido', () => {
    const responsable = new Responsable(1000, [], [], []);
    responsable.setSaldo(1000);
    const unCosto = 999;
    responsable.descontarSaldo(unCosto);
    const costoEsperado = 1;
    expect(responsable.getSaldo()).toBe(costoEsperado);
  });
});
