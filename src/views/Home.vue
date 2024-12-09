<template>
    <body>
        <NavBar />
        <div class="content">
            <section id="about-us-section" class="py-5 aboutUs">
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
                    src="../../public/video/Dance.mp4" controls></video>
                </div>
            </section>

            <section id="team" class="py-5 team">
                <h2 class="text-center text-white ourteam">Nuestro Equipo</h2>
                <div class="team-cards">
                    <div class="col-md-4 mb-3">
                        <div class="instructor-card">
                            <div class="instructor-img"
                            style="background-image: url('../../public/images/Afro_Luis.png');"></div>
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
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="instructor-card">
                            <div class="instructor-img"
                            style="background-image: url('../../public/images/Chokola_T.png');"></div>
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
                    </div>
                    <div class="col-md-4 mb-3">
                        <div class="instructor-card">
                            <div class="instructor-img"
                                style="background-image: url('../../public/images/Brandon.png');"></div>
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
    @import '../assets/styles/Main.css';

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
        padding: 120px 40px 30px;
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
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: rgb(255, 255, 255);
        background-color: #2b2b2b;
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
        position: relative;
        width: 100%;
        height: auto;
    }

    .instructor-img {
        width: 100%;
        padding-top: 150%;
        background-size: contain;
        background-position: center;
        border-radius: 10px;
        cursor: pointer;
        transition: transform 0.6s;
        transform-style: preserve-3d;
        position: relative;
    }
    
    
</style>

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
    /* Inicialmente oculto */
}

.instructor-card:hover .instructor-img {
    transform: rotateY(180deg);
}

.instructor-card:hover .instructor-info {
    opacity: 1;
    transform: rotateY(0deg);
}

.instructor-card .star-rating {
    color: #ffd700;
    font-size: 1.5em;
}

.instructor-card {
    transform-style: preserve-3d;
    transform: rotateY(0deg);
}

.instructor-card .instructor-img,
.instructor-card .instructor-info {
    backface-visibility: hidden;
}

.instructor-card .instructor-img {
    transform: rotateY(0deg);
}

.instructor-card .instructor-info {
    transform: rotateY(180deg);
}