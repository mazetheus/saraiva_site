<template>
	<b-row class="atuacao" id="atuacao">
		<b-col class="col-md-5 col-12 align-self-center text-left"><h1 class="text-uppercase">Áreas</h1> <h1 class="text-uppercase"><strong>de atuação</strong></h1></b-col>
		<b-col class="col-md-7 col-12 text-left">
			<ul>
				<li v-for="(item,index) in atuacao" :key="index">{{item}}</li>
			</ul>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				atuacao: [
					"Direito Administrativo",
					"Bancário",
					"Civil",
					"Comercial",
					"Consumidor",
					"Criminal",
					"Tributário",
					"Municipal Imobiliário",
					"Internacional",
					"Mediação e Arbitragem",
					"Previdenciário",
					"Público",
					"Trabalho"
				]
			}
		}
	}
</script>

<style type="text/css" scoped>
	.atuacao {
		padding: 156px 200px;
	}

	ul {
		columns: 2;
		-webkit-columns: 2;
		-moz-columns: 2;
	}

	@media (max-width: 768px) {
		.atuacao {
			padding: 156px 32px;
		}
		ul {
			columns: 2;
			-webkit-columns: 2;
			-moz-columns: 2;
		}
	}

	@media (max-width: 576px) {
		ul {
			columns: 1;
			-webkit-columns: 1;
			-moz-columns: 1;
		}
	}
</style>