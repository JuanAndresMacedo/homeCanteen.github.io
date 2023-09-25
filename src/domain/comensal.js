export class Comensal {
  #nombre;
  #cedula;


  constructor(unNombre, unaCedula) {
    this.#nombre = unNombre;
    this.#cedula = unaCedula;
  }

  // GETTERS

  getNombre() {
    return this.#nombre;
  }

  getCedula() {
    return this.#cedula;
  }

  // SETTERS

  setNombre(unNombre) {
    this.#nombre = unNombre;
  }

  setCedula(unaCedula) {
    this.#cedula = unaCedula;
  }

  // Metodos

  comensalValido() {
    if (this.#nombre === undefined || this.#nombre === null ||
        this.#nombre === ' ') {
      throw new Error('El nombre del comensal no puede ser vacío');
    }
    if (this.#cedula === undefined || this.#cedula === null ||
        this.#cedula === ' ') {
      throw new Error('La cédula del comensal no puede ser vacía');
    }
    if (this.#cedula.length<8 || this.#cedula<9999999) {
      throw new Error('La cédula del comensal' +
            ' tiene que tener al menos 8 caracteres numéricos');
    }
    return true;
  }

  // ToString

  presentar() {
    return this.#nombre + ' - CI: ' + this.#cedula;
  }
}
