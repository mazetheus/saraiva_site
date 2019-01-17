<template>
	<b-row class="escritorio" id="escritorio">
		<b-col class="col-12"><h2 class="text-uppercase o-escritorio"><strong>o escritório</strong></h2></b-col>
		<b-col class="col-12 col-md-6 text-left descr-left">A Saraiva Advogados presta assessoria e consultoria jurídica em diversos ramos do Direito. Com 40 anos de atividades, iniciadas por Paulo Lopo Saraiva e hoje acompanhado dos filhos e neto, a banca tem como um dos seus diferenciais a rapidez na execução dos interesses dos seus clientes, primando pela ética, competência e satisfação. Cada grupo empresarial conta com assessoria exclusiva de uma equipe altamente treinada e qualificada para os setores de atividades atingidos pela empresas, mantendo uma constante atualização na legislação, jurisprudência e doutrina relacionado às empresas.</b-col>
		<b-col class="col-12 mx-auto col-md-6 text-left descr-right align-self-center"><h1 class="anos ml-auto"><strong>"Com 40 anos de atividades"</strong></h1></b-col>
		<b-col class="col-3 align-self-center"><div class="ativ-detail"></div></b-col>
		<b-col class="col-6"><h1 class="em-atividade"><strong>Em atividade desde 1973</strong></h1></b-col>
		<b-col class="col-3 align-self-center"><div class="ativ-detail"></div></b-col>
		<b-col class="col-md-8 col-12 descr-img descr-left"><b-img :src="require('@/assets/atividade.png')" fluid/></b-col>
		<b-col class="descr-right text-left pt-5">A facilidade em atender o cliente de forma exclusiva é outro importante diferencial no mercado, uma vez que possui profissionais que abrangem todas as áreas de Direito, permitindo que seja prestada toda assessoria jurídica necessária ao interessado, gerado comodidade e segurança, pois todas as questões e indagações são centralizadas no escritório.</b-col>
	</b-row>
</template>

<script type="text/javascript">
	export default {

	}
</script>

<style type="text/css">	
.escritorio {
	font-size: 1em;
}
.anos {
	font-size: 3.75em;
	padding-right: 64px;
	padding-left: 32px;
}

.em-atividade {
	padding: 48px 0px;
	font-size: 3em;
}

.ativ-detail {
	background: #fff;
	height: 6px;
}

.o-escritorio {
	padding-bottom: 32px;
	padding-top: 16px;
}

@media (max-width: 576px) {
	.anos {
		font-size: 3em;
	}

	.descr-img {
		padding-left: 15px !important;
	}
}
</style>