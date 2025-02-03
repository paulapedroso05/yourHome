export class Cidade {
    id!:number;
    nome!:string;
    codigoIbge!:string;
}

export class CidadeRetorno {
    cidadeFk!: number;
}

export class CidadeBairro {
    cidadeFk:number;
    bairroFk!:number;
}