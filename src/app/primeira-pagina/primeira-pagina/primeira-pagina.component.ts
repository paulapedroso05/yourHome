import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primeira-pagina',
  standalone: true,
  imports: [],
  templateUrl: './primeira-pagina.component.html',
  styleUrl: './primeira-pagina.component.css'
})
export class PrimeiraPaginaComponent {

  constructor(private router:Router){}

  direcionarLoginCorretor(name: string){
    this.router.navigate(['/login', name]);
  }

  direcionarLoginUsuario(name: string){
    this.router.navigate(['/login', name]);
  }


}
