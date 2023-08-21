
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Cards from './assets/components/Cards';
import Footer from './assets/components/Footer';
import Header from './assets/components/Header';
import Perrito from "./assets/imagenes/perro1.jpeg"
import Perrito2 from "./assets/imagenes/perro2.jpeg"
import Perrito3 from "./assets/imagenes/perro3.jpeg"
import Perrito4 from "./assets/imagenes/perro4.jpeg"





function App() {

  return (
   <>
   <section className="header">

    <Header titulo="Adopta un Perrito"/>

    </section>


    <section className="contenedor">
        <article classname="card">

    <Cards
    image={Perrito}
    nombre="Igor"
    description="Lleno de energia y listo para jugar. ¡Dale a Igor el hogar amoroso que se merece!"
    botonColor="primary"
    botonTexto="Pequines"
    />
    

      
    <Cards
    image={Perrito2}
    nombre="Facundo"
    description="Es jugueton, amigable y se lleva bien con los niños y otros animales."
    botonColor="success"
    botonTexto="Yorkshire"
    />
      

    <Cards
    image={Perrito3}
    nombre="Anastasio"
    description="Un perro de tamaño pequeño con un gran corazon. Hazte amigo de Anastasio y experimenta un amor incondicional!"
    botonColor="danger"
    botonTexto="Chihuahua"
    />

    <Cards
    image={Perrito4}
    nombre="Ruperta"
    description="Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Ruperta a encontrar su final feliz!"
    botonColor="info"
    botonTexto="Shih Tzu"
    />

        </article>
    </section>




    <footer>
    <Footer text="Explora nuestra galeria de adopcion de perros para encontrar a tu compañero perfecto. Tenemos una variedad de perros con diferentes personalidades y tamaños, todos en busca de un hogar amoroso. Cada imagen captura su esencia unica. Adopta un perro y brindale una segunda oportunidad. Encuentra a tu compañero peludo para siempre."/>
    </footer>

    </>
  );
}

export default App;
