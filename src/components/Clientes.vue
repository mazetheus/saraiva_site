<template>
	<b-row class="clientes" id="clientes">
		<b-col class="col-12 text-uppercase"><h1>Nossos <strong>Clientes</strong></h1></b-col>
		<b-col class="col-12 mx-auto text-center clientes-descr"><h2 class="mx-auto"><strong>Mais</strong> de <strong>20</strong> empresas na <strong>área privada</strong> &</h2> <h2>mais de <strong>90</strong> clientes na <strong>área pública</strong></h2></b-col>
	</b-row>
</template>

<style type="text/css" scoped>
	.clientes {
		padding: 96px 156px;
		background: #fff;
	}

	.clientes-descr {
		padding-top: 64px;
	}

	@media (max-width: 768px) {
		.clientes {
			padding: 96px 32px;
			background: #fff;
		}
	}
</style>