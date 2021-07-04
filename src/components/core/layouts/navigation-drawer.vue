<template lang="pug">
v-navigation-drawer(:value="drawer", app, dark)
  v-container(mt-5)
    v-row(justify="center") 
      v-avatar(size="80")
        img(src="https://cdn.vuetifyjs.com/images/john.jpg", alt="alt")
    v-row(justify="center") 
      span.text-h6(style="color: white") Carlos Ramirez
      small(style="color: white") charlydeveloping@gmail.com

  v-list
    div(v-for="item in menu", :key="item.id")
      v-list-item(v-if="!hasChildren(item)", :to="{ name: item.to }")
        v-list-item-icon
          v-icon {{ item.icon }}
        v-list-item-title {{ item.name }}

      v-list-group(v-else, :value="true", :prepend-icon="item.icon")
        template(v-slot:activator="")
          v-list-item-title {{ item.name }}

        v-list-item(
          v-for="child in item.children",
          :to="{ name: child.to }",
          :key="child.id",
          link
        )
          v-list-item-title(v-text="child.name")
          v-list-item-icon
            v-icon(v-text="child.icon") 
</template>
<script>
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      menu: [
        {
          name: "Home",
          to: "home",
          icon: "fas fa-home",
        },
        {
          name: "Parametricas",
          icon: "fas fa-cogs",
          children: [
            {
              name: "Sistemas",
              to: "sistema.list",
              icon: "fas fa-toolbox",
            },
          ],
        },
      ],
      clipped: false,
      group: null,
    };
  },
  computed: {
    ...mapGetters({
      drawer: "setting/drawerState",
    }),
  },
  methods: {
    hasChildren(item) {
      return item.hasOwnProperty("children");
    },
  },
};
</script>