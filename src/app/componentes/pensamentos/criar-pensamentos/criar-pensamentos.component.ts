import { RouterLink, RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { Pensamentos } from '../pensamento';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento: Pensamentos = {
    id: 0,
    conteudo: 'aqui é o conteudo',
    autoria: 'andrew',
    modelo: 'teste'
  }

  criarPensamento() {
    alert('Pensamento crido')
  }

  cancelarPensamento() {
    RouterLink
  }

}
