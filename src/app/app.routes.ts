import { Routes } from '@angular/router';
import { LoginCorretorComponent } from './login/login-corretor/login-corretor/login-corretor.component';
import { PrimeiraPaginaComponent } from './primeira-pagina/primeira-pagina/primeira-pagina.component';
import { CadastroComponent } from './cadastro/cadastro/cadastro.component';
import { CadastroCorretorComponent } from './cadastro/cadastro-corretor/cadastro-corretor.component';
import { BuscaCorretorComponent } from './busca/busca-corretor/busca-corretor.component';
import { ManutencaoCorretorComponent } from './atualiza-dados/manutencao-corretor/manutencao-corretor.component';

export const routes: Routes = [
    {path: '', component: PrimeiraPaginaComponent},
    {path: 'busca-corretor', component: BuscaCorretorComponent},
    {path: 'login/:name', component: LoginCorretorComponent},
    {path: 'inicial', component: PrimeiraPaginaComponent},
    {path: 'cadastro-usuario', component: CadastroComponent},
    {path: 'cadastro-corretor', component: CadastroCorretorComponent},
    {path: 'atualizar-corretor', component: ManutencaoCorretorComponent}
    
];
