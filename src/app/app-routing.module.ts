import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CriarPensamentosComponent } from './componentes/pensamentos/criar-pensamentos/criar-pensamentos.component';
import { ListaPensamentosComponent } from './componentes/pensamentos/lista-pensamentos/lista-pensamentos.component';

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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
