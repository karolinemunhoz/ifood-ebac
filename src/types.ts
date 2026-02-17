export interface Dish {
  id: number
  foto: string
  nome: string
  descricao: string
  porcao: string
  preco: number
}

export interface Restaurant {
  id: number
  titulo: string
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: Dish[]
}
