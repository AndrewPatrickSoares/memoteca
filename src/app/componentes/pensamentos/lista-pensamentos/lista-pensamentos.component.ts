import { Component } from '@angular/core';
import { Pensamentos } from '../pensamento';

@Component({
  selector: 'app-lista-pensamentos',
  templateUrl: './lista-pensamentos.component.html',
  styleUrls: ['./lista-pensamentos.component.css']
})
export class ListaPensamentosComponent {

  listaPensamentos: Pensamentos[] = []

}
