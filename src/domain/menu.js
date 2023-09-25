export class Menu {
  #platoPrincipal;
  #postre;
  #precio;
  #caloriasPrincipal;
  #caloriasPostre;
  #caloriasTotales;

  constructor(unPlatoPrincipal, unPostre, unPrecio, lasCaloriasPrincipal,
      lasCaloriasPostre) {
    this.#platoPrincipal = unPlatoPrincipal;
    this.#postre = unPostre;
    this.#precio = unPrecio;
    this.#caloriasPrincipal = lasCaloriasPrincipal;
    this.#caloriasPostre = lasCaloriasPostre;
    this.#caloriasTotales = parseInt(lasCaloriasPrincipal) +
    parseInt(lasCaloriasPostre);
  }

  // GETTERS

  getPlatoPrincipal() {
    return this.#platoPrincipal;
  }

  getPostre() {
    return this.#postre;
  }

  getPrecio() {
    return this.#precio;
  }

  getCaloriasPrincipal() {
    return this.#caloriasPrincipal;
  }

  getCaloriasPostre() {
    return this.#caloriasPostre;
  }

  getCaloriasTotales() {
    return this.#caloriasTotales;
  }

  // SETTERS

  setPlatoPrincipal(unPlatoPrincipal) {
    this.#platoPrincipal = unPlatoPrincipal;
  }

  setPostre(unPostre) {
    this.#postre = unPostre;
  }

  setPrecio(unPrecio) {
    this.#precio = unPrecio;
  }

  setCaloriasPrincipal(lasCaloriasPrincipal) {
    this.#caloriasPrincipal = lasCaloriasPrincipal;
    this.setCaloriasTotales(lasCaloriasPrincipal, this.getCaloriasPostre());
  }

  setCaloriasPostre(lasCaloriasPostre) {
    this.#caloriasPostre = lasCaloriasPostre;
    this.setCaloriasTotales(this.getCaloriasPrincipal(), lasCaloriasPostre);
  }

  setCaloriasTotales(lasCaloriasPrincipal, lasCaloriasPostre) {
    this.#caloriasTotales = parseInt(lasCaloriasPrincipal) +
    parseInt(lasCaloriasPostre);
  }

  // ToString

  presentar() {
    return 'Plato principal: ' + this.#platoPrincipal + ' - Postre: ' +
      this.#postre + ' - Precio: '+ this.#precio;
  }
}
