<template>
	<b-row class="contato" id="contato">
		<b-col class="col-md-6 col-12 text-uppercase text-left align-self-center">
			<div class="mx-auto">
				<h1>Fale</h1> 
				<h1><strong>Conosco</strong></h1>
			</div>
		</b-col>
		<b-col>
			<!--<h3>OAB-RN 332</h3>

			<h3>R. Dr. Múcio Galvão, 477,</h3>
			<h3>Barro Vermelho, Natal/RN,</h3>
			<h3>CEP 59022-530</h3>

			<h3>(84) 3221-5865 | 6848</h3>
			<h3>contato@saraivadvogados.com.br</h3>
			<h3>www.saraivadvogados.com.br</h3>-->
			<h4 class="text-left" v-for="(it,index) in info" :class="it.class" :key="index">{{it.text}}</h4>
			
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				info: [
					{text: "OAB-RN 332", class: "pb-4"},
					{text: "R. Dr. Múcio Galvão, 477,"},
					{text: "Barro Vermelho, Natal/RN"},
					{text: "CEP 590200-530", class: "pb-4"},
					{text: "(84) 3221-5865 | 6848", class: "pb-4"},
					{text: "atendimento@saraivadvogados.com.br", class: "email-resp"},
					{text: "www.saraivadvogados.com.br", class: "email-resp"}
				]
			}
		}
	}
</script>

<style type="text/css" scoped>
	.contato {
		padding: 148px 200px;
		background: url('../assets/bg-contato.jpg') no-repeat;
		background-size: 100%;
	}

	@media (max-width: 1100px) {
		.contato {
			padding: 148px 32px;
			background: url('../assets/bg-contato.jpg') no-repeat;
			background-size: 150vw;
		}
	}

	@media (max-width: 768px) {
		.contato {
			background-size: cover;
		}
	}

	@media (max-width: 576px) {
		.email-resp {
			font-size: 16px;
		}
	}
</style>