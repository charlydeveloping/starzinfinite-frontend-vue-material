<template lang="pug">
v-app
	v-content
		v-container(fill-height)
			v-layout(align-center, justify-center)
				v-flex.login-form.text-xs-center 
					.display-1.mb-3 
					v-card.pa-3(light)
						v-card-text
							v-row(justify="center")
								v-img.mt-5.mb-5( src="@/assets/logo.png" height="50" width="100"  )
							v-row(justify="center")
								h2.ma-3.mb-5 Sistema de Venta de Tickets
							v-form
								v-text-field(
									v-if="!options.isLoggingIn",
									v-model="user.name",
									light,
									prepend-icon="person",
									label="Name"
								)
								v-text-field(
									v-model="user.email",
									light,
									prepend-icon="fas fa-at",
									label="Email",
									type="email"
								)
								v-text-field(
									v-model="user.password",
									light,
									prepend-icon="fas fa-lock",
									label="Password",
									type="password"
								)
								v-checkbox(
									v-if="options.isLoggingIn",
									v-model="options.shouldStayLoggedIn",
									light,
									label="Recordarme",
									hide-details
								)
								v-btn.mt-5(
									v-if="options.isLoggingIn",
									@click.prevent="jwtLogin",
									block,
									color="primary" 
									type="submit"
								) Sign in
							v-row.mt-5(justify="center")
								v-btn(fab flat icon)
									v-icon mdi-facebook
								v-btn(fab flat icon)
									v-icon mdi-twitter
								v-btn(fab flat icon)
									v-icon mdi-youtube
					
</template>
<script>
export default {
  data() {
    return {
      user: {
        // email: 'admin@example.com',
        // password: 'admin',
        // name: 'John Doe',
      },
      options: {
        isLoggingIn: true,
        shouldStayLoggedIn: true,
      },
    };
  },
	methods: {
		async jwtLogin () {

        try {
          const response = await auth.login(this.payload)
          const token = response.data.token
          console.log(response)
          localStorage.setItem('user', {})
          localStorage.setItem('access_token', token)
          this.$router.push({ name: 'dashboard.home-1' })
  
        } catch (error) {
          console.error(error)
        }
    },
	}
};
</script>
<style lang="sass" scoped>
.login-form
  max-width: 500px
</style>
