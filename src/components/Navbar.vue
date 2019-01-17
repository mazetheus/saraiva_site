<template>
	<b-container fluid>
		<b-row class="topo">
			<b-img :src="require('@/assets/topo.jpg')" fluid/>
			<b-col class="header-text align-self-center">
				<h1>Competência <strong>multidisciplinar</strong> há mais de 45 anos.</h1>
			</b-col>
		</b-row>
		<div class="nav-aux">
			<b-row class="nav-top">
				<b-col class="nav-top-info col-12 col-md-6 text-left offset-md-6">
					<div>
						<font-awesome-icon icon="envelope"></font-awesome-icon> atendimento@saraivadvogados.com.br | <br v-if="width < 1000"> <font-awesome-icon icon="phone-square"></font-awesome-icon> (84) 3221-5865 | 6848
					</div>
					<div>
					</div>
				</b-col>
			</b-row>
			<b-navbar toggleable="md" type="light">
				<b-navbar-brand href="/" class="brand"><b-img class="brand-img" :src="require('@/assets/logo.png')" fluid/></b-navbar-brand>

				<b-navbar-toggle target="nav_collapse" class="ml-auto"></b-navbar-toggle>

				<b-collapse is-nav id="nav_collapse">
					<b-navbar-nav class="ml-auto">
						<b-nav-item v-for="(item,index) in menu" @click="scroll(item, $event)" :key="index"><strong>{{item.name}}</strong></b-nav-item>
					</b-navbar-nav>
				</b-collapse>
			</b-navbar>
		</div>
	</b-container>
</template>

<script type="text/javascript">
	import jQuery from 'jquery'
	let $ = jQuery;
	export default {
		name: "Navbar",
		data() {
			return {
				menu: [
					{name: "O escritório", link: "#historia"},
					{name: "Atuação", link: "#atuacao"},
					{name: "Clientes", link: "#clientes"},
					{name: "Advogados", link: "#advogados"},
					{name: "Contato", link: "#contato"}
				],
				width: 0,
				height: 0
			}
		},
		created() {
			this.width = window.innerWidth;
		},
		mounted() {
			this.$nextTick(() => {
				window.addEventListener('resize', () => {
					this.width = window.innerWidth;
					this.height = window.innerHeight;
				});
			})
		},
		methods: {
			scroll(obj, e) {
				e.preventDefault();
				var to = obj.link;
				$('html, body').animate({
					scrollTop: $(to).offset().top - 130
				}, 1000);
			}
		}
	}
</script>

<style type="text/css" scoped>
.navbar {
	background: #efefef!important;
}

.nav-aux {
	position: fixed;
	width: 100%;
	top: 0;
	left: 0;
	z-index: 110;
}

.nav-top {
	background: #efefef;
}

.nav-top-info {
	background: #fff;
}

.topo {
	height: 768px;
}

.brand {
	width: 25%;
	padding-left: 64px;
}

.navbar-nav {
	padding-right: 64px;
}

.header-text {
	position: absolute;
	width: 100%;
	padding: 0px 50px;
	color: #fff;
}

.header-text h1 {
	font-size: 3vw;
	padding: 0px 250px;
}

@media (max-width: 768px) {
	.header-text h1 {
		padding: 0px;
		font-size: 6vw;
	}

	.topo {
		height: 360px
	}

	.nav-top-info {
		margin-left: 8px;
	}
}

@media (max-width: 576px) {
	.brand {
		width: 50%;
		padding-left: 32px;
	}

	.header-text h1 {
		padding: 0px 0px;
		font-size: 6vw;
	}

	.navbar-nav {
		padding: 0px;
	}

	.topo {
		height: 320px;
	}
}

</style>