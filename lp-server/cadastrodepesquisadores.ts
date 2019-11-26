import { Pesquisador } from '../common/pesquisador';

export class CadastroDePesquisadores {
  pesquisadores: Pesquisador[] = [];

  constructor() {
    this.pesquisadores = [];
  }

  //methods go here
  addPesquisador(p: Pesquisador): Pesquisador {
    let result = null;

    // vereify if pesquisador is already here
    result = new Pesquisador;
    result.copyFrom(p);

    let pesqIndex = this.getIndex(result);

    if(pesqIndex === -1) {
      this.pesquisadores.push(p);
    } else {
      this.pesquisadores[pesqIndex] = result;
    }

    return result;
  }

  getIndex(p: Pesquisador): number {
    for(let i = 0; i < this.pesquisadores.length; i++) {
      if(this.pesquisadores[i].nome === p.nome) {
        return i;
      }
    }

    return -1;
  }

  getPesquisadores(): Pesquisador[] {
    return this.pesquisadores;
  }
}