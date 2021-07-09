<template lang="pug">
v-container
  v-breadcrumbs(:items="breadcrumbs", large)
  v-row
    v-col(md="6")
      v-card
        v-card-title Editar rol
        v-card-text 
          form-rol(
            :payload="payload",
            :loading="loading.save",
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
  props: {
    id: {
      type: [String, Number],
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
          text: "Roles",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
        {
          text: "Editar Rol",
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
     * Guarda un nuevo registro del rol
     * @return void
     */
    async save() {
      try {
        await roles.updateRol(this.id, this.payload);

        this.$router.push({ name: "rol.list" });

        this.$notify({
          type: "success",
          title: "Exito",
          text: "rol guardado exitosamente",
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
     * fetchRol
     * Obtiene el rol basado en el id de la url
     * @return void
     */
    async fetchRol() {
      try {
        const response = await roles.getRol(this.id);
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
    this.fetchRol();
  },
};
</script>