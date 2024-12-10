<template>
    <body>
        <NavBar />
        <div class="content">
            <section id="about-us-section" class="aboutUs">
                <div class="col-md-6">
                    <h2 class="section-title-about">Quiénes Somos</h2>
                    <p class="about-us-text">Somos una academia dedicada a enseñar los mejores estilos de baile,
                        brindando una experiencia única para todos los niveles de habilidad. Nuestro equipo de
                        instructores profesionales está comprometido con el éxito y el crecimiento personal de cada
                        estudiante.</p>
                    <a href="https://www.instagram.com/ln7dancestudio_/" class="conocenos">Conócenos.</a>
                </div>
                <div class="about-video-container">
                    <video id="aboutUsVideoPlayer" class="about-us-video img-fluid"
                    src="../../../public/video/Dance.mp4" controls></video>
                </div>
            </section>

            <section id="team" class="team">
                <h2 class="text-center text-white ourteam">Nuestro Equipo</h2>
                <div class="team-cards">
                    <div class="instructor-card">
                        <div class="instructor-img">
                            <img src="../../../public/images/Afro_luis.png" alt="">
                        </div>
                        <div class="instructor-info">
                            <h3>Luis</h3>
                            <p><strong>Habilidades:</strong> Afro Dance</p>
                            <p><strong>Descripción:</strong> Experto en ritmos afro.</p>
                            <p><strong>Experiencia:</strong> 5 años.</p>
                            <p><strong>Mejor Movimiento:</strong> Afro Beats.</p>
                            <p><strong>Popularidad:</strong></p>
                            <div class="star-rating">★★★★★</div>
                        </div>
                    </div>
                    <div class="instructor-card">
                        <div class="instructor-img">
                            <img src="../../../public/images/Chokola_t.png" alt="">
                        </div>
                        <div class="instructor-info">
                            <h3>Chokola T</h3>
                            <p><strong>Habilidades:</strong> Perreo</p>
                            <p><strong>Descripción:</strong> Experto en ritmos afro.</p>
                            <p><strong>Experiencia:</strong> 8 años.</p>
                            <p><strong>Mejor Movimiento:</strong> Movimiento de cadera.</p>
                            <p><strong>Popularidad:</strong></p>
                            <div class="star-rating">★★★★</div>
                        </div>
                    </div>
                    <div class="instructor-card">
                        <div class="instructor-img">
                            <img src="../../../public/images/Brandon.png" alt="">
                        </div>
                        <div class="instructor-info">
                            <h3>Brandon</h3>
                            <p><strong>Habilidades:</strong> Electro Dance</p>
                            <p><strong>Descripción:</strong> Experto en ritmos Electro.</p>
                            <p><strong>Experiencia:</strong> 6 años.</p>
                            <p><strong>Mejor Movimiento:</strong> handstand.</p>
                            <p><strong>Popularidad:</strong></p>
                            <div class="star-rating">★★</div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="classes">
                <h2 class="text-center text-white">Nuestras Clases</h2>
                <p class="text-center text-white">Ven y disfruta de nuestras clases presenciales grupales, personalizadas,
                    semipersonalizadas y recuerda que también tenemos clases a domicilio!</p>
                
                <div id="clasesCarousel" class="carousel-container">
                    <div class="carousel-images">
                        <img src="../../../public/images/Bachata.png" alt="Bachata">
                        <img src="../../../public/images/Salsa.png" alt="Salsa">
                        <img src="../../../public/images/AfroDance.png" alt="Afrobeat">
                    </div>
                    <div class="carousel-images">
                        <img src="../../../public/images/Champeta.jpg" alt="Champeta">
                        <img src="../../../public/images/merengue.jpg" alt="Merengue">
                        <img src="../../../public/images/PolDance.png" alt="Pole Dance">
                    </div>
                </div>
            </section>

            <section id="ln7-faqs" class="faqs">
                <div class="faqs-box">
                    <h2 class="text-center">Preguntas más frecuentes</h2>
                    <ul class="nav nav-tabs mb-4" id="ln7-faq-tabs">
                        <li class="nav-item">
                            <a class="nav-link active" data-bs-toggle="tab" href="#faq-category-1">LN7 FAQs</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#faq-category-2">General</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" data-bs-toggle="tab" href="#faq-category-3">Ubicación</a>
                        </li>
                    </ul>
                
                    <!-- Contenido de las pestañas -->
                    <div class="tab-content">
                        <!-- LN7 FAQs -->
                        <div class="tab-pane fade show active" id="faq-category-1">
                            <div class="accordion" id="ln7-faqs-ln7">
                                <!-- Pregunta 1 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ln7-q1">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ln7-a1" aria-expanded="true" aria-controls="ln7-faq-ln7-a1">
                                            ¿Cómo puedo ver los horarios de clases?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ln7-a1" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-ln7-q1" data-bs-parent="#ln7-faqs-ln7">
                                        <div class="accordion-body">
                                            Puedes ver los horarios de clases en la sección de horarios de nuestra página web.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 2 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ln7-q2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ln7-a2" aria-expanded="false" aria-controls="ln7-faq-ln7-a2">
                                            ¿Cómo puedo hacer una reserva?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ln7-a2" class="accordion-collapse collapse" aria-labelledby="ln7-faq-ln7-q2"
                                        data-bs-parent="#ln7-faqs-ln7">
                                        <div class="accordion-body">
                                            Puedes hacer una reserva a través de nuestra aplicación o en la recepción del estudio.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 3 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ln7-q3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ln7-a3" aria-expanded="false" aria-controls="ln7-faq-ln7-a3">
                                            ¿Es necesario comprar matrícula?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ln7-a3" class="accordion-collapse collapse" aria-labelledby="ln7-faq-ln7-q3"
                                        data-bs-parent="#ln7-faqs-ln7">
                                        <div class="accordion-body">
                                            No es necesario comprar matrícula, pero te recomendamos registrarte para recibir
                                            beneficios adicionales.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 4 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ln7-q4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ln7-a4" aria-expanded="false" aria-controls="ln7-faq-ln7-a4">
                                            ¿Qué significa: BAS, INT, AVAN?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ln7-a4" class="accordion-collapse collapse" aria-labelledby="ln7-faq-ln7-q4"
                                        data-bs-parent="#ln7-faqs-ln7">
                                        <div class="accordion-body">
                                            Estos términos se refieren a los niveles de las clases: Básico (BAS), Intermedio (INT),
                                            y Avanzado (AVAN).
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 5 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ln7-q5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ln7-a5" aria-expanded="false" aria-controls="ln7-faq-ln7-a5">
                                            ¿Qué es Elenco?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ln7-a5" class="accordion-collapse collapse" aria-labelledby="ln7-faq-ln7-q5"
                                        data-bs-parent="#ln7-faqs-ln7">
                                        <div class="accordion-body">
                                            Elenco es un grupo de bailarines seleccionados para representar al estudio en
                                            competiciones y eventos especiales.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <!-- General -->
                        <div class="tab-pane fade general-faq" id="faq-category-2">
                            <div class="accordion" id="ln7-faqs-general">
                                <!-- Pregunta 1 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-general-q1">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-general-a1" aria-expanded="true"
                                            aria-controls="ln7-faq-general-a1">
                                            ¿Cuáles son los horarios de Bureo Dance Studio?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-general-a1" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-general-q1" data-bs-parent="#ln7-faqs-general">
                                        <div class="accordion-body">
                                            Los horarios varían según el día y el tipo de clase. Consulta nuestra página web para
                                            ver el horario completo.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 2 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-general-q2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-general-a2" aria-expanded="false"
                                            aria-controls="ln7-faq-general-a2">
                                            ¿Cómo hago para matricularme?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-general-a2" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-general-q2" data-bs-parent="#ln7-faqs-general">
                                        <div class="accordion-body">
                                            Puedes matricularte en línea a través de nuestro sitio web o visitando el estudio en
                                            persona.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 3 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-general-q3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-general-a3" aria-expanded="false"
                                            aria-controls="ln7-faq-general-a3">
                                            ¿Cómo puedo comprar un paquete de clases?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-general-a3" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-general-q3" data-bs-parent="#ln7-faqs-general">
                                        <div class="accordion-body">
                                            Los paquetes de clases se pueden comprar en línea o en la recepción del estudio.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 4 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-general-q4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-general-a4" aria-expanded="false"
                                            aria-controls="ln7-faq-general-a4">
                                            ¿Qué métodos de pago aceptan?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-general-a4" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-general-q4" data-bs-parent="#ln7-faqs-general">
                                        <div class="accordion-body">
                                            Aceptamos pagos con tarjeta de crédito, débito y transferencias bancarias.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 5 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-general-q5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-general-a5" aria-expanded="false"
                                            aria-controls="ln7-faq-general-a5">
                                            ¿Ofrecen clases para principiantes?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-general-a5" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-general-q5" data-bs-parent="#ln7-faqs-general">
                                        <div class="accordion-body">
                                            Sí, ofrecemos una variedad de clases diseñadas específicamente para principiantes.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                        <!-- Ubicación -->
                        <div class="tab-pane fade" id="faq-category-3">
                            <div class="accordion" id="ln7-faqs-ubicacion">
                                <!-- Pregunta 1 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ubicacion-q1">
                                        <button class="accordion-button" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ubicacion-a1" aria-expanded="true"
                                            aria-controls="ln7-faq-ubicacion-a1">
                                            ¿Dónde están ubicados?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ubicacion-a1" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-ubicacion-q1" data-bs-parent="#ln7-faqs-ubicacion">
                                        <div class="accordion-body">
                                            Estamos ubicados en el centro de la ciudad, en la Calle 123, Edificio ABC.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 2 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ubicacion-q2">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ubicacion-a2" aria-expanded="false"
                                            aria-controls="ln7-faq-ubicacion-a2">
                                            ¿Tienen estacionamiento?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ubicacion-a2" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-ubicacion-q2" data-bs-parent="#ln7-faqs-ubicacion">
                                        <div class="accordion-body">
                                            Sí, contamos con un estacionamiento subterráneo para nuestros clientes.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 3 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ubicacion-q3">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ubicacion-a3" aria-expanded="false"
                                            aria-controls="ln7-faq-ubicacion-a3">
                                            ¿Cómo puedo llegar en transporte público?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ubicacion-a3" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-ubicacion-q3" data-bs-parent="#ln7-faqs-ubicacion">
                                        <div class="accordion-body">
                                            Puedes llegar en metro, autobús o taxi. La estación de metro más cercana es la Estación
                                            XYZ.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 4 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ubicacion-q4">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ubicacion-a4" aria-expanded="false"
                                            aria-controls="ln7-faq-ubicacion-a4">
                                            ¿Tienen sucursales en otras ciudades?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ubicacion-a4" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-ubicacion-q4" data-bs-parent="#ln7-faqs-ubicacion">
                                        <div class="accordion-body">
                                            Por el momento, solo tenemos esta ubicación, pero estamos planeando expandirnos en el
                                            futuro.
                                        </div>
                                    </div>
                                </div>
                                <!-- Pregunta 5 -->
                                <div class="accordion-item">
                                    <h2 class="accordion-header" id="ln7-faq-ubicacion-q5">
                                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                                            data-bs-target="#ln7-faq-ubicacion-a5" aria-expanded="false"
                                            aria-controls="ln7-faq-ubicacion-a5">
                                            ¿Cuáles son sus horas de operación?
                                        </button>
                                    </h2>
                                    <div id="ln7-faq-ubicacion-a5" class="accordion-collapse collapse"
                                        aria-labelledby="ln7-faq-ubicacion-q5" data-bs-parent="#ln7-faqs-ubicacion">
                                        <div class="accordion-body">
                                            Estamos abiertos de lunes a viernes de 9:00 AM a 9:00 PM y los sábados de 10:00 AM a
                                            6:00 PM.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section id="pricing" class="pricing">
                <div class="pricing-container">
                    <h2 class="text-center mb-4">Nuestros Planes</h2>
                    <div class="card-container">
                        <!-- Plan Básico -->
                        <div class="card-pricing h-100">
                            <div class="card-body">
                                <h4 class="card-title">Plan Básico</h4>
                                <p class="card-text text-black">
                                    Ideal para quienes están empezando. Incluye acceso limitado a funciones básicas:
                                    <ul>
                                        <li class="text-black">Acceso a 5 clases mensuales</li>
                                        <li class="text-black">Soporte por correo electrónico</li>
                                        <li class="text-black">Acceso a la comunidad de usuarios</li>
                                    </ul>
                                </p>
                                <a href="https://wa.me/3184217657?text=Estoy%20interesado%20en%20el%20Plan%20Básico" target="_blank" class="btn btn-primary">Elegir Plan</a>
                            </div>
                        </div>
                    
                        <!-- Plan Intermedio -->
                        <div class="card-pricing h-100">
                            <div class="card-body">
                                <h4 class="card-title">Plan Intermedio</h4>
                                <p class="card-text text-black">
                                    Perfecto para quienes desean más flexibilidad. Incluye funciones adicionales:
                                    <ul>
                                        <li class="text-black">Acceso a 15 clases mensuales</li>
                                        <li class="text-black">Soporte por correo electrónico y chat</li>
                                        <li class="text-black">Acceso prioritario a eventos en vivo</li>
                                    </ul>
                                </p>
                                <a href="https://wa.me/3184217657?text=Estoy%20interesado%20en%20el%20Plan%20Intermedio" target="_blank" class="btn btn-primary">Elegir Plan</a>
                            </div>
                        </div>
                    
                        <div class="card-pricing h-100">
                            <div class="card-body">
                                <h4 class="card-title">Plan Avanzado</h4>
                                <p class="card-text text-black">
                                    Para los usuarios más exigentes. Incluye todas las funciones premium:
                                    <ul>
                                        <li class="text-black">Acceso ilimitado a clases</li>
                                        <li class="text-black">Soporte personalizado 24/7</li>
                                        <li class="text-black">Acceso VIP a todos los eventos y recursos</li>
                                    </ul>
                                </p>
                                <a href="https://wa.me/3184217657?text=Estoy%20interesado%20en%20el%20Plan%20Avanzado" target="_blank" class="btn btn-primary">Elegir Plan</a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />
    </body>
