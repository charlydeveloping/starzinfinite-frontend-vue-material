<template lang="pug">
v-container
  v-breadcrumbs(:items="breadcrumbs", large)
  v-row
    v-col(md="6")
      v-card
        v-card-title Nuevo sistema
        v-card-text 
          form-sistema(
            :payload="payload",
            :loading="loading.save",
            @save="save"
          )
</template>
<script>
import FormSistema from "./components/form.vue";
import sistema from "../../services/sistemas";
export default {
  components: {
    FormSistema,
  },
  props: {
    id: {
      type: [
				String,
				Number
			],
      required: true,
    },
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
          disabled: false,
          href: "breadcrumbs_link_2",
        },
				{
          text: "Editar Sistema",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
      loading: {
        save: false,
      },
      payload: {},
    };
  },
  methods: {
    /**
     * save
     * Guarda un nuevo registro del sistema
     * @return void
     */
    async save() {
      try {
        await sistema.updateSistema(this.id, this.payload);

        this.$router.push({ name: "sistema.list" });

        this.$notify({
          type: "success",
          title: "Exito",
          text: "sistema guardado exitosamente",
        });
      } catch (error) {
        console.error(error);
        this.$notify({
          type: "error",
          title: "Error",
          text: "Lo sentimos ha ocurrido un error",
        });
      }
    },
    /**
     * fetchSistema
     * Obtiene el sistema basado en el id de la url
     * @return void
     */
    async fetchSistema() {
      try {
        const response = await sistema.getSistema(this.id);
        this.payload = response.data.data;
      } catch (error) {
        console.error(error);
        this.$notify({
          type: "error",
          title: "Error",
          text: "Lo sentimos ha ocurrido un error",
        });
      }
    },
  },
  mounted() {
    this.fetchSistema();
  },
};
</script>