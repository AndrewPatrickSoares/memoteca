import { Component, Input } from '@angular/core';
import { Pensamentos } from '../pensamento';

@Component({
  selector: 'app-pensamento',
  templateUrl: './pensamento.component.html',
  styleUrls: ['./pensamento.component.css']
})
export class PensamentoComponent {

  @Input() pensamento: Pensamentos = {
    id: 0,
    conteudo: 'Treinando Angular',
    autoria: 'Andrew Soares',
    modelo: 'modelo2'
  }

  larguraPensamento(): string {
    if(this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g'
    }
    return 'pensamento-p'
  }

}
