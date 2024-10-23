import { Routes } from '@angular/router';
import { LoginCorretorComponent } from './login/login-corretor/login-corretor/login-corretor.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina/primeira-pagina.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { CadastroCorretorComponent } from './cadastro/cadastro-corretor/cadastro-corretor.component';

export const routes: Routes = [
    {path: '', component: CadastroCorretorComponent}
];
