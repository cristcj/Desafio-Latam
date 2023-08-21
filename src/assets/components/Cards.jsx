import { Card } from "react-bootstrap"
import Tags  from "./Tags"



const Cards = ({nombre, image, description, botonColor, botonTexto}) => {
  return (
    <>
    <Card style={{ width: '12rem' }}>
      <Card.Img variant="top" src={image} />
      <Card.Body>
        <Card.Title>{nombre}</Card.Title>
        <Card.Text>{description}</Card.Text>
       <Tags botonColor={botonColor} botonTexto={botonTexto} />
      </Card.Body>
    </Card>
    
    
    </>
  )
}

export default Cards