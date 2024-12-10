<template>
  <footer>
        <div class="social-icon">
            <li class="icon-elem">
                <a href="" class="icon">
                    <ion-icon name="logo-youtube"></ion-icon>
                </a>
            </li>
            <li class="icon-elem">
                <a href="" class="icon">
                    <ion-icon name="logo-instagram"></ion-icon>
                </a>
            </li>
            <li class="icon-elem">
                <a href="" class="icon">
                    <ion-icon name="logo-tiktok"></ion-icon>
                </a>
            </li>
            <li class="icon-elem">
                <a href="" class="icon">
                    <ion-icon name="logo-facebook"></ion-icon>
                </a>
            </li>
            <li class="icon-elem">
                <a href="" class="icon">
                    <ion-icon name="logo-whatsapp"></ion-icon>
                </a>
            </li>
        </div>
      <div class="menu">
        <li class="menu-elem">
          <a href="" class="menu-icon">Inicio</a>
        </li>
        <li class="menu-elem">
          <a href="" class="menu-icon">Equipo</a>
        </li>
        <li class="menu-elem">
          <a href="" class="menu-icon">Contacto</a>
        </li>
        <li class="menu-elem">
          <a href="" class="menu-icon">Video</a>
        </li>
      </div>
      <p class="text">&copy; 2024 Escuela de Baile. Todos los derechos reservados.</p>
    </footer>
</template>

<script>
  export default{
    name: "Footer"
  }
</script>

<style scoped>
footer {
  bottom: 0;
  height: 150px;
  width: 100%;
  padding: 20px 0 10px;
  background-color: #5f2f9a;
  color: #ffffff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  position: relative;
}

div{
  width: 30%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
}

.menu-icon{
  color: black;
  font-size: 20px;
  text-decoration: none;
  opacity: 0.5;
  transition: 0.3s;
}

.menu-icon:hover{
  opacity: 1;
}

.icon{
  color: rgb(255, 255, 255);
  font-size: 32px;
  display: inline-block;
  margin: 0 10px;
  transition: 0.5s;
}

.icon:hover{
  transform: translateY(-10px);
}

.list-inline-item a:hover {
  text-decoration: underline;
}
</style>
