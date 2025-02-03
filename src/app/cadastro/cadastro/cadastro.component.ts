import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';
import { Usuario } from '../../interface/usuario';

@Component({
  selector: 'app-cadastro',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './cadastro.component.html',
  styleUrl: './cadastro.component.css'
})
export class CadastroComponent {

  constructor(private cadastroService:CadastroService){}

  usuario!:Usuario;

  usuarioForm = new FormGroup({
      nome: new FormControl(''),
      cpf: new FormControl(''),
      email: new FormControl('')
    });

    atribuiValores() {
      const formValues = this.usuarioForm.value;
      this.usuario = {
        nome: formValues.nome || '',
        documento: formValues.cpf || '',
        email: formValues.email || '',
        telefone: '16992837405'
      }
    }

    enviarDados(){

      this.atribuiValores();
      console.log(this.usuario)

      if (this.usuario!== undefined){
        this.cadastroService.addUsuario(this.usuario).subscribe(response => {
          console.log(response);
        })
      }
    }
}
