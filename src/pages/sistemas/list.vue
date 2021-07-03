<template lang="pug">
v-container

	v-breadcrumbs(
		:items="breadcrumbs"
		large
	)
	v-card
		v-card-title
			h3 Sistemas
		v-card-text 

			v-row.mr-1(justify="end")
				v-btn(color="error" ) Elimina	r sistema
				v-btn.ml-1(color="warning" ) Editar sistema
				v-btn.ml-1(color="primary" ) Nuevo sistema
		
			JqxGrid.mt-5(
				ref="gridSistemas",
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
import sistemas from "../../services/sistemas";
export default {
  components: {
    // ModalConfirmDelete,
    JqxGrid,
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
          text: "Sistemas",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
      sistema: {},
      dataAdapter: new jqx.dataAdapter(this.source),
      grid: {
        columns: [
          {
            text: "Sistema",
            datafield: "sistema",
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
            width: "10%",
            align: "center",
            cellsrenderer: this.cellsrenderer,
          },
          {
            text: "Fecha de creación",
            datafield: "fechaCreacion",
            width: "20%",
            align: "center",
            cellsformat: "dd/MM/yyyy",
            cellsalign: "center",
          },
        ],
      },
    };
  },
  beforeCreate() {
    this.source = {
      id: "isSistema",
      localdata: [],
      datatype: "json",
      datafields: [
        { name: "idSistema", map: "idSistema", type: "int" },
        { name: "sistema", map: "sistema", type: "string" },
        { name: "descripcion", map: "descripcion", type: "string" },
        { name: "estado", map: "estado", type: "string" },
        { name: "fechaCreacion", map: "fechaCreacion", type: "date" },
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
      this.sistema = event.args.row;
    },
    /**
     * edit
     * Redirecciona al formulario para la edición
     * @return String html
     */
    edit() {
      let selected = this.$refs.gridSistemas.getselectedrowindex();
      let rowdata = this.$refs.gridSistemas.getrowdata(selected);
      console.log(rowdata);
      console.log(rowdata.idSistema);
      this.$router.push({
        name: "sistema.update",
        params: { id: rowdata.idSistema },
      });
    },
    /**
     * destroy
     * Elimina un registro
     * @return String html
     */
    async destroy() {
      let selected = this.$refs.gridSistemas.getselectedrowindex();
      let rowdata = this.$refs.gridSistemas.getrowdata(selected);

      try {
        await sistemas.deleteSistema(rowdata.idSistema);
        this.$bvModal.hide("modalDelete");
        this.fetchSistemas();
      } catch (error) {
        console.error(error);
      }
    },
    /**
     * fetchSistemas
     * Obtiene el listado de sistemas
     * @return void
     */
    async fetchSistemas() {
      const response = await sistemas.getSistemas();
      this.source.localdata = response.data.data;
      this.$refs.gridSistemas.updatebounddata("cells");
    },
  },
  mounted() {
    this.fetchSistemas();
  },
};
</script>