<template lang="pug">
v-container
  v-breadcrumbs(:items="breadcrumbs", large)
  v-row
    v-col(md="6")
      v-card
        v-card-title Nuevo sistema
        v-card-text 
          form-usuario(
            :payload="payload",
            :loading="loading.save",
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
          text: "Usuarios",
          disabled: false,
          href: "breadcrumbs_link_2",
        },
        {
          text: "Editar Usuario",
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
     * Guarda un nuevo registro del usuario
     * @return void
     */
    async save() {
      try {
        await usuario.updateUsuario(this.id, this.payload);

        this.$router.push({ name: "usuario.list" });

        this.$notify({
          type: "success",
          title: "Exito",
          text: "usuario guardado exitosamente",
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
     * fetchUsuario
     * Obtiene el usuario basado en el id de la url
     * @return void
     */
    async fetchUsuario() {
      try {
        const response = await usuario.getUsuario(this.id);
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
    this.fetchUsuario();
  },
};
</script>