/* eslint-disable camelcase */
import {sistema} from '../domain/claseCargaDatos.js';
import {Pedido} from '../domain/pedido.js';
import {Comensal} from '../domain/comensal.js';

window.addEventListener('load', inicio);

function inicio() {
  actualizarSaldo();
  cargarlistaComensales();
  mostrarConsumos(sistema.getResponsable().getListaPedidosCompletados(),
      document.getElementById('listaConsumosCompletados'),
      document.getElementById('etiquetaCompletados'));
}

// TAB ORDENAR

// Constantes TAB Ordenar
const modalMenu = document.getElementById('modalMenu');
const aceptarModalMenu = document.getElementById('btn-aceptarModalMenu');
const cerrarModalMenu = document.getElementById('cerrarModalMenu');
const cerrarModalComprarMenu = document.getElementById(
    'cerrarModalComprarMenu');
const menuOpcion1 = document.getElementById('btnOpcion1Menu');
const menuOpcion2 = document.getElementById('btnOpcion2Menu');
const modalComprarMenu = document.getElementById('modalComprarMenu');
const modalErrorOrdenar = document.getElementById('modalErrorOrdenar');

const btnCalJunio = document.querySelectorAll('.btnCalJun');
const btnCalJulio = document.querySelectorAll('.btnCalJul');

const botonAceptarModalMenuCompra = document.getElementById(
    'btn-aceptarModalMenuCompra');
let presionado = '';
let menuDelDia = [];

function cargarMenu(menu) {
  const spanPlatoPrincipal1 = document.getElementById('spanPlatoPrincipal1');
  const spanPlatoPrincipalCal1 = document.getElementById(
      'spanPlatoPrincipalCal1');
  const spanPostre1 = document.getElementById('spanPostre1');
  const spanPostreCal1 = document.getElementById('spanPostreCal1');
  const spanPrecio1 = document.getElementById('spanPrecio1');
  const spanCalTot1 = document.getElementById('spanCalTot1');
  spanPlatoPrincipal1.innerHTML = 'Principal: ' +
    menu.getPlatoPrincipal();
  spanPlatoPrincipalCal1.innerHTML = menu.getCaloriasPrincipal() + 'kcal';
  spanPostre1.innerHTML = 'Postre: ' + menu.getPostre();
  spanPostreCal1.innerHTML = menu.getCaloriasPostre() + 'kcal';
  spanPrecio1.innerHTML = 'Precio: $' + menu.getPrecio();
  spanCalTot1.innerHTML = 'Cal Totales: ' + menu.getCaloriasTotales();
}

// Las funciones SeleccionarMenuJun y SeleccionarMenuJul
// funcionan de tal forma que dependiendo el valor del boton
// seleccionado modulo siete (la cantidad de dias por semana),
// ver a que dia estara asociado.
// Ej el primer lunes de Junio es 5, si el boton 12 modulo 7
// devuelve 0 entonces se debera mostrar el menu del Lunes
function seleccionarMenuJun() {
  if ((Number(presionado) - 5) % 7 === 0) {
    menuDelDia = [sistema.getListaDeMenus()[0], sistema.getListaDeMenus()[1]];
  } else {
    if ((Number(presionado) - 6) % 7 === 0) {
      menuDelDia = [sistema.getListaDeMenus()[2], sistema.getListaDeMenus()[3]];
    } else {
      if (Number(presionado) % 7 === 0) {
        menuDelDia = [sistema.getListaDeMenus()[4],
          sistema.getListaDeMenus()[5]];
      } else {
        if ((Number(presionado) - 1) % 7 === 0) {
          menuDelDia = [sistema.getListaDeMenus()[6],
            sistema.getListaDeMenus()[7]];
        } else {
          if ((Number(presionado) - 2) % 7 === 0) {
            menuDelDia = [sistema.getListaDeMenus()[8],
              sistema.getListaDeMenus()[9]];
          }
        }
      }
    }
  }
}

function seleccionarMenuJul() {
  if ((Number(presionado) - 3) % 7 === 0) {
    menuDelDia = [sistema.getListaDeMenus()[0], sistema.getListaDeMenus()[1]];
  } else {
    if ((Number(presionado) - 4) % 7 === 0) {
      menuDelDia = [sistema.getListaDeMenus()[2], sistema.getListaDeMenus()[3]];
    } else {
      if ((Number(presionado) - 5) % 7 === 0) {
        menuDelDia = [sistema.getListaDeMenus()[4],
          sistema.getListaDeMenus()[5]];
      } else {
        if ((Number(presionado) - 6) % 7 === 0) {
          menuDelDia = [sistema.getListaDeMenus()[6],
            sistema.getListaDeMenus()[7]];
        } else {
          if (Number(presionado) % 7 === 0) {
            menuDelDia = [sistema.getListaDeMenus()[8],
              sistema.getListaDeMenus()[9]];
          }
        }
      }
    }
  }
}

