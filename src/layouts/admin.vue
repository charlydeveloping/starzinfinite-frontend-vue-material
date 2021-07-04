<template lang="pug">
    v-app
        app-bar
        navigation-drawer
        v-main(class="container")
            v-container(fluid  )
                router-view

        v-footer()
            v-card-text(class="text-center" )
                | {{ new Date().getFullYear() }} &mdash; 
                strong Starz Infinite

                

</template>
<script>
import AppBar from '../components/core/layouts/app-bar.vue'
import NavigationDrawer from '../components/core/layouts/navigation-drawer.vue'

export default {
    components: {
        AppBar,
        NavigationDrawer
    },
}
</script>
<style scoped>
.container {
    background-color: #f2f2f2;
}
</style>