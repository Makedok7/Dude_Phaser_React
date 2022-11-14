import Nav from './Nav'
import "../styles/inicio-style.css"
import { Link } from 'react-router-dom'

export default function Home() {
    return (
        <div className='bg-dark' style={{ height: "1000px" }}>
            {Nav()}
            <div id="div1" className="container">
                <div className="Titulo" id="titulo">
                    <header>
                        <h1>Grupo 16</h1>
                    </header>
                </div>
                <dl id="nav">
                    <dt className="nav-item">Mecedo Facundo</dt>
                </dl>
                <div id="juego" >
                    <h1>Dude Phaser</h1>
                    <Link to='/juego' className='text-decoration-none'>
                        <button className="boton">Iniciar Juego</button>
                    </Link>
                </div>
                <div className="row ">
                    <section id="img1" className='col'>
                        <img src="../images/logoPhaser.png" width="350" height="350" alt="LogoJuego" className='img-fluid rounded' />
                    </section>
                </div>
            </div>
        </div>
    )
}