btnCalJunio.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    presionado = event.target.innerText;
    seleccionarMenuJun();
    if (menuOpcion1.classList.contains('active')) {
      cargarMenu(menuDelDia[0]);
    } else if (menuOpcion2.classList.contains('active')) {
      cargarMenu(menuDelDia[1]);
    }
    modalMenu.showModal();
  });
});

btnCalJulio.forEach((btn) => {
  btn.addEventListener('click', (event) => {
    presionado = event.target.innerText;
    seleccionarMenuJul();
    if (menuOpcion1.classList.contains('active')) {
      cargarMenu(menuDelDia[0]);
    } else if (menuOpcion2.classList.contains('active')) {
      cargarMenu(menuDelDia[1]);
    }
    modalMenu.showModal();
  });
});

//  Cambia el contenido de la ventana modal de menu a ser la modal de menu 2
menuOpcion1.addEventListener('click', () => {
  cargarMenu(menuDelDia[0]);
});

// Cambia el contenido de la ventana modal de menu a ser la modal de menu 2
menuOpcion2.addEventListener('click', () => {
  cargarMenu(menuDelDia[1]);
});

aceptarModalMenu.addEventListener('click', () => {
  const pSaldo = document.getElementById('saldoDisponible');
  const saldo = sistema.getResponsable().getSaldo();
  pSaldo.innerText = 'Saldo: $' + saldo;
  const menuElegido = document.getElementById('menuElegido');
  const pPrecio = document.getElementById('precioMenuSelec');
  let precioValor = 0;
  if (menuOpcion1.classList.contains('active')) {
    pPrecio.innerHTML = 'Precio: $' + menuDelDia[0].getPrecio();
    precioValor = menuDelDia[0].getPrecio();
    menuElegido.innerHTML = 'Menu elegido: Opcion 1';
  } else if (menuOpcion2.classList.contains('active')) {
    pPrecio.innerHTML = 'Precio: ' + menuDelDia[1].getPrecio();
    precioValor = menuDelDia[1].getPrecio();
    menuElegido.innerHTML = 'Menu elegido: Opcion 2';
  }
  const spanErrorOrdenar = document.getElementById('spanModalErrorOrdenar');
  const listahtml = document.getElementById('listaComensalesCM');
  listahtml.innerHTML = '';
  modalMenu.close();
  try {
    if (precioValor > saldo) {
      throw new Error('Precio de menu es mayor a saldo disponible,' +
        ' por favor cargar saldo');
    }
    const listaComensales = sistema.getResponsable().getListaComensales();
    const listaInputs = [];
    for (let i = 0; i < listaComensales.length; i++) {
      const li = document.createElement('li');
      li.className = 'list-group-item';
      const input = document.createElement('input');
      input.className = 'classCheckboxes form-check-input flex-shrink-0';
      input.type = 'checkbox';
      input.value = '';
      input.id = i + 'checkbox';
      const label = document.createElement('label');
      label.className = 'form-check-label stretched-link';
      label.id = i + 'labelCheckbox';
      label.htmlFor = i + 'checkbox';
      label.innerText = listaComensales[i].getNombre();
      li.appendChild(input);
      li.appendChild(label);
      listahtml.appendChild(li);
      listaInputs.push(input.id);
    }

    modalComprarMenu.showModal();
  } catch (error) {
    spanErrorOrdenar.innerHTML = error;
    modalErrorOrdenar.showModal();
  }
});

const carousel = document.getElementsByClassName('carousel-item');

botonAceptarModalMenuCompra.addEventListener('click', () => {
  const checkboxes = document.getElementsByClassName('classCheckboxes');
  const listaComensales = sistema.getResponsable().getListaComensales();
  for (let i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      let menuACargar = menuDelDia[0];
      if (menuOpcion2.classList.contains('active')) {
        menuACargar = menuDelDia[1];
      }
      let diaAux = '00';
      let mesAux = '00';
      if (presionado < 10) {
        diaAux = '0' + presionado;
      } else {
        diaAux = presionado;
      }
      if (carousel[0].classList.contains('active')) {
        mesAux = '06';
      } else {
        mesAux = '07';
      }
      const fecha = diaAux + '/' + mesAux + '/' + new Date().getFullYear();
      const pendiente = new Pedido(menuACargar, fecha,
          listaComensales[i]);
      sistema.getResponsable().agregarListaPedidosPendientes(pendiente);
    }
  }
  modalComprarMenu.close();
});

