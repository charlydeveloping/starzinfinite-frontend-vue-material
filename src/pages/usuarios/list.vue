<template lang="pug">
	v-container
		v-breadcrumbs(
			:items="breadcrumbs"
			large
		)

		ui-dialog-confirm(
			:dialog="dialog"
			:title="'Confirmar eliminar'"
			:text="'Está seguro que desea eliminar el usuario'"
			@accept="destroy"
			@cancel="dialog = false"
		)

		v-card
			v-card-title
				h3 Usuarios
			v-card-text
				v-row.mr-1(justify="end")
					v-btn(
						v-if="Object.keys(usuario).length > 0"
						color="error" 
						@click.stop="dialog = true"
						) Eliminar usuario
					v-btn.ml-1(
						v-if="Object.keys(usuario).length > 0"
						color="warning" 
						@click="edit"
						) Editar usuario
					v-btn.ml-1(
						color="primary" 
						:to="{ name: 'usuario.store' }"
						) Nuevo usuario
		
			JqxGrid.mt-5(
				ref="gridUsuarios",
				theme="metro",
				width="100%",
				:columns="grid.columns",
				:pagesize="10",
				:pageable="true",
				:sortable="true",
				:source="dataAdapter",
				@rowselect="onRowSelected($event)"
		)     
</template>
<script>
import JqxGrid from "jqwidgets-scripts/jqwidgets-vue/vue_jqxgrid.vue";
import usuarios from "../../services/usuarios"
export default {
	components: {
		JqxGrid
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
					disabled: true,
					href: "breadcrumbs_link_2",
				},
			],
			usuario: {},
			dialog: false,
			dataAdapter: new jqx.dataAdapter(this.source),
			grid: {
				columns: [
					{
						text: "Usuario",
						datafield: "usuario",
						width: "30%",
						align: "center",
						cellsrenderer: this.cellsrenderer,
					},
					{
						text: "Password",
						datafield: "password",
						width: "40%",
						align: "center",
						cellsrenderer: this.cellsrenderer,
					},
				],
			},
		}
	},
	beforeCreate() {
		this.source = {
			localdata: [],
			datatype: "json",
			datafields: [
				{ name: "idUsuario", map: "idUsuario", type: "int" },
				{ name: "usuario", map: "usuario", type: "string" },
				{ name: "password", map: "password", type: "string" },
			],
		};
	},
	methods: {
		/**
		 * cellsrenderer
		 * Da estilo a las celdas de la grilla
		 * @return String html
		 */
		cellsrenderer: function (row, column, value) {
			return (
				'<div style="text-align: center; margin-top: 5px; margin-left: 5px; margin-right: 5px;">' +
				value +
				"</div>"
			);
		},
		/**
		 * onRowSelected
		 * Evento que se lanza al seleccionar una fila de la grilla
		 * @return String html
		 */
		onRowSelected(event) {
			this.usuario = event.args.row;
		},
		/**
		 * edit
		 * Redirecciona al formulario para la edición
		 * @return String html
		 */
		edit() {
			let selected = this.$refs.gridUsuarios.getselectedrowindex();
			let rowdata = this.$refs.gridUsuarios.getrowdata(selected);
			
			this.$router.push({
				name: "usuario.update",
				params: { id: rowdata.idUsuario },
			});
		},
		/**
		 * destroy
		 * Elimina un registro
		 * @return String html
		 */
		async destroy() {
			let selected = this.$refs.gridUsuarios.getselectedrowindex();
			let rowdata = this.$refs.gridUsuarios.getrowdata(selected);

			try {
				await usuarios.deleteUsuario(rowdata.idUsuario);
				this.dialog = false;
				this.fetchUsuarios();

				this.$notify({
					type: 'success',
					title: 'Exito',
					text: 'Usuario eliminado exitosamente'
				})
			} catch (error) {
				console.error(error);
				this.$notify({
					type: 'error',
					title: 'Error',
					text: 'Lo sentimos ha ocurrido un error'
				})
			}
		},
		/**
		 * fetchUsuarios
		 * Obtiene el listado de usuarios
		 * @return void
		 */
		async fetchUsuarios() {
			const response = await usuarios.getUsuarios();
			this.source.localdata = response.data.data;
			this.$refs.gridUsuarios.updatebounddata("cells");
		},
	},
	mounted() {
		this.fetchUsuarios()
	}
}
</script>