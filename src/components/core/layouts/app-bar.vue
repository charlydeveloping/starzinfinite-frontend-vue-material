<template lang="pug">
  v-app-bar( fixed app flat elevation="3")
    v-app-bar-nav-icon(@click='setDrawer')
    v-toolbar-title Sistema de Venta de Tickets
    v-spacer
    
    v-btn(text fab): v-icon fas fa-bell
    v-btn(text fab): v-icon fas fa-shopping-cart
    
    v-menu(offset-y='')
        template(v-slot:activator='{ on, attrs }')
            //- v-btn(color='primary' dark='' v-bind='attrs' v-on='on')
            v-card(flat color="primary" v-bind='attrs' v-on='on')    
                v-list-item
                    v-list-item-avatar
                        v-img( src="https://cdn.vuetifyjs.com/images/john.jpg" )
                    v-list-item-content
                        v-list-item-title: span(class="font-weight-bold" style="color:white" ) Carlos Ramirez
                        v-list-item-subtitle: span(style="color:white" ) Broker
                
        v-list
            v-list-item(v-for='(item, index) in items' :key='index')
                v-list-item-title {{ item.title }}
    
    
    
                
        
</template>
<script>
export default {
    data() {
        return {
            items: [
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me' },
                { title: 'Click Me 2' },
            ],
        }
    },
     methods: {
        setDrawer () {
            this.$store.dispatch('setting/drawerAction')
        }
    }
};
</script>