cerrarModalMenu.addEventListener('click', () => {
  modalMenu.close();
});

cerrarModalComprarMenu.addEventListener('click', () => {
  modalComprarMenu.close();
});

cerrarModalErrorOrdenar.addEventListener('click', () => {
  modalErrorOrdenar.close();
});


// TAB Perfil

// Constantes Perfil
const TabPerfil = document.getElementById('btnTabPerfil');

TabPerfil.addEventListener('click', () => {
  actualizarSaldo();
});

// Saldo

// Constantes Saldo
const finalizada = document.getElementById('modalFinalizado');
const spanFin = document.getElementById('spanModalFin');
const tagFin = document.getElementById('hModalFin');
const cerrarModalFinalizado = document.getElementById('cerrarModalFinalizado');
const pErrorSaldo = document.getElementById('errorSaldo');
const modalSaldo = document.getElementById('modalCargarSaldo');
const abrirModalSaldo = document.getElementById('btn-cargarSaldo');
const cerrarModalSaldo = document.getElementById('cerrarModalSaldo');
const aceptarModalSaldo = document.getElementById('btn-aceptarModalSaldo');

// Funciones
function actualizarSaldo() {
  const labelSaldo = document.getElementById('etiquetaSaldo');
  labelSaldo.innerText = 'Saldo: $' + sistema.getResponsable().getSaldo();
}

cerrarModalFinalizado.addEventListener('click', () => {
  modalFinalizado.close();
});

abrirModalSaldo.addEventListener('click', () => {
  modalSaldo.showModal();
});

cerrarModalSaldo.addEventListener('click', () => {
  const saldo = document.getElementById('inputSaldo');
  pErrorSaldo.classList.add('d-none');
  saldo.value = '';
  modalSaldo.close();
});

aceptarModalSaldo.addEventListener('click', (event) => {
  event.preventDefault();
  const saldo = document.getElementById('inputSaldo');
  try {
    sistema.getResponsable().setSaldo(Number(saldo.value));
    saldo.value = '';
    modalSaldo.close();
    tagFin.innerHTML = 'Transaccion completada';
    spanFin.innerHTML = 'Su transaccion se ha realizado con exito';
    actualizarSaldo();
    finalizada.showModal();
  } catch (error) {
    saldo.value = '';
    pErrorSaldo.innerHTML = error;
    pErrorSaldo.classList.remove('d-none');
  }
});

// Comensal

// Constantes comensal
const modalComensal = document.getElementById('modalAgregarComensal');
const abrirModalComensal = document.getElementById('btn-agregarComensal');
const cerrarModalComensal = document.getElementById('cerrarModalComensal');
const aceptarModalComensal =
  document.getElementById('btn-aceptarModalComensal');
const listaComensales = document.getElementById('listaComensales');
const pErrorComensal = document.getElementById('errorComensal');


// Funciones
function cargarlistaComensales() {
  listaComensales.innerHTML = '';
  const lista = sistema.getResponsable().getListaComensales();
  for (let i = 0; i < lista.length; i++) {
    const li = document.createElement('li');
    li.className = 'nombreComensal';
    li.textContent = lista[i].presentar();
    listaComensales.appendChild(li);
  }
}

abrirModalComensal.addEventListener('click', () => {
  modalComensal.showModal();
});

cerrarModalComensal.addEventListener('click', () => {
  const nombreComensal = document.getElementById('inputNombreComensal');
  const cedulaComensal = document.getElementById('inputCedulaComensal');
  nombreComensal.value = '';
  cedulaComensal.value = '';
  pErrorComensal.classList.add('d-none');
  modalComensal.close();
});

aceptarModalComensal.addEventListener('click', (event) => {
  event.preventDefault();
  const nombreComensal = document.getElementById('inputNombreComensal');
  const cedulaComensal = document.getElementById('inputCedulaComensal');
  try {
    const comensal = new Comensal(nombreComensal.value, cedulaComensal.value);
    sistema.getResponsable().agregarComensal(comensal);
    nombreComensal.value = '';
    cedulaComensal.value = '';
    modalComensal.close();
    tagFin.innerHTML = 'Asignacion completada';
    spanFin.innerHTML = 'El comensal se agrego a la lista de comensales';
    finalizada.showModal();
    cargarlistaComensales();
  } catch (error) {
    nombreComensal.value = '';
    cedulaComensal.value = '';
    pErrorComensal.innerHTML = error;
    pErrorComensal.classList.remove('d-none');
    cargarlistaComensales();
  }
});

