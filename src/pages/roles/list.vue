<template lang="pug">
	v-container
		v-breadcrumbs(
			:items="breadcrumbs"
			large
		)

		ui-dialog-confirm(
			:dialog="dialog"
			:title="'Confirmar eliminar'"
			:text="'Está seguro que desea eliminar el rol'"
			@accept="destroy"
			@cancel="dialog = false"
		)

		v-card
			v-card-title
				h3 Roles
			v-card-text
				v-row.mr-1(justify="end")
					v-btn(
						v-if="Object.keys(rol).length > 0"
						color="error" 
						@click.stop="dialog = true"
						) Eliminar rol
					v-btn.ml-1(
						v-if="Object.keys(rol).length > 0"
						color="warning" 
						@click="edit"
						) Editar rol
					v-btn.ml-1(
						color="primary" 
						:to="{ name: 'rol.store' }"
						) Nuevo rol
		
			JqxGrid.mt-5(
				ref="grid",
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
import roles from "../../services/roles"
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
					text: "Roles",
					disabled: true,
					href: "breadcrumbs_link_2",
				},
			],
			rol: {},
			dialog: false,
			dataAdapter: new jqx.dataAdapter(this.source),
			grid: {
				columns: [
					{
						text: "Rol",
						datafield: "rol",
						width: "30%",
						align: "center",
						cellsrenderer: this.cellsrenderer,
					},
					{
						text: "Descripción",
						datafield: "descripcion",
						width: "40%",
						align: "center",
						cellsrenderer: this.cellsrenderer,
					},
					{
						text: "Estado",
						datafield: "estado",
						width: "30%",
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
				{ name: "idRol", map: "idRol", type: "int" },
				{ name: "rol", map: "rol", type: "string" },
				{ name: "descripcion", map: "descripcion", type: "string" },
				{ name: "estado", map: "estado", type: "string" },
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
			this.rol = event.args.row;
		},
		/**
		 * edit
		 * Redirecciona al formulario para la edición
		 * @return String html
		 */
		edit() {
			let selected = this.$refs.grid.getselectedrowindex();
			let rowdata = this.$refs.grid.getrowdata(selected);
			
			this.$router.push({
				name: "rol.update",
				params: { id: rowdata.idRol },
			});
		},
		/**
		 * destroy
		 * Elimina un registro
		 * @return String html
		 */
		async destroy() {
			let selected = this.$refs.grid.getselectedrowindex();
			let rowdata = this.$refs.grid.getrowdata(selected);

			try {
				await roles.deleteRol(rowdata.idRol);
				this.dialog = false;
				this.fetchRoles();

				this.$notify({
					type: 'success',
					title: 'Exito',
					text: 'Rol eliminado exitosamente'
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
		 * fetchRoles
		 * Obtiene el listado de roles
		 * @return void
		 */
		async fetchRoles() {
			const response = await roles.getRoles();
			this.source.localdata = response.data.data;
			this.$refs.grid.updatebounddata("cells");
		},
	},
	mounted() {
		this.fetchRoles()
	}
}
</script>