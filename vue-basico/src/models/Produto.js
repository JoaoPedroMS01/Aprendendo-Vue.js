import mascaraDeData from '@/utils/conversor-data';

export default class Produto {
    constructor(obj) {
        obj = obj || {};
        
        this.id = obj.id;
        this.nome = obj.nome;
        this.valor = obj.valor || 0;
        this.quantidadeEstoque = obj.quantidadeEstoque || 0;
        this.dataCadastro = obj.dataCadastro && mascaraDeData.aplicarMascaraFormatoAmericanoEmDataIso(obj.dataCadastro);
        this.observacao = obj.observacao;
    }

    modeloValidoParaCadastro() {
        return !!this.nome;
    }

    modeloValidoParaAtualizacao() {
        return !! (this.id && this.nome);
    }
}