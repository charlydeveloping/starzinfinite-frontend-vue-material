<template lang="pug">
	v-container
		v-breadcrumbs(
				:items="breadcrumbs"
				large
		)
			v-row
				v-col(md="6" )
					v-card(  )
						v-card-title Nuevo usuario
						v-card-text
							form-usuario(
								:payload="payload"
								:loading="loading.save"
								@save="save"
							)
</template>
<script>
import FormUsuario from "./components/form.vue";
import usuario from "../../services/usuarios";

export default {
	components: {
		FormUsuario,
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
					text: "Usuarios",
					disabled: false,
					href: "breadcrumbs_link_2",
				},
				{
					text: "Nuevo Usuario",
					disabled: true,
					href: "breadcrumbs_link_2",
				},
			],
			loading: {
				save: false,
			},
			payload: {
				idPersona: "",
				usuario: "",
				password: "",
				fechaDesde: "",
				fechaHasta: "",
				temporal: "",
			},
		};
	},
	methods: {
		/**
		 * save
		 * Guarda un nuevo registro del usuario
		 * @return void
		 */
		async save() {
			try {
				await usuario.storeUsuario(this.payload);
				this.$router.push({ name: "usuario.list" });

				this.$notify({
					type: "success",
					title: "Exito",
					text: "Usuario guardado exitosamente",
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