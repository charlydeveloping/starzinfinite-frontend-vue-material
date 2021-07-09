<template lang="pug">
validation-observer(v-slot="{ invalid }")
	ui-input-text-field(v-model="payload.rol", v-bind="inputs.rol")
	ui-input-text-field(v-model="payload.descripcion", v-bind="inputs.descripcion")
	ui-input-text-field(v-model="payload.estado", v-bind="inputs.estado")

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
				rol: {
					name: "Rol",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
				descripcion: {
					name: "Descripción",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
				estado: {
					name: "Estado",
					counter: 80,
					maxlength: 80,
					rules: `required|max:80`,
					required: true,
				},
			},
		};
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