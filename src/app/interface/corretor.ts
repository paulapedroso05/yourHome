import { Bairro } from "./bairro";
import { Cidade, CidadeBairro, CidadeRetorno } from "./cidade";
import { Usuario, UsuarioCorretor } from "./usuario";

export class Corretor{
  telefone!:string;
  creci!:string;
  bio!:string;
}

export class CorretorCompleto{
  telefone !: string;
  bio !: string;
  creci !: string;
    usuario!:UsuarioCorretor;
    tiposImoveis!:TiposImoveis[];
    construtoras!:Construtoras[];
    cidadesBairros!:CidadeBairro[];
    cidades!:CidadeRetorno[];
    

}

export class CorretorBusca {
  creci:string;
  nome:string;
  email:string;
  telefone:string;
  bio:string;
  tiposImoveis!:TiposImoveis[];
    construtoras!:Construtoras[];
    cidades!:CidadeRetorno[];
    bairros:Bairro[];

}

export class TiposImoveis {
  nome !: string;
}

export class Construtoras {
  nome !: string;
}