import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-corretor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-corretor.component.html',
  styleUrl: './login-corretor.component.css'
})
export class LoginCorretorComponent {
  name!:string;
  senhaC!:string;
  senhaU!:string;
  creci!:number;
  usuario!:string;

  constructor(private route:ActivatedRoute, private router:Router){}

  ngOnInit() {
    this.name = this.route.snapshot.paramMap.get('name')!;
  }

  buscarCorretor(){
    this.router.navigate(['/busca-corretor']);
  }

  editarPerfil(){
    this.router.navigate(['/atualizar-corretor'])
  }

  cadastroCorretor(){
    this.router.navigate(['/cadastro-corretor']);
  }

  cadastroUsuario(){
    this.router.navigate(['/cadastro-usuario']);
  }

}
