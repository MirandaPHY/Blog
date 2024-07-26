import './Home.css';
import { Button, } from 'react-bootstrap';



function Home() {
    
    return (
        <main>
           <h1>Conte Sua Historia</h1>
           <p>Conte sua historia e compartilhe com o mundo</p>
           <p>Seja bem vindo ao nosso site</p>

           <textarea name="comentarios" rows="10" cols="180" maxlength="1000"></textarea>
                    <Button
                        variant="dark"
                        className=" button mt-3 mb-3"
                        type="submit">
                        Enviar
                    </Button>
                    <Button
                        variant="dark"
                        className=" button mt-3 mb-3"
                        type="submit">
                        Limpa
                    </Button>



                    <h2>Historias </h2>
                    <p>Historias que você pode ler</p>

                    <h3>Paulo</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem vero doloremque distinctio eligendi! Facere consectetur a aliquam debitis mollitia numquam illo ipsa eaque modi voluptas eius, corporis esse dolore quam.</p>

                    <h3>Kathleen</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro reprehenderit eveniet necessitatibus assumenda rerum eaque tenetur cumque quo explicabo a, molestiae libero dolorum quam minus quidem atque nemo beatae. Eum.</p>

                    <h3>ALcimar</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique a numquam corporis, optio voluptates, eaque eos autem, dolor eius atque libero nostrum quidem consequatur odio animi! Iste, hic asperiores.</p>

                    <h3>Handerson</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique a numquam corporis, optio voluptates, eaque eos autem, dolor eius atque libero nostrum quidem consequatur odio animi! Iste, hic asperiores.</p>

                    <h3>Clever</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat similique a numquam corporis, optio voluptates, eaque eos autem, dolor eius atque libero nostrum quidem consequatur odio animi! Iste, hic asperiores.</p>
        </main>
    );


}


export default Home;