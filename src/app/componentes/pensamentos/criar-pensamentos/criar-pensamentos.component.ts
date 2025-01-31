import { Router, RouterLink } from '@angular/router';
import { Component } from '@angular/core';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-criar-pensamentos',
  templateUrl: './criar-pensamentos.component.html',
  styleUrls: ['./criar-pensamentos.component.css']
})
export class CriarPensamentosComponent {

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1'
  }

  constructor(private service: PensamentoService, private router: Router) { }

  criarPensamento() {
    this.service.criar(this.pensamento).subscribe(() => {
      return this.router.navigate(['/lista-pensamentos'])
    })
  }

  cancelarPensamento() {
    return this.router.navigate(['/lista-pensamentos'])
  }

}
