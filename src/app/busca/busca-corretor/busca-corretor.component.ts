import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../service/busca.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { CadastroService } from '../../service/cadastro.service';
import { Cidade } from '../../interface/cidade';
import { CommonModule } from '@angular/common';
import { Bairro } from '../../interface/bairro';
import { Corretor, CorretorBusca, CorretorCompleto } from '../../interface/corretor';

@Component({
  selector: 'app-busca-corretor',
  standalone: true,
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './busca-corretor.component.html',
  styleUrl: './busca-corretor.component.css'
})
export class BuscaCorretorComponent implements OnInit {

  usuario: number = 123;

   buscaForm = new FormGroup({
    cidade: new FormControl(''),
    bairro: new FormControl(''),
    tipoImovel: new FormControl('')
    });


  cidadeFiltro: Cidade[] = [];
  bairrosFiltro: Bairro[] = [];
  cidadeSelecionadaNome: string;

  corretores: CorretorBusca[] = [];





  constructor(private buscaService: BuscaService, private cadastroService: CadastroService){}

  ngOnInit() {
    this.getCidade();
    
  }

  getCidade(){
    this.cadastroService.getCidades().subscribe(response => {
      this.cidadeFiltro = response.content;
    })
  }

  buscaBairros(event: any) {
    const codigoIbge = event.target.value;

    this.cadastroService.getCidadesCodigoIbge(codigoIbge).subscribe(response => {
      this.cidadeSelecionadaNome = response.nome;
    })
    
    this.cadastroService.getBairros(codigoIbge).subscribe(response => {
      this.bairrosFiltro = response.content;
    })
    
  }

  callService(){
    const formValues = this.buscaForm.value;
    const bairro = formValues.bairro;
    const tipoImovel = formValues.tipoImovel

    console.log(bairro)

    if(this.cidadeSelecionadaNome && !bairro && !tipoImovel ){
      console.log('aqui')
      const params = {cidades: String.fromCharCode(39) + this.cidadeSelecionadaNome + String.fromCharCode(39)}
      this.buscaCorretor(params);
    }
    if(this.cidadeSelecionadaNome && bairro && !tipoImovel){
      const params = {cidades: this.cidadeSelecionadaNome, bairros: bairro}
      this.buscaCorretor(params);
    }
    if(this.cidadeSelecionadaNome && bairro && tipoImovel){
      const params = {cidades: this.cidadeSelecionadaNome, bairros: bairro, tiposImoveis: tipoImovel}
      this.buscaCorretor(params);
    }
    if(!this.cidadeSelecionadaNome && bairro && !tipoImovel){
      const params = {bairros: bairro}
      this.buscaCorretor(params);
    }
    if(!this.cidadeSelecionadaNome && bairro && tipoImovel){
      const params = {bairros: bairro, tiposImoveis: tipoImovel}
      this.buscaCorretor(params);
    }
    if(!this.cidadeSelecionadaNome && !bairro && tipoImovel){
      const params = {tiposImoveis: tipoImovel}
      this.buscaCorretor(params)
    }

  }

  buscaCorretor(params: any){
    console.log(params)
    this.buscaService.buscaCorretor(this.usuario,params)
    .subscribe(
      resposta => {
        this.corretores = resposta.content;
        console.log('Dados recebidos:', resposta);
        console.log(this.corretores)
      }
    );
  }

}
