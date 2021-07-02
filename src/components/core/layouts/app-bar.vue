<template lang="pug">
  v-app-bar( fixed app flat)
    v-app-bar-nav-icon(@click='setDrawer')
    v-toolbar-title Title
</template>
<script>
export default {
     methods: {
        setDrawer () {
            this.$store.dispatch('setting/drawerAction')
        }
    }
};
</script>