import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';

@Component({
    selector: 'app-root',
    templateUrl: './estudoscomparativos.component.html',
    styleUrls: ['./estudoscomparativos.component.css']
  })


export class estudoscomparativosComponent {

    tabela: Pesquisador[] =  [];
    xlscarregado: boolean = false;

    onMove(): void {
        let xls: boolean = false;
        // checar se xls está carregado

        if (xls){
            this.xlscarregado = true;
        }
        else{
            this.xlscarregado = false;
        }
     }

     gerarEstudo():void{
        if (!this.xlscarregado) {
          alert('nenhum arquivo carregado');
        }else{
            //gerar estudo
        }
     }

     passarPesos
}

