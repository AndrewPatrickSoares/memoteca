import { RouterLink, RouterModule } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento = {
    id: '1',
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
