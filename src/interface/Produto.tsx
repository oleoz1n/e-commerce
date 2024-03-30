export default interface Produto {
    id?: number;
    desc?: string;
    nome: string;
    preco: number;
    imagem: { src: string; alt: string };
    qtd?: number;
}
