import React from 'react'
import logo from "../assets/logo.jpeg"
import soy from "../assets/soy.jpg"
import v1 from "../assets/v1.jpg"
import v2 from "../assets/v2.jpg"
import v3 from "../assets/v3.jpg"
import s8 from "../assets/s_8.jpg"
import s3 from "../assets/s_3.jpg"
import s7 from "../assets/s_7.jpg"
import s2 from "../assets/s_2.jpg"
import s1 from "../assets/s_1.jpg"
import s5 from "../assets/s_5.jpg"
import gif1 from "../assets/gif1.gif"
import gif2 from "../assets/gif2.gif"
import gif3 from "../assets/gif3.gif"
import wide from "../assets/wide.jpg"


const EnlaceSVG = ({ href, target }) => {
    return (
        <a href={href} target={target} rel="noopener noreferrer">
            <svg height="55px" style={{ fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: 2 }} version="1.1" viewBox="0 0 512 512" width="100%" xmlSpace="preserve" xmlns="http://www.w3.org/2000/svg" xmlnsSerif="http://www.serif.com/" xmlnsXlink="http://www.w3.org/1999/xlink">
                {/* Copia el contenido SVG completo dentro de esta etiqueta */}
                {/* ... */}
            </svg>
        </a>
    );
};

export default function Home() {
    return (
        <div>
            <div id="sección_1" className="sección">
                <img id="foto1" src={soy} alt="lorena" />
                <div className="texto_1">
                    <h1 style={{ color: 'aliceblue' }}>LORENA RUIZ</h1>
                    <br />
                    <h2 style={{ color: 'aliceblue' }}>
                        Descubre a Colombia a través de los ojos de una experta
                    </h2>
                    <br />
                    <p style={{ color: 'white' }}>
                        Hola, soy Lorena Ruiz, y quiero llevarte a un viaje que cambiará tu
                        forma de ver a Colombia. Con más de una década de experiencia como guía
                        de turismo profesional, he tenido el privilegio de explorar y aprender
                        de algunos de los destinos más hermosos y fascinantes de Colombia.
                        <br></br> ¿Qué me hace diferente? No solo soy una guía de turismo; soy
                        una narradora de historias, una amante apasionada de la cultura y una
                        exploradora incansable. Mi misión es transformar tus viajes en
                        experiencias inolvidables y enriquecedoras.
                    </p>
                </div>
            </div>

            <div id="sección_2" className="sección">
                <div className="texto_2">
                    <h1 id="titulo_2" style={{ color: 'aliceblue' }}>
                        VIAJEMOS CON LORE
                    </h1>
                    <br />
                    <p style={{ color: 'aliceblue' }}>
                        En Viajemos con Lore, no ofrecemos simplemente viajes, ofrecemos aventuras
                        memorables. Mi pasión por la narración de historias y la inmersión cultural se
                        refleja en cada experiencia que creamos. Descubrirás la magia detrás de cada
                        destino a medida que te sumerges en su historia, cultura y tradiciones.
                    </p>
                </div>
                <div className="f_2">
                    <img className="foto_viajemos1" src={v1} alt="v1" />
                    <img className="foto_viajemos1" src={v2} alt="v2" />
                </div>
                <img className="foto_viajemos2" src={v3} alt="v3" />
                <div className="texto_5">
                    <h2 style={{ color: 'aliceblue' }}>Tu confianza es nuestra prioridad:</h2>
                    <br />
                    <p style={{ color: 'aliceblue' }}>
                        Como agencia de turismo, cada detalle de tu viaje está cuidadosamente planificado
                        para que puedas relajarte y disfrutar al máximo. Desde itinerarios bien
                        pensados hasta recomendaciones locales auténticas, estarás en las mejores manos
                        en todo momento.
                    </p>
                </div>
            </div>

            <div id="sección_3" style={{ display: 'block' }} className="sección">
                <div className="fotos_3">
                    <img className="foto_viajemos3" src={s8} alt="s8" />
                    <img className="foto_viajemos3" src={s2} alt="s2" />
                    <img className="foto_viajemos3" src={s3} alt="s3" />
                    <img className="foto_viajemos3" src={s7} alt="s7" />
                </div>
                <br />
                <div className="servicios">
                    <div className="texto_3">
                        <div className="titulo_3">
                            <h1 style={{ color: 'aliceblue' }}>NUESTROS SERVICIOS</h1>
                        </div>
                        <ul style={{ color: 'aliceblue' }}>
                            <li>Turismo Receptivo y Tours privados</li>
                            <li>CityTour Medellín</li>
                            <li>GraffiTour Comuna 13</li>
                            <li>Tour Pablo Escobar</li>
                            <li>Guatapé</li>
                            <li>Destinos Nacionales e Internacionales</li>
                        </ul>
                    </div>
                    <div className="f_4">
                        <img className="foto_viajemos4" src={s1} alt="s1" />
                        <img className="foto_viajemos4" src={s5} alt="s5" />
                    </div>
                </div>
            </div>

            <div id="clientes" class="sección">
                <h1 style={{ color: 'aliceblue' }}>CLIENTES FELICES</h1>
                <div class="fotos_4">
                    <img class="foto_viajemos5" src={gif1} alt="g1" />
                    <img class="foto_viajemos5" src={gif2} alt="g3" />
                    <img class="foto_viajemos5" src={gif3} alt="g2" />
                </div>
            </div>

            <div id="contacto" className="sección">
                <div className="texto_4">
                    <h1 style={{ color: 'aliceblue' }}>CONTACTO</h1>
                    <br />
                    <h3 style={{ color: 'aliceblue' }}>¡Reserva tu próximo viaje con nosotros!</h3>
                    <br />
                    <p style={{ color: 'aliceblue' }}>
                        ¿Listo para embarcarte en una aventura única?
                        <br />
                        Contáctanos para empezar a planificar tu viaje personalizado. En Viajemos con Lore,
                        estamos emocionados por la oportunidad de compartir contigo la belleza y el encanto
                        de Colombia a través de nuestras historias y experiencias.
                        <br />
                        Síguenos en nuestras redes.
                    </p>
                    <br />
                    <div id="correo">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="icon icon-tabler icon-tabler-mail"
                            width="44"
                            height="44"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="#ffffff"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                            <path d="M3 7a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v10a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2v-10z" />
                            <path d="M3 7l9 6l9 -6" />
                        </svg>
                        <br />
                        <div style={{ paddingTop: '12px' }}>
                            <p style={{ color: 'aliceblue' }}>viajemosconlore@gmail.com</p>
                        </div>
                    </div>
                </div>
                <div className="enlaces">
                    <EnlaceSVG href="https://wa.me/573002125224" target="_blank" />
                    <EnlaceSVG href="https://www.facebook.com/viajemosconlore" target="_blank" />
                    <EnlaceSVG href="https://www.instagram.com/viajemosconlore819/" target="_blank" />
                </div>
            </div>

            <img class="bottom" src={wide} alt="bottom" />

            <footer className="footer">
                <img id="logo" src={logo} alt="logo2" />
                <p style={{ color: 'aliceblue' }}>
                    © 2023 Viajemos con Lore. Todos los derechos reservados. Hecho por Eddie
                    Ruiz.
                </p>
            </footer>
        </div>
    )
}
