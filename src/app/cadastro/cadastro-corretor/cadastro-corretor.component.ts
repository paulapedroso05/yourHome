import { Component, OnInit } from '@angular/core';
import { CorretorCompleto} from '../../interface/corretor';
import { ReactiveFormsModule, FormControl, FormGroup} from '@angular/forms';
import { UsuarioCorretor } from '../../interface/usuario';
import { Cidade } from '../../interface/cidade';
import { Bairro } from '../../interface/bairro';
import { CadastroService } from '../../service/cadastro.service';
import { CommonModule } from '@angular/common';
import { CidadeBairro } from '../../interface/cidade';
import { CidadeRetorno } from '../../interface/cidade';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro-corretor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './cadastro-corretor.component.html',
  styleUrl: './cadastro-corretor.component.css'
})
export class CadastroCorretorComponent implements OnInit {

  corretorForm = new FormGroup({
    nome: new FormControl(''),
    cpf: new FormControl(''),
    telefone: new FormControl(''),
    email: new FormControl(''),
    cidade: new FormControl([]),
    bairro: new FormControl<number[]>([]),
    tipoImovel: new FormControl([]),
    construtora: new FormControl(''),
    creci: new FormControl('')
  });

  cidadeGet: Cidade[] = [];
  bairros?: Bairro[] = [];

  corretorCompleto: CorretorCompleto;
  usuario: UsuarioCorretor;

  cidadeSelecionada: number[] = [];
  cidadeSelecionadaId: number;
  bairrosSelecionada: number[] = [];
  tipoImovelSelecionado: string[] = [];
  construtoraSelecionada: string[] = [];


  cidades: CidadeRetorno[] = []; 
  cidadesBairros: CidadeBairro[] = [];
  
  cidade: number[] = [];



  constructor(private cadastroService: CadastroService, private router:Router){}

  ngOnInit() {
    this.buscaCidades();
    
  }

  buscaCidades(){
    this.cadastroService.getCidades().subscribe(response => {
      this.cidadeGet = response.content;
    })
  }

  buscaBairros(event: any) {
    const codigoIbge = JSON.parse(event.target.value);
  
    this.cadastroService.getCidadesCodigoIbge(codigoIbge).subscribe(response => {
      this.cidadeSelecionadaId = response.idCidade;
    })
    

    this.cadastroService.getBairros(codigoIbge).subscribe(response => {
      this.bairros = response.content;
    })
    
  }

  bairrosSelecionados(event: any){
    const id = event.target.value; 
    this.bairrosSelecionada.push(id);
  }

  tipoImovelSelecionados(event: any){
    const nome = event.target.value; 
    this.tipoImovelSelecionado.push(nome);
  }

  construtorasSelecionadas(event: any){
    const nome = event.target.value; 
    this.construtoraSelecionada.push(nome);
  }


  atribuiValores() {
    const formValues = this.corretorForm.value;
    
    this.usuario = {
      nome: formValues.nome || '',
      cpf: formValues.cpf || '',
      email: formValues.email || ''
    } 

    this.cidadesBairros.push({
      cidadeFk: this.cidadeSelecionadaId,
      bairroFk: this.bairrosSelecionada[0]
    });

    this.cidades.push({
      cidadeFk: this.cidadeSelecionadaId
    });


      this.corretorCompleto = {
        telefone: formValues.telefone || '',
        creci: formValues.creci || '',
        bio: '',
        usuario: this.usuario,
        tiposImoveis: this.tipoImovelSelecionado.map(nome => ({ nome })),
        construtoras: this.construtoraSelecionada.map(nome => ({nome})),
        cidadesBairros: this.cidadesBairros,
        cidades: this.cidades
      }
  }

  enviaDados(){

    this.atribuiValores();

    console.log(this.corretorCompleto);

    if (this.corretorCompleto !== undefined){
      this.cadastroService.addCorretor(this.corretorCompleto).subscribe(response => {
        console.log(response);
          this.router.navigate(['/atualizar-corretor']);
      })
    }

  }

  

}
