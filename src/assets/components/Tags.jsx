import Badge from "react-bootstrap/Badge";

const Tags = ({botonColor, botonTexto}) => {
    return (
      <>
            <Badge bg={botonColor}>{botonTexto}</Badge>

            </>
    );
};

export default Tags; 