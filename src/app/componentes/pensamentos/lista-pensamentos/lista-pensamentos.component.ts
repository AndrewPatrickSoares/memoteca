import { Component } from '@angular/core';

@Component({
  selector: 'app-lista-pensamentos',
  templateUrl: './lista-pensamentos.component.html',
  styleUrls: ['./lista-pensamentos.component.css']
})
export class ListaPensamentosComponent {

  listaPensamentos = [
    {
      conteudo: 'conteudo1',
      autoria: 'teste',
      modelo: 'modelo2'
    },

    {
      conteudo: 'conteudo2',
      autoria: 'teste',
      modelo: 'modelo1'
    },
    {
      conteudo: 'False text com mais de 256 caracteres: Morbi leo mi, nonummy eget, tristique non, rhoncus non, leo. Nullam faucibus mi quis velit. Integer in sapien. Fusce tellus odio, dapibus id, fermentum quis, suscipit id, erat. Fusce aliquam vestibulum ipsum. Aliquam erat volutpat. Pellentesque sapien. Cras elementum. Nulla pulvinar eleifend sem. Cum sociis',
      autoria: 'teste',
      modelo: 'modelo1'
    }
  ]

}
