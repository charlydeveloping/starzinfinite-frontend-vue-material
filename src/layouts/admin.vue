<template lang="pug">
    v-app
        app-bar
        navigation-drawer
        v-main
            v-container(fluid class="container" )
                router-view

        v-footer(app)

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