<template>
	<b-row class="advogados" id="advogados">
		<!--{<b-col v-for="(adv,index) in advogados" :key="index" class="col-md-3 col-6 text-left p-0">
			{adv.nome}}<br>
			{{adv.oab}}<br>
			{{adv.email}}
			<b-img :src="adv.img" fluid class="adv-img"/>
		</b-col>-->
		<b-card-group>
			<b-card no-body v-for="(adv,index) in advogados" :key="index"
							:img-src="adv.img"
							img-fluid
							class=""
							overlay
							>
				<div no-body class="adv-mask"></div>
				<b-card-body overlay>
					<h5 class="card-text text-center text-white">
						<ul class="adv-info">
							<li><strong class="text-uppercase text-nome">{{adv.nome}}</strong></li>
							<li><strong class="text-oab">{{adv.oab}}</strong></li>
							<li><strong class="text-email">{{adv.email}}</strong></li>
						</ul>
					</h5>
				</b-card-body>
			</b-card>
		</b-card-group>
	</b-row>
</template>

<script type="text/javascript">
	
import paulo from '@/assets/adv-paulo.jpg'
import andre from '@/assets/adv-andre.jpg'
import fabio from '@/assets/adv-fabio.jpg'
import rodrigo from '@/assets/adv-rodrigo.jpg'
export default {
	data() {
		return {
			advogados: [
				{nome: "Paulo Lopo Saraiva", oab: "(OAB-RN 642)", email: "paulo.saraiva@saraivadvogados.com.br", img: paulo},
				{nome: "André Luiz Pinheiro Saraiva", oab: "(OAB-RN 1806)", email: "andre.saraiva@saraivadvogados.com.br", img: andre},
				{nome: "Fábio Luiz Lima Saraiva", oab: "(OAB-RN 9412)", email: "fabio.saraiva@saraivadvogados.com.br", img: fabio},
				{nome: "Rodrigo Ferraz Quidute", oab: "(OAB-RN 9942)", email: "rodrigo.quidute@saraivadvogados.com.br", img: rodrigo}
			]
		}
	}
}
</script>

<style type="text/css" scoped>
.card {
	border: none;
	border-radius: none;
}

/*.card::after {
	display: block;
	position: relative;
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0), #000 100%);
	width: 100%;
	height: 250px;
	margin-top: -250px;
	content: '';
}*/

.adv-info {
	list-style: none;
}

.card-body {
	background: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0, #000 100%);
}

.card-text {
	color: #fff;
	font-size: 1.5vw;
}

.card-img-overlay {
	top: 80%;
	padding: 0px;
}

.card-img-overlay ul {
	padding: 32px 8px 0px 8px !important;
}

.text-nome {
	font-size: 1.5vw;
}

.text-oab {
	font-size: 16px;
}

.text-email {
	font-size: 1.1vw;
}

.adv-mask {
	position: absolute;
	background: rgba(47, 59, 75, 0.8);
	width: 100%;
	height: 100%;
	top: 0;

	transition: background 0.4s ease;
}

.adv-mask:hover {
	background: rgba(47, 59, 75, 0);
	transition: background 0.4s ease;
}

/*@media (max-width: 1220px) {
	.card-text {
		font-size: 1em;
	}
}

@media (max-width: 768px) {
	.card-text {
		font-size: 0.75em;
	}
}*/

@media (max-width: 768px) {

}

@media (max-width: 576px) {
	.card-text {
		font-size: 6.5vw;
	}

	.text-nome {
		font-size: 5vw;
	}

	.text-email {
		font-size: 4vw;
	}
}
</style>