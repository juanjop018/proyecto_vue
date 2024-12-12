<template>
    <body>
        <NavBar />
        <Notifications />
        <Footer />
    </body>
</template>

<script>
import NavBar from "@/components/NavBArComponent.vue"
import Footer from "@/components/FooterComponent.vue"
import Notifications from "@/components/NotificationForm.vue"
export default {
    components: {
        NavBar,
        Notifications,
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