<template lang="pug">
		v-container
			v-breadcrumbs(
				:items="breadcrumbs"
				large
			)
			v-row
				v-col(md="6" )
					v-card(  )
						v-card-title Nuevo sistema
						v-card-text 
							form-sistema(
								:payload="payload"
								:loading="loading.save"
								@save="save"
							)
</template>
<script>
import FormSistema from './components/form.vue'
import sistema from '../../services/sistemas'

export default {
	components: {
    FormSistema
  },
  data () {
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
          text: "Nuevo Sistema",
          disabled: true,
          href: "breadcrumbs_link_2",
        },
      ],
      loading: {
        save: false
      },
      payload: {
        sistema: '',
        descripcion: '',
        estado: '',
        usuario: ''
      }
    }
  },
  methods: {
    /**
     * save
     * Guarda un nuevo registro del sistema
     * @return void
     */
    async save () {
      try {
        await sistema.storeSistema(this.payload)
        this.$router.push({ name: 'sistema.list' })
        
        this.$notify({
          type: 'success',
          title: 'Exito',
          text: 'Sistema guardado exitosamente'
        })
      } catch (error) {
        this.$notify({
          type: 'error',
          title: 'Error',
          text: 'Lo sentimos ha ocurrido un error'
        })
      }
    }
  },
}
</script>