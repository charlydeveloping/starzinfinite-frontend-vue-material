<template lang="pug">
    v-dialog(
        v-model='dialog' 
        max-width='290'
        @click:outside="cancel"
        )
        v-card
            v-card-title.text-h5 {{ title }} 
            v-card-text {{ text }}
            v-card-actions
                v-btn( 
                    @click='cancel'
                ) Cancelar
                v-btn(
                    color='primary' 
                    @click='accept'
                ) Aceptar

</template>
<script>
export default {
    props: {
        dialog: {
            type: Boolean,
            required: true
        },
        title: {
            type: String,
            required: true
        },
        text: {
            type: String,
            required: true
        }
    },
    methods: {
        accept () {
            this.$emit('accept')
        },
        cancel () {
            this.$emit('cancel')
        }
    }
}
</script>