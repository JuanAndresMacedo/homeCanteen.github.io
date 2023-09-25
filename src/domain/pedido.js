export class Pedido {
  #menu;
  #fechaConsumo;
  #comensal;


  constructor(unMenu, unaFechaConsumo, unComensal) {
    this.#menu = unMenu;
    this.#fechaConsumo = unaFechaConsumo;
    this.#comensal= unComensal;
  }

  // GETTERS

  getMenu() {
    return this.#menu;
  }

  getFechaConsumo() {
    return this.#fechaConsumo;
  }

  getComensal() {
    return this.#comensal;
  }

  // SETTERS

  setMenu(unMenu) {
    this.#menu = unMenu;
  }

  setFechaConsumo(unaFechaConsumo) {
    this.#fechaConsumo = unaFechaConsumo;
  }

  setComensal(unComensal) {
    this.#comensal = unComensal;
  }

  // ToString

  presentar() {
    return 'El menu: ' + this.#menu +
    ' se levanta el dia: ' + this.#fechaConsumo;
  }
}
