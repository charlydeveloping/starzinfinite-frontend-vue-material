<template lang="pug">
	v-container
		v-breadcrumbs(
				:items="breadcrumbs"
				large
		)
			v-row
				v-col(md="6" )
					v-card(  )
						v-card-title Nuevo rol
						v-card-text
							form-rol(
								:payload="payload"
								:loading="loading.save"
								@save="save"
							)
</template>
<script>
import FormRol from "./components/form.vue";
import roles from "../../services/roles";

export default {
	components: {
		FormRol,
	},
	data() {
		return {
			breadcrumbs: [
				{
					text: "Dashboard",
					disabled: false,
					href: "breadcrumbs_dashboard",
				},
				{
					text: "Roles",
					disabled: false,
					href: "breadcrumbs_link_2",
				},
				{
					text: "Nuevo Rol",
					disabled: true,
					href: "breadcrumbs_link_2",
				},
			],
			loading: {
				save: false,
			},
			payload: {
				rol: "",
				descripcion: "",
				estado: "",
			},
		};
	},
	methods: {
		/**
		 * save
		 * Guarda un nuevo registro del rol
		 * @return void
		 */
		async save() {
			try {
				await roles.storeRol(this.payload);
				this.$router.push({ name: "rol.list" });

				this.$notify({
					type: "success",
					title: "Exito",
					text: "Rol guardado exitosamente",
				});
			} catch (error) {
				this.$notify({
					type: "error",
					title: "Error",
					text: "Lo sentimos ha ocurrido un error",
				});
			}
		},
	},
};
</script>