</template>

<script>
import NavBar from "@/components/NavBArComponent.vue"
import Footer from "@/components/FooterComponent.vue"
export default {
    components: {
        NavBar,
        Footer
    }
}
</script>

<style scoped>
    @import '../../assets/styles/Main.css';

    body{
        background: linear-gradient(317deg, #5f2f9a, #076a81, #b269cd);
        display: flex;
        flex-direction: column;
    }

    .content{
        flex: 1;
        display: flex;
        flex-direction: column;
    }


/*//////////////////////////////////////////////////////////////*/
    .aboutUs{
        padding: 130px 40px 40px;
        gap: 30px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }

    .about-video-container {
        max-width: 100%;
    }

    .section-title-about {
        font-size: 2.5rem;
        margin-bottom: 20px;
    }

    .about-us-text {
        font-size: 1.2rem;
        line-height: 1.6;
    }

    .conocenos{
        color: black;
        opacity: 0.7;
        transition: 0.3s;
    }

    .conocenos:hover{
        color: rgb(255, 255, 255);
        opacity: 1;
    }


/*//////////////////////////////////////////////////////////////*/
    .team{
        width: 100%;
        padding-bottom: 50px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
        background: linear-gradient(180deg, #2b2b2b, #076a81, #2b2b2b);
    }

    .ourteam{
        padding: 35px;
        font-size: 2rem;
    }

    .team-cards{
        width: 100%;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .instructor-card {
        perspective: 1000px;
        height: 200px;
        position: relative;
        height: auto;
    }
    
    .instructor-img img {
        width: 100%;
        height: 400px;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }

    .instructor-info {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(0, 0, 0, 0.85);
        color: white;
        border-radius: 10px;
        backface-visibility: hidden;
        transform: rotateY(180deg);
        padding: 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;
        opacity: 0;
    }

    .instructor-card:hover .instructor-img img{
        transform: scale(1.05);
        transition: 0.5s;
    }

    .instructor-card:hover .instructor-info {
        opacity: 1;
        transform: scale(1);
    }

    .instructor-card .star-rating {
        color: #ffd700;
        font-size: 1.5em;
    }


/*//////////////////////////////////////////////////////////////*/
    .classes{
        width: 100%;
        height: 650px;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        align-items: center;
        color: rgb(255, 255, 255);
    }

    .classes h2{
        font-size: 2rem;
    }

    .classes p{
        font-size: 1rem;
        font-weight: 500;
        color: #000000;
    }

    .carousel-container {
        position: relative;
        display: flex;
        gap: 70px;
        flex-direction: column;
        align-items: center;
        width: 100%;
    }

    .carousel-images {
        width: 100%;
        position: relative;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
    }

    .carousel-images img {
        width: 240px;
        border-radius: 25px;
        height: 200px;
        transition: transform 1s ease, opacity 1s ease;
    }


/*//////////////////////////////////////////////////////////////*/

    .faqs{
        display: flex;
        justify-content: center;
        padding: 50px;
        align-items: center;
        color: rgb(255, 255, 255);
    }

    .faqs-box {
        background: linear-gradient(180deg, #2b2b2b, #076a81, #2b2b2b);
        background: #2b2b2b;
        width: 70%;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    }

    .nav-link {
        color: rgb(255, 255, 255);
        width: 100px;
        text-align: center;
    }

    .nav-link.active {
        background-color: #b269cd;
        color: #2b2b2b;
        font-weight: 600;
        border-radius: 4px;
    }

    .accordion-button {
        background-color: #5f2f9a;
        color: white;
        font-weight: 500;
        padding: 3px;
    }

    .accordion-button:not(.collapsed) {
        background-color: #b269cd;
        color: #2b2b2b;
    }

    .accordion-body {
        background-color: #f1f1f1;
        border-radius: 4px;
        padding: 2px;
    }


/*//////////////////////////////////////////////////////////////*/
    .pricing-container{
        display: flex;
        width: 100%;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 50px 0 100px;
        color: rgb(255, 255, 255);
    }

    .card-container{
        display: flex;
        flex-direction: row;
        width: 1200px;
        justify-content: space-between;
        align-items: center;
    }

    .card-pricing {
        background: linear-gradient(180deg, #2b2b2b, #076a81, #2b2b2b);
        width: 350px;
        padding: 30px;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        margin-bottom: 20px;
    }

    .card-pricing h4{
        color: rgb(255, 255, 255);
        opacity: 0.9;
        margin-bottom: 20px;
        text-align: center;
    }

    .card-pricing li{
        margin-left: 10px;
    }

    .card-body{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
    
    .btn-primary {
        margin-top: 10px;
        background-color: #5f2f9a;
        border-color: #2b2b2b;
        padding: 5px 10px;
    }

    .btn-primary:hover {
        background-color: #b269cd;
        border-color: #f1f1f1;
    }
</style>