export class Responsable {
  #saldo;
  #listaComensales;
  #listaPedidosCompletados;
  #listaPedidosPendientes;

  constructor() {
    this.#saldo = 0;
    this.#listaComensales = [];
    this.#listaPedidosCompletados = [];
    this.#listaPedidosPendientes = [];
  }


  // Getters

  getSaldo() {
    return this.#saldo;
  }

  getListaComensales() {
    return this.#listaComensales;
  }

  getListaPedidosPendientes() {
    return this.#listaPedidosPendientes;
  }

  getListaPedidosCompletados() {
    return this.#listaPedidosCompletados;
  }

  // Setters

  setSaldo(unSaldo) {
    if (unSaldo === undefined || unSaldo === null || unSaldo === '') {
      throw new Error('El monto a ingresar no puede ser vacío');
    }
    if (unSaldo <= 0) {
      throw new Error('El monto a ingresar debe ser mayor a 0');
    }
    this.#saldo += unSaldo;
  }

  // Metodos
  // validar que no sea la misma cedula
  agregarComensal(comensal) {
    const comensalCedulaRepetido = this.#listaComensales.some((m) =>
      m.getCedula() == comensal.getCedula());
    if (comensal.comensalValido() &&
      !comensalCedulaRepetido) {
      this.#listaComensales.push(comensal);
    } else {
      throw new Error(
          `No se pudo agregar. ${comensal.getNombre()} ya está en la lista.`);
    }
  }

  agregarListaPedidosCompletados(unCompletado) {
    if (unCompletado != undefined && unCompletado != null) {
      this.#listaPedidosCompletados.push(unCompletado);
    } else {
      throw new Error('No se pudo agregar el pedido');
    }
  }

  agregarListaPedidosPendientes(unPendiente) {
    if (unPendiente != undefined && unPendiente != null) {
      this.#listaPedidosPendientes.push(unPendiente);
    } else {
      throw new Error('No se pudo agregar el pedido');
    }
  }

  descontarSaldo(unCosto) {
    if (unCosto === undefined || unCosto === null) {
      throw new Error('El saldo no puede ser vacío');
    } else {
      if (unCosto>this.#saldo) {
        throw new Error('El saldo no es suficiente para pagar su pedido');
      } else {
        this.#saldo -= unCosto;
      }
    }
  }

  // ToString

  presentar() {
    return 'Saldo: ' + this.#saldo;
  }
}
