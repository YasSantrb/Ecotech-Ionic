export interface Doacao {
id?: number;
nome_doacao: string;
especificacao?: string;
endereco?: string;
descricao_geral?: string;
observacao?: string;
condicao: 'novo' | 'usado' | 'para peças';
foto_url?: string; 
}