export interface FilmeBase {
  id: number;
  titulo: string;
  ano: number;
  genero: string;
  diretor: string;
  duracao: string;
  avaliacao: number;
  imdbID: string;
  sinopse: string;
}

export interface Filme extends FilmeBase {
  imagem: string;
}
