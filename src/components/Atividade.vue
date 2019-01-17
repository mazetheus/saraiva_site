<template>
	<b-row class="atividade" id="atividade">
		<b-col class="col-12 text-left align-self-center d-flex">
			<div class="ativ-cont text-white align-self-center">
				<h1>Em atividade desde <strong>1973</strong></h1>
				<span class="text-ativ">A facilidade em atender o cliente de forma exclusiva é outro importante diferencial do mercado, uma vez que possui profissionais que abrangem todas as áreas do Direito.</span>
			</div>
		</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css" scoped>
	.atividade {
		background: url('../assets/foto-ativ.jpg') no-repeat;
		background-size: 100%;
		padding: 150px 200px;
	}

	.text-ativ {
		padding-top: 108px;
	}

	.ativ-cont {
		padding-top: 96px;
		width: 30%;
	}

	@media (max-width: 1024px) {
		.ativ-cont {
			padding-top: 0px;
			width: 50%;
		}
	}

	@media (max-width: 768px) {
		.atividade {
			padding: 156px 32px;
		}

		.ativ-cont {
			padding-top: 0px;
			width: 100%;
		}

		.text-ativ {
			padding-top: 32px;
		}
	}
	
	@media (max-width: 576px) {
		.atividade {
			background-size: auto;
			padding: 164px 32px;
		}

		.ativ-cont {
			padding-top: 0px;
			width: 100%;
		}
	}

	@media (min-width: 1690px) {
		.atividade {
			padding: 276px 156px;
		}
	}

</style>