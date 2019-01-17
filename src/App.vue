<template>
  <div id="app">
    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <router-view/>-->
    <navbar/>
    <b-container fluid>
      <historia/>
      <atividade/>
      <atuacao/>
      <clientes/>
      <advogados/>
      <contato/>
    </b-container>
    <Footer/>
  </div>
</template>

<script type="text/javascript">
  import Navbar from './components/Navbar.vue'
  import Historia from './components/Historia.vue'
  import Atividade from './components/Atividade.vue'
  import Atuacao from './components/Atuacao.vue'
  import Clientes from './components/Clientes.vue'
  import Advogados from './components/Advogados.vue'
  import Contato from './components/Contato.vue'
  import Footer from './components/Footer.vue'

  export default {
    components: {
      Navbar,
      Historia,
      Atividade,
      Atuacao,
      Clientes,
      Advogados,
      Contato,
      Footer
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Work+Sans');

#app {
  font-family: 'Work Sans', 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: #dddddd;
}

.content {
	background: #dddddd;
}

.descr-left {
	padding-left: 140px;
}

.descr-right {
	padding-right: 140px;
}

@media (max-width: 768px) {
	.descr-left {
		padding-left: 20px;
	}

	.descr-right {
		padding-right: 0px;
	}
}
</style>
