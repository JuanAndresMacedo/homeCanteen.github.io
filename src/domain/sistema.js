export class Sistema {
  #responsable;
  #listaDeMenus;

  constructor(unResponsable, unaListaDeMenus) {
    this.#responsable = unResponsable;
    this.#listaDeMenus = [];
  }

  // GETTERS

  getResponsable() {
    return this.#responsable;
  }

  getListaDeMenus() {
    return this.#listaDeMenus;
  }

  // SETTERS

  setResponsable(unResponsable) {
    this.#responsable = unResponsable;
  }

  setListaDeMenus(unaListaDeMenus) {
    this.#listaDeMenus = unaListaDeMenus;
  }

  agregarMenu(unMenu) {
    if (unMenu != undefined && unMenu != null) {
      this.#listaDeMenus.push(unMenu);
    } else {
      throw new Error('No se pudo agregar el Menu');
    }
  }
}
