<template>
  <div id="app" class="app">
    <b-navbar class="navbar navbar-expand-md navbar-dark bg-dark" >
        <a class="navbar-brand" href="#">Artes Iraca</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
        </button>
        <!-- <button v-if="is_auth">Inicio</button>
        <button v-if="is_auth">Cuenta</button>
        <button v-if="is_auth">Cerrar Sesión</button> -->
        
        <!--<button v-if="!is_auth" v-on:click="loadSignUp">Registrarse</button>
        <button v-if="is_auth" v-on:click="loadHome"> Inicio </button>
        <button v-if="is_auth" v-on:click="logOut">Cerrar Sesión</button>
        <button v-if="is_auth" v-on:click="loadAccount"> Cuenta </button>
        <button v-if="is_auth" v-on:click="createProduct"> Crear producto </button>
        <button v-if="!is_auth" v-on:click="createProduct"> Crear producto </button>
        <button v-if="is_auth" v-on:click="listProduct"> Listar producto </button>
        <button v-if="!is_auth" v-on:click="listProduct"> Listar producto </button> -->
        
        <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item active">
            <a v-if="!is_auth" v-on:click="loadLogIn" class="nav-link" href="#">Iniciar Sesión <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a v-if="!is_auth" v-on:click="loadSignUp" class="nav-link" href="#">Registrarse <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a v-if="is_auth" v-on:click="loadHome" class="nav-link" href="#">Inicio  <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a v-if="is_auth" v-on:click="logOut" class="nav-link" href="#">Cerrar Sesión  <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a v-if="is_auth" v-on:click="loadAccount" class="nav-link" href="#">Cuenta  <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a v-if="is_auth" v-on:click="createProduct" class="nav-link" href="#">Crear producto  <span class="sr-only">(current)</span></a>
          </li>
          
          <li class="nav-item active">
            <a v-if="is_auth" v-on:click="listProduct" class="nav-link" href="#">Listar productos  <span class="sr-only">(current)</span></a>
          </li>
          <li class="nav-item active">
            <a v-if="!is_auth" v-on:click="listProduct" class="nav-link" href="#">Listar productos  <span class="sr-only">(current)</span></a>
          </li>
        </ul>
      </div>
    </b-navbar>


    <div class="main-component">
      <router-view  
        v-on:completedLogIn="completedLogIn"
        v-on:completedSignUp="completedSignUp"
        v-on:logOut="logOut"
        v-on:createProduct="createProduct"
      >
      </router-view>
    </div>
    <!-- 
    <div class="footer">
      <h2>Misión TIC 2022</h2>
    </div>
    -->
    <footer>
      <div class="footer-content">
        <h3>Misión TIC 2022</h3>
        <ul class="socials">
         <li><p>Back-end <a href="https://github.com/bsperezb/Ecomerce_Rocket_team.git" target="blank_"><i class="fa fa-github"></i></a></p></li>
         <li><p>Front-end <a href="https://github.com/bsperezb/frontend-vue-MT.git" target="blank_"><i class="fa fa-github"></i></a></p></li>
        
        </ul>
      </div>
      <div class="footer-bottom">
        <p>copyright &copy;2020 codeOpacity. designed by <span>nethunt</span></p>
      </div>
    </footer>

  </div>
</template>

<script>
export default {
  name: "App",
  data: function() {
    return {
      is_auth: false,
    };
  },
  components: {},
  methods: {
    listProduct: function(){
      this.$router.push({ name:"list"})
    },
    createProduct: function(){
      this.$router.push({ name:"create"})
    },
    loadAccount: function () {
      this.$router.push({ name: "account" });
    },
    loadHome: function() {
    this.$router.push({ name: "home" });
    },
    logOut: function () {
      localStorage.clear();
      alert("Sesión Cerrada");
      this.verifyAuth();
      },
    verifyAuth: function() {
      this.is_auth = localStorage.getItem("isAuth") || false;
      if (this.is_auth == false)
        this.$router.push({ name: "logIn" });
      else
        this.$router.push({ name: "home" });
    },
    loadLogIn: function() {
      this.$router.push({ name: "logIn" });
    },
    loadSignUp: function() {
      this.$router.push({ name: "signUp" });
    },
    completedLogIn: function(data) {
      localStorage.setItem("isAuth", true);
      localStorage.setItem("username", data.username);
      localStorage.setItem("token_access", data.token_access);
      localStorage.setItem("token_refresh", data.token_refresh);
      alert("Autenticación Exitosa");
      this.verifyAuth();
    },
    completedSignUp: function(data) {},
  },
  created: function() {
    this.verifyAuth();
  },
};
</script>
<style>
body {
  margin: 0 0 0 0;
}
.main-component{
  display:flex;
  justify-content: center;
  min-height: 80vh;
}

.header {
  margin: 0%;
  padding: 0;
  width: 100%;
  height: 10vh;
  min-height: 100px;
  background-color: #057d81;
  color: #e5e7e9;
  display: flex;
  justify-content : space -between;
  align-items : center;
}
.header h1 {
  width: 20%;
  text-align
: center;
}
.header nav {
  height: 100%;
  width: 20%;
  display: flex;
  justify-content : space -around;
  align-items : center;
  font-size : 20px;
}
.header nav button {
  color: #e5e7e9;
  background: #057d81;

  border: 1px solid #e5e7e9;

  border-radius: 5px;

  padding: 10px 20px;
}
.header nav button:hover {
  color: #057d81;
  background: #e5e7e9;

  border: 1px solid #e5e7e9;
}
.main -component {
  height: 75vh;
  margin: 0%;
  padding: 0%;
  background: #fdfefe;
}
footer{
    bottom: 0;
    margin:0;
    padding:0;
    left: 0;
    right: 0;
    background: #026b6d;
    height: auto;
    width: 100%;
    font-family: "Open Sans";
    padding-top: 40px;
    color: #fff;
}
.footer-content{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}
.footer-content h3{
    font-size: 1.8rem;
    font-weight: 400;
    text-transform: capitalize;
    line-height: 3rem;
}
.footer-content p{
    max-width: 500px;
    margin: 10px auto;
    line-height: 28px;
    font-size: 14px;
}
.socials{
    list-style: none;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 1rem 0 3rem 0;
}
.socials li{
    margin: 0 10px;
}
.socials a{
    text-decoration: none;
    color: #fff;
}
.socials a i{
    font-size: 1.1rem;
    transition: color .4s ease;

}
.socials a:hover i{
    color: aqua;
}
.footer-bottom{
    background: #000000;
    width: 100%;
    padding: 20px 0;
    text-align: center;
}
.footer-bottom p{
    font-size: 14px;
    word-spacing: 2px;
    text-transform: capitalize;
}
.footer-bottom span{
    text-transform: uppercase;
    opacity: .4;
    font-weight: 200;
}
</style>
