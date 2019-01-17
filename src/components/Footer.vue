<template>
	<footer class="container-fluid">
		<b-row class="img-bg">
			<b-col class="col-md-4 col-xs-6 col-12 footer-logo mx-auto"><b-img :src="require('@/assets/logo.png')" fluid/></b-col>
		</b-row>
		<b-row class="rodape-down">
			<b-col class="col-12">
				<b-navbar toggleable="md" type="dark">
					<b-navbar-nav class="mx-auto">
						<b-nav-item class="item" v-for="(item,index) in menu" :href="item.link" :key="index">{{item.name}}</b-nav-item>
					</b-navbar-nav>
				</b-navbar>
			</b-col>
			<div class="w-100"></div>
			<b-col class="col-md-3 col-sm-6 col-8 mx-auto">
				<b-link href="https://aagenciadigital.com" target="_blank"><b-img class="logo-aa" :src="require('@/assets/logo-aa.png')" fluid/></b-link>
			</b-col>
		</b-row>
	</footer>
</template>

<script type="text/javascript">
	export default {
		data() {
			return {
				menu: [
					{name: "O escritório", link: "#historia"},
					{name: "Atuação", link: "#atuacao"},
					{name: "Clientes", link: "#clientes"},
					{name: "Advogados", link: "#advogados"},
					{name: "Contato", link: "#contato"}
				]
			}
		}
	}
</script>

<style type="text/css">
	.rodape-down {
		background: #718a91;
	}

	.footer-logo {
		padding: 64px;
	}

	.item {
		padding: 0px 32px 32px 32px;
		color: #fff !important;
	}

	.logo-aa {
		padding: 16px 0px 32px 0px;
	}

	.img-bg {
		padding: 0px;
	}
</style>