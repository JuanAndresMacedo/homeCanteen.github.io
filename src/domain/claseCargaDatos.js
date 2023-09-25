import {Comensal} from './comensal.js';
import {Pedido} from './pedido.js';
import {Menu} from './menu.js';
// import {Pendientes} from './pendientes.js';
import {Responsable} from './responsable.js';
import {Sistema} from './sistema.js';

// Sistema
export const sistema = new Sistema();

// Responsable
const responsable = new Responsable();

// Menus
const menuLun1 = new Menu('Milanesa de Pollo',
    'Helado', '220', '330', '315', '645');
const menuLun2 = new Menu('Tortilla de Papa', 'Ensalada de Fruta',
    '220', '310', '240', '550');

const menuMar1 = new Menu('Bife con papas',
    'Flan', '220', '460', '240', '700');

const menuMar2 = new Menu('Canelones', 'Panqueques',
    '220', '370', '290', '660');

const menuMie1 = new Menu('Ravioles de Espinaca',
    'Flan', '220', '330', '315', '645');

const menuMie2 = new Menu('Omelette', 'Helado',
    '220', '310', '240', '550');

const menuJue1 = new Menu('Estofado de carne con papas',
    'Arroz con leche', '220', '460', '240', '700');
const menuJue2 = new Menu('Hamburguesas de lentejas', 'Mousse de Chocolate',
    '220', '370', '290', '660');

const menuVie1 = new Menu('Ñoquis con tuco',
    'Fruta', '220', '460', '190', '650');
const menuVie2 = new Menu('Albondigas', 'Fruta',
    '220', '370', '290', '660');


// Comensales
const comensalPrueba = new Comensal('Pedro', 51234567);
const comensalPrueba2 = new Comensal('Stefan', 57654321);

// Ingreso datos a responsable
responsable.agregarComensal(comensalPrueba);
responsable.agregarComensal(comensalPrueba2);
responsable.setSaldo(300);

// Ingreso Datos a sistema
sistema.setResponsable(responsable);
sistema.agregarMenu(menuLun1);
sistema.agregarMenu(menuLun2);
sistema.agregarMenu(menuMar1);
sistema.agregarMenu(menuMar2);
sistema.agregarMenu(menuMie1);
sistema.agregarMenu(menuMie2);
sistema.agregarMenu(menuJue1);
sistema.agregarMenu(menuJue2);
sistema.agregarMenu(menuVie1);
sistema.agregarMenu(menuVie2);

// Consumo completado
const consumoCompletado = new Pedido(menuVie2, '30/05/2023',
    responsable.getListaComensales()[0]);

responsable.agregarListaPedidosCompletados(consumoCompletado);
