
<template lang="pug">
validation-provider(
  :vid="vid",
  :ref="inputRef",
  :name="name",
  :rules="rules",
  v-slot="{ valid, errors, pending, touched }",
  :debounce="debounce"
)
  span {{ name }}
  v-text-field(
    v-bind:value="value",
    v-bind="$attrs",
    v-on="$listeners",
    v-bind:dense="dense",
    v-bind:outlined="outlined",
    v-bind:error-messages="errors",
    v-bind:clear-icon="clear_icon",
    v-on:input="$emit('input', $event)",
    clearable
  )

</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    vid: {
      type: String,
      required: false,
    },
    inputRef: {
      type: String,
      required: false,
    },
    value: {
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    rules: {
      type: String,
      required: true,
    },
    validateField: {
      type: Boolean,
      default: true,
    },
    outlined: {
      type: Boolean,
      default: true,
    },
    dense: {
      type: Boolean,
      default: true,
    },
    debounce: {
      type: Number,
      required: false,
    },
    tooltip: {
      type: String,
      required: false,
    },
  },
  data() {
    return {
      clear_icon: "fas fa-eraser",
    };
  },
};
</script>