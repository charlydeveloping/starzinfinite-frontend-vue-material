<template lang="pug">
validation-observer(v-slot="{ invalid }")
	ui-input-text-field(v-model="payload.idPersona", v-bind="inputs.idPersona")
	ui-input-text-field(v-model="payload.usuario", v-bind="inputs.usuario")
	ui-input-text-field(v-model="payload.password", v-bind="inputs.password")
	ui-input-text-field(v-model="payload.temporal", v-bind="inputs.temporal")

	
	span Desde Hasta 
	v-menu(
		ref="menu",
		v-model="menu",
		:close-on-content-click="false",
		
		transition="scale-transition",
		offset-y="",
		min-width="auto"
	)
		template(v-slot:activator="{ on, attrs }")
			validation-provider(
				:name="'Fecha desde - Fecha hasta'"
				:rules="'required|order_date_range'"
				v-slot="{ errors }"
			)
				v-text-field(
					:value="date",
					outlined,
					prepend-inner-icon="mdi-calendar",
					readonly="",
					dense
					v-bind:error-messages="errors"
					v-bind="attrs",
					v-on="on"
				)
		v-date-picker(v-model="dates", range, no-title="", scrollable="")
			v-spacer
			v-btn(text="", color="primary", @click="menu = false")
				| Cancel
			v-btn(text="", color="primary", @click="$refs.menu.save(date)")
				| OK

	v-btn(:disabled="invalid", color="primary", @click="save") Guardar
	v-btn.ml-1(@click="$router.back()") Cancelar
</template>
<script>
export default {
	props: {
		payload: {
			type: Object,
			required: true,
		},
	},
	data() {
		return {
			menu: false,
			dates: [],
			inputs: {
				idPersona: {
					name: "Id Persona",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
				usuario: {
					name: "Usuario",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
				password: {
					name: "Password",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
				date: {
					name: "Desde - Hasta",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
				temporal: {
					name: "Temporal",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
			},
		};
	},
	computed: {
		date: function () {
			return this.dates.join("~");
		},
	},
	watch: {
		dates: function (val) {
			const fechaDesde = val[0]
			const fechaHasta = val[1]
			this.payload.fechaDesde = fechaDesde
			this.payload.fechaHasta = fechaHasta
			
		} 
	},
	methods: {
		/**
		 * save
		 * emite el evento para guardar el formulario
		 * @return void
		 */
		save() {
			this.$emit("save");
		},
	},
};
</script>