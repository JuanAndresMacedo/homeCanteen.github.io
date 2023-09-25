import {Menu} from '../menu';

describe('Tests clase menu', ()=>{
  test('Crear menu, revisar plato principal correcto', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const platoPrin = menu.getPlatoPrincipal();
    const platoPrinEsp = 'Prin Ejemplo';
    expect(platoPrin).toBe(platoPrinEsp);
  });

  test('Crear menu, revisar postre correcto', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const postre = menu.getPostre();
    const postreEsperado = 'Postre Ejemplo';
    expect(postre).toBe(postreEsperado);
  });

  test('Crear menu, revisar precio correcto', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const precio = menu.getPrecio();
    const precioEsperado = 220;
    expect(precio).toBe(precioEsperado);
  });

  test('Crear menu, revisar calorias principales correcta', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const caloPrin = menu.getCaloriasPrincipal();
    const caloPrinEsperadas = 100;
    expect(caloPrin).toBe(caloPrinEsperadas);
  });

  test('Crear menu, revisar calorias postre correcta', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const caloPrin = menu.getCaloriasPostre();
    const caloPrinEsperadas = 100;
    expect(caloPrin).toBe(caloPrinEsperadas);
  });

  test('Crear menu, revisar calorias totales correcta', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const caloTotales = menu.getCaloriasTotales();
    const caloTotalesEsperadas = 100+100;
    expect(caloTotales).toBe(caloTotalesEsperadas);
  });

  test('Crear menu, modificar plato principal', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    menu.setPlatoPrincipal('Ensalada');
    const platoPrin = menu.getPlatoPrincipal();
    const platoPrinEsp = 'Ensalada';
    expect(platoPrin).toBe(platoPrinEsp);
  });

  test('Crear menu, modificar postre', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    menu.setPostre('Manzana');
    const postre = menu.getPostre();
    const postreEsperado = 'Manzana';
    expect(postre).toBe(postreEsperado);
  });

  test('Crear menu, modificar precio', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    menu.setPrecio(200);
    const precio = menu.getPrecio();
    const precioEsperado = 200;
    expect(precio).toBe(precioEsperado);
  });

  test('Crear menu, modificar calorias plato principal', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    menu.setCaloriasPrincipal(110);
    const caloriasPrin = menu.getCaloriasPrincipal();
    const caloriasPrinEsperadas = 110;
    expect(caloriasPrin).toBe(caloriasPrinEsperadas);
  });

  test('Crear menu, modificar calorias postre', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    menu.setCaloriasPostre(120);
    const caloriasPostre = menu.getCaloriasPostre();
    const caloriasPostreEsperadas = 120;
    expect(caloriasPostre).toBe(caloriasPostreEsperadas);
  });

  test('Crear menu, modificar calorias plato principal' +
    ' y postre y revisar si se modifican las totales', ()=>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    menu.setCaloriasPostre(120);
    menu.setCaloriasPrincipal(140);
    const caloriasTotales = menu.getCaloriasTotales();
    const caloriasTotalesEsperadas = 120+140;
    expect(caloriasTotales).toBe(caloriasTotalesEsperadas);
  });

  test('toString de menu', () =>{
    const menu = new Menu('Prin Ejemplo', 'Postre Ejemplo', 220, 100, 100);
    const stringEsperado = 'Plato principal: ' + menu.getPlatoPrincipal() +
    ' - Postre: ' + menu.getPostre() + ' - Precio: ' + menu.getPrecio();
    expect(menu.presentar()).toBe(stringEsperado);
  });
});
