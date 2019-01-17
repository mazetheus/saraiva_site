<template>
	<b-row class="clientes" id="clientes">
		<b-col class="col-4 align-self-start"><b-img :src="require('@/assets/detal-cliente.png')" fluid/></b-col>
		<b-col class="col-4 clientes-header align-self-end"><h2 class="text-uppercase"><strong>Clientes</strong></h2></b-col>
		<b-col class="col-4 align-self-start"><b-img :src="require('@/assets/detal-cliente-inv.png')" fluid/></b-col>
		<b-row class="clientes-cont">
			<b-col class="col-md-3 col-4 text-left pb-3" v-for="(cliente,index) in clientes" :key="index"><strong>{{cliente.name}}</strong></b-col>
		</b-row>
		<b-col class="col-11 text-right pt-4"><strong>Entre outras</strong></b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				clientes: [
					{name: "CAERN;"},
					{name: "Citroen Victoire;"},
					{name: "Hospital dos Olhos do RN;"},
					{name: "Farmacias Irmã Dulce;"},
					{name: "STERBOM;"},
					{name: "Ford DIVEPE;"},
					{name: "Aliança Center;"},
					{name: "Megafral;"},
					{name: "JM BEZERRA;"},
					{name: "Troller Natal;"},
					{name: "Harabello Passagens e Turismo;"},
					{name: "Aerotur;"},
					{name: "Clínica Oitavo Rosado;"},
					{name: "Via Diesel;"},
					{name: "TAM Viagens Mossoró;"},
					{name: "Prontoneuro;"}
				]
			}
		}
	}
</script>

<style type="text/css">
	.clientes {
	}

	.clientes-header {
		padding-bottom: 64px;
		color: #000;
	}

	.clientes-cont {
		padding: 96px 150px 32px 150px;
	}

	@media (max-width: 576px) {
		.clientes-header h2 {
			font-size: 1.2em;
		}
	}

	@media (max-width: 768px) {
		.clientes {		}


		.clientes-cont {
			padding-left: 20px;
			padding-right: 20px;
		}
	}
</style>