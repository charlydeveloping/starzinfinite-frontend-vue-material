<template lang="pug">
		v-row(justify="center" align="center")
				v-col(xl="3" lg="4" md="5" sm="6" xs="10" cols="10")
						v-card.pa-4.elevation-8
								//- Body
								v-card-text
										v-row
												v-col.text-center(cols="12")
														img(src="@/assets/logo.png" width="300" height="120")
										v-card-title.grey--text.justify-center Starz Infinite
										v-card-subtitle.text-center.mb-3 Sistema de Venta de Tickets 
										validation-observer(v-slot="{ invalid }")
												v-row
														//- Usuario
														v-col.py-0(cols="12")
																validation-provider(
																		name="Usuario"
																		:rules="'required'"
																		v-slot="{ errors }"
																)
																		v-text-field(
																				v-model="payload.usuario"
																				prepend-icon="fas fa-at"
																				label="Usuario"
																				:error-messages="errors"
																				dense outlined
																		)
														//- Password
														v-col.py-0(cols="12")
																validation-provider(
																		name="Password"
																		:rules="'required'"
																		v-slot="{ errors }"
																)
																		v-text-field(
																				type="password"
																				v-model="payload.password"
																				prepend-icon="fas fa-key"
																				label="Password"
																				:error-messages="errors"
																				dense outlined
																		)
								
														//- Actions
														v-col.py-0.text-center(cols="12")
																v-btn(
																		color="primary"
																		:loading="loading"
																		:disabled="invalid"
																		@click.prevent="jwtLogin",
																) Ingresar
														v-row.mt-5(justify="center")
															v-btn(fab text icon)
																v-icon mdi-facebook
															v-btn(fab text icon)
																v-icon mdi-twitter
															v-btn(fab text icon)
																v-icon mdi-youtube
												

						//- Footer
						v-footer(color="primary")
								v-row
										v-col.text-center(cols="12")
												span(style="color:white; font-size: 80%") Desarrollado por CARG
</template>

<script>
import auth from '../../services/auth'
export default {
	data() {
		return {
			loading: false,
			payload: {
				usuario: '',
				contrasenia: ''
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
					this.loading = true
					const response = await auth.login(this.payload)
					this.loading = false
					const token = response.data.token
					
					localStorage.setItem('access_token', token)
					this.$router.push({ name: 'home' })
	
				} catch (error) {
					this.loading = false
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
