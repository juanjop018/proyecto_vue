<template>
    <body>
        <NavBar />
        <div class="content">
            <div class="text-center">
                <div class="col-md-4">
                    <h3>Espacios</h3>
                    <img src="../../../public/images/salones.jpg" alt="Espacios" class="img-thumbnail" data-bs-toggle="modal" data-bs-target="#espaciosModal">
                </div>
                <div class="col-md-4">
                    <h3>Profesores</h3>
                    <img src="../../../public/images/profesor.jpg" alt="Profesores" class="img-thumbnail" data-bs-toggle="modal" data-bs-target="#profesoresModal">
                </div>
                <div class="col-md-4">
                    <h3>Competencias</h3>
                    <img src="../../../public/images/list.png" alt="Competencias" class="img-thumbnail" data-bs-toggle="modal" data-bs-target="#competenciasModal">
                </div>
            </div>
        </div>


            <!-- Carrusel de imágenes -->
            <div class="container custom-carousel mt-5">
                <h1 class="text-center">Eventos</h1>
                <div id="eventosCarousel" class="carousel slide" data-bs-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img src="../../../Public/Assets/img/icons/Evento1.jpeg" class="d-block w-100" alt="Evento 1">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../Public/Assets/img/icons/Evento2.jpeg" class="d-block w-100" alt="Evento 2">
                        </div>
                        <div class="carousel-item">
                            <img src="../../../Public/Assets/img/icons/Evento3.jpeg" class="d-block w-100" alt="Evento 3">
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#eventosCarousel" data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Anterior</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#eventosCarousel" data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Siguiente</span>
                    </button>
                </div>
            </div>
            <br><br>
        
            <!-- Modal Espacios -->
            <div class="modal fade" id="espaciosModal" tabindex="-1" aria-labelledby="espaciosModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="espaciosModalLabel">Detalles de Espacios</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Aquí puedes ver los detalles de los espacios disponibles.</p>
                            <button class="btn btn-primary" onclick="window.location.href='ClassProgramingAdmin.html'">Ir a Calendario</button>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- Modal Profesores -->
            <div class="modal fade" id="profesoresModal" tabindex="-1" aria-labelledby="profesoresModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="profesoresModalLabel">Nuestros Profesores</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <!-- Ejemplo de card de un profesor -->
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="../../../PUBLIC/ASSETS/img/user.jpg" class="card-img-top" alt="Profesor 1">
                                        <div class="card-body">
                                            <h5 class="card-title">Profesor 1</h5>
                                            <p class="card-text">Experto en salsa y bachata.</p>
                                            <button class="btn btn-primary"> Editar profesor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="../../../PUBLIC/ASSETS/img/user.jpg" class="card-img-top" alt="Profesor 2">
                                        <div class="card-body">
                                            <h5 class="card-title">Profesor 2</h5>
                                            <p class="card-text">Especialista en tango y danza contemporánea.</p>
                                            <button class="btn btn-primary"> Editar profesor</button>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="card">
                                        <img src="../../../PUBLIC/ASSETS/img/user.jpg" class="card-img-top" alt="Profesor 3">
                                        <div class="card-body">
                                            <h5 class="card-title">Profesor 3</h5>
                                            <p class="card-text">Instructor de hip-hop y breakdance.</p>
                                            <button class="btn btn-primary"> Editar profesor</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        
            <!-- Modal Competencias -->
            <div class="modal fade" id="competenciasModal" tabindex="-1" aria-labelledby="competenciasModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="competenciasModalLabel">Detalles de Competencias</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Cerrar"></button>
                        </div>
                        <div class="modal-body">
                            <p>Información sobre las competencias y torneos.</p>
                        </div>
                    </div>
                </div>
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