// TAB HISTORIAL

// Constantes Historial
const tabHistorial = document.getElementById('btnTabHistorial');
const modalCompletados = document.getElementById('modalCompletados');
const modalPendientes = document.getElementById('modalPendientes');
const cerrarModalPendientes = document.getElementById('cerrarModalPendientes');
const cerrarModalCompletados =
  document.getElementById('cerrarModalCompletados');
const contPedidosComple = document.getElementById('listaConsumosCompletados');
const contPedidosPend = document.getElementById('listaConsumosPendientes');
const btncancelarMenuPendiente =
  document.getElementById('btncancelarMenuPendiente');
const etiquetaPendientes = document.getElementById('etiquetaPendientes');
const etiquetaCompletados = document.getElementById('etiquetaCompletados');
const listaConsumosCompletados =
  document.getElementById('listaConsumosCompletados');
const listaConsumosPendientes =
  document.getElementById('listaConsumosPendientes');
const btnPagarMenuPendiente = document.getElementById('btnPagarMenuPendiente');
const modalErrorPagar = document.getElementById('modalErrorPagar');
const spanErrorPagar = document.getElementById('spanModalErrorPagar');
const cerrarModalErrorPagar = document.getElementById('cerrarModalErrorPagar');

// Funciones
tabHistorial.addEventListener('click', async (event) => {
  const arrayCompletados = sistema.getResponsable().
      getListaPedidosCompletados();
  const arrayPendientes = sistema.getResponsable().getListaPedidosPendientes();
  listaConsumosPendientes.innerHTML = '';
  listaConsumosCompletados.innerHTML = '';
  mostrarConsumos(arrayCompletados, listaConsumosCompletados,
      etiquetaCompletados);
  mostrarConsumos(arrayPendientes, listaConsumosPendientes, etiquetaPendientes);
});

function agregarClaseDNone(etiqueta) {
  etiqueta.classList.add('d-none');
}

function mostrarConsumos(arrayConsumos, listaConsumos, etiqueta) {
  if (arrayConsumos.length > 0) {
    agregarClaseDNone(etiqueta);
    listaConsumos.classList.remove('d-none');
    for (let i = 0; i < arrayConsumos.length; i++) {
      const btn = document.createElement('button');
      btn.className = 'btn btn-lg btnConsumos' + ' ' + i;
      btn.innerHTML = arrayConsumos[i].getFechaConsumo();
      listaConsumos.appendChild(btn);
    }
  }
}

contPedidosComple.addEventListener('click', (event) => {
  const pedidosCompletados = sistema.getResponsable().
      getListaPedidosCompletados();
  if (event.target.classList.contains('btnConsumos')) {
    const arrayAux = event.target.classList;
    const indicePedidoPen = arrayAux[3];
    cargarCompletado(pedidosCompletados[parseInt(indicePedidoPen)]);
    modalCompletados.showModal();
  }
});

let pedidoActualPend;

contPedidosPend.addEventListener('click', (event) => {
  const pedidosPendientes = sistema.getResponsable().
      getListaPedidosPendientes();
  if (event.target.classList.contains('btnConsumos')) {
    const arrayAux = event.target.classList;
    pedidoActualPend = parseInt(arrayAux[3]);
    const indicePedidoPen = arrayAux[3];
    cargarPendiente(pedidosPendientes[parseInt(indicePedidoPen)]);
    modalPendientes.showModal();
  }
});

function cargarCompletado(pedido) {
  const spanComensalCom = document.getElementById('spanComensalCom');
  const spanFechaCom = document.getElementById('spanFechaCom');
  const spanPlatoPrincipalCom =
    document.getElementById('spanPlatoPrincipalCom');
  const spanPlatoPrincipalCalCom = document.getElementById(
      'spanPlatoPrincipalCalCom');
  const spanPostreCom = document.getElementById('spanPostreCom');
  const spanPostreCalCom = document.getElementById('spanPostreCalCom');
  const spanPrecioCom = document.getElementById('spanPrecioCom');
  const spanCalTotCom = document.getElementById('spanCalTotCom');
  spanComensalCom.innerHTML = 'Comensal: ' + pedido.getComensal().getNombre();
  spanFechaCom.innerHTML = 'Fecha de consumo: ' + pedido.getFechaConsumo();
  spanPlatoPrincipalCom.innerHTML = 'Principal: ' +
    pedido.getMenu().getPlatoPrincipal();
  spanPlatoPrincipalCalCom.innerHTML = pedido.getMenu()
      .getCaloriasPrincipal() + 'kcal';
  spanPostreCom.innerHTML = 'Postre: ' + pedido.getMenu().getPostre();
  spanPostreCalCom.innerHTML = pedido.getMenu().getCaloriasPostre() + 'kcal';
  spanPrecioCom.innerHTML = 'Precio: $' + pedido.getMenu().getPrecio();
  spanCalTotCom.innerHTML = 'Cal Totales: ' +
    pedido.getMenu().getCaloriasTotales();
}

function cargarPendiente(pedido) {
  const spanComensalPen = document.getElementById('spanComensalPen');
  const spanFechaPen = document.getElementById('spanFechaPen');
  const spanPlatoPrincipalPen =
    document.getElementById('spanPlatoPrincipalPen');
  const spanPlatoPrincipalCalPen = document.getElementById(
      'spanPlatoPrincipalCalPen');
  const spanPostrePen = document.getElementById('spanPostrePen');
  const spanPostreCalPen = document.getElementById('spanPostreCalPen');
  const spanPrecioPen = document.getElementById('spanPrecioPen');
  const spanCalTotPen = document.getElementById('spanCalTotPen');
  spanComensalPen.innerHTML = 'Comensal: ' + pedido.getComensal().getNombre();
  spanFechaPen.innerHTML = 'Fecha de consumo: ' + pedido.getFechaConsumo();
  spanPlatoPrincipalPen.innerHTML = 'Principal: ' +
    pedido.getMenu().getPlatoPrincipal();
  spanPlatoPrincipalCalPen.innerHTML = pedido.
      getMenu().getCaloriasPrincipal() + 'kcal';
  spanPostrePen.innerHTML = 'Postre: ' + pedido.getMenu().getPostre();
  spanPostreCalPen.innerHTML = pedido.getMenu().getCaloriasPostre() + 'kcal';
  spanPrecioPen.innerHTML = 'Precio: $' + pedido.getMenu().getPrecio();
  spanCalTotPen.innerHTML = 'Cal Totales: ' +
    pedido.getMenu().getCaloriasTotales();
}

cerrarModalCompletados.addEventListener('click', () => {
  modalCompletados.close();
});

cerrarModalPendientes.addEventListener('click', () => {
  modalPendientes.close();
});

btncancelarMenuPendiente.addEventListener('click', () => {
  const pedidosPendientes = sistema.getResponsable().
      getListaPedidosPendientes();
  pedidosPendientes.splice(pedidoActualPend, 1);
  if (pedidosPendientes.length > 0) {
    listaConsumosPendientes.innerHTML = '';
    mostrarConsumos(pedidosPendientes
        , listaConsumosPendientes, etiquetaPendientes);
  } else {
    listaConsumosPendientes.classList.add('d-none');
    etiquetaPendientes.classList.remove('d-none');
  }
  modalPendientes.close();
});

btnPagarMenuPendiente.addEventListener('click', () => {
  const pedidosPendientes = sistema.getResponsable().
      getListaPedidosPendientes();
  const pedidosCompletados = sistema.getResponsable().
      getListaPedidosCompletados();
  try {
    sistema.getResponsable().
        agregarListaPedidosCompletados(pedidosPendientes[pedidoActualPend]);
    sistema.getResponsable().
        descontarSaldo(
            Number(pedidosPendientes[pedidoActualPend].getMenu().getPrecio()));
    pedidosPendientes.splice(pedidoActualPend, 1);
    if (pedidosPendientes.length > 0) {
      listaConsumosPendientes.innerHTML = '';
      mostrarConsumos(pedidosPendientes
          , listaConsumosPendientes, etiquetaPendientes);
    } else {
      listaConsumosPendientes.classList.add('d-none');
      etiquetaPendientes.classList.remove('d-none');
    }
    listaConsumosCompletados.innerHTML = '';
    etiquetaCompletados.classList.add('d-none');
    mostrarConsumos(pedidosCompletados
        , listaConsumosCompletados, etiquetaCompletados);
    modalPendientes.close();
  } catch (error) {
    spanErrorPagar.innerHTML = error;
    modalPendientes.close();
    modalErrorPagar.showModal();
  }
});

cerrarModalErrorPagar.addEventListener('click', () => {
  modalErrorPagar.close();
});
