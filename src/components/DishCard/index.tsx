import { Card, Title, Description, Button, Image } from './styles'

type Props = {
  name: string
  description: string
  image: string
}

const DishCard = ({ name, description, image }: Props) => (
  <Card>
    <Image src={image} alt={name} />
    <Title>{name}</Title>
    <Description>{description}</Description>
    <Button type="button" title="Adicionar">
      Adicionar ao carrinho
    </Button>
  </Card>
)

export default DishCard
