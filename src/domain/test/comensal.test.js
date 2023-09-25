import {Comensal} from '../comensal';

describe('Tests clase comensal', () => {
  test('Crear un comensal, revisar nombre correcto', () =>{
    const comensal = new Comensal('Santiago', 12345678);
    const nombreComensal = comensal.getNombre();
    const nombreEsperado = 'Santiago';
    expect(nombreComensal).toBe(nombreEsperado);
  });

  test('Crear un comensal, revisar cedula correcta', () =>{
    const comensal = new Comensal('Santiago', 12345678);
    const cedulaComensal = comensal.getCedula();
    const cedulaEsperada = 12345678;
    expect(cedulaComensal).toBe(cedulaEsperada);
  });

  test('Invalido: nombre comenzal nulo', () =>{
    const comensal = new Comensal(null);
    const expectedErrorMessage = 'El nombre del comensal no puede ser vacío';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Invalido: nombre comenzal nodefinido', () =>{
    const comensal = new Comensal(undefined);
    const expectedErrorMessage = 'El nombre del comensal no puede ser vacío';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Invalido: nombre comenzal vacio', () =>{
    const comensal = new Comensal(' ');
    const expectedErrorMessage = 'El nombre del comensal no puede ser vacío';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Invalido: cédula comenzal nula', () =>{
    const comensal = new Comensal();
    comensal.setNombre('Santiago');
    comensal.setCedula(null);
    const expectedErrorMessage = 'La cédula del comensal no puede ser vacía';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Invalido: cédula comenzal undefined', () =>{
    const comensal = new Comensal();
    comensal.setNombre('Santiago');
    comensal.setCedula(undefined);
    const expectedErrorMessage = 'La cédula del comensal no puede ser vacía';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Invalido: cédula comensal empty', () =>{
    const comensal = new Comensal();
    comensal.setNombre('Santiago');
    comensal.setCedula(' ');
    const expectedErrorMessage = 'La cédula del comensal no puede ser vacía';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Invalido: cédula comensal menor 8', () =>{
    const comensal = new Comensal();
    comensal.setNombre('Santiago');
    comensal.setCedula('1');
    const expectedErrorMessage = 'La cédula del comensal' +
    ' tiene que tener al menos 8 caracteres numéricos';
    expect(() => comensal.comensalValido()).toThrow(expectedErrorMessage);
  });

  test('Comensal valido', () =>{
    const comensal = new Comensal();
    comensal.setNombre('Santiago');
    comensal.setCedula(12345678);
    expect(comensal.comensalValido()).toBe(true);
  });

  test('ToString comensal', () =>{
    const comensal = new Comensal('Santiago');
    comensal.setCedula(12345678);
    const expectedString = 'Santiago - CI: 12345678';
    expect(comensal.presentar()).toBe(expectedString);
  });

  test('getNombre comensal', () =>{
    const comensal = new Comensal('Santiago');
    comensal.setCedula(12345678);
    const expectedString ='Santiago';
    expect(comensal.getNombre()).toBe(expectedString);
  });
});
