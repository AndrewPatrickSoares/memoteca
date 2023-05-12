import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListaPensamentosComponent } from './componentes/pensamentos/lista-pensamentos/lista-pensamentos.component';
import { ExcluirPensamentoComponent } from './componentes/pensamentos/excluir-pensamento/excluir-pensamento.component';
import { EditarPensamentoComponent } from './componentes/pensamentos/editar-pensamento/editar-pensamento.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'lista-pensamentos',
    pathMatch: 'full'
  },

  {
    path: 'criar-pensamentos',
    component: CriarPensamentosComponent
  },

  {
    path:'lista-pensamentos',
    component: ListaPensamentosComponent
  },

  {
    path: 'pensamentos/excluir-pensamento/:id',
    component: ExcluirPensamentoComponent
  },

  {
    path: 'pensamentos/editar-pensamento/:id',
    component: EditarPensamentoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
