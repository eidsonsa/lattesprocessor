
import { Component, OnInit } from '@angular/core';
import { Pesquisador } from '../../../../common/pesquisador';
import { PesquisadorService } from './pesquisador.service';

@Component({
  selector: 'app-root',
  templateUrl: './pesquisadores.component.html',
  styleUrls: ['./pesquisadores.component.css']
})

export class PesquisadoresComponent implements OnInit {

  pesquisadores: Pesquisador[];

  constructor(private pesquisadorService: PesquisadorService) { }

  onMove(): void {

  }

  ngOnInit(): void {
    this.pesquisadorService.getPesquisadores()
      .subscribe(
        ps => { this.pesquisadores = ps; },
        msg => { alert(msg.message); }
      );
  }
}
