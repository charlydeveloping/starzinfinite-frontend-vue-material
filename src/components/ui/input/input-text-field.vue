
<template lang="pug">
validation-provider(
  :vid="vid",
  :ref="inputRef",
  :name="name | lowercase",
  :rules="rules",
  v-slot="{ valid, errors, pending, touched }",
  :debounce="debounce"
)
  v-text-field(
    v-bind:value="value",
    v-bind="$attrs",
    v-on="$listeners",
    v-bind:dense="dense",
    v-bind:outlined="outlined",
    v-bind:error-messages="errors",
    v-bind:clear-icon="clear_icon",
    v-bind:background-color="color",
    v-on:input="$emit('input', $event)",
    clearable
  )
    //- Tooltip
    v-tooltip(v-if="tooltip", slot="append", max-width="200", bottom)
      template(#activator="{ on }")
        .font-weight-bold(v-on="on")
          v-icon.mt-2.ml-1(color="info") fas fa-info-circle
      | {{ tooltip }}
    //- Label
    template(#label)
      p.font-weight-medium
        | {{ name }}
        span.error--text(v-if="$attrs.required") {{ ` *` }}
    //- State icon
    template(v-if="validateField", #append-outer)
      ui-display-state-icon(
        v-if="!pending && touched",
        :state="valid",
        text-for-true="ui.field_valid",
        text-for-false="ui.field_invalid"
      )
      v-progress-circular(
        v-show="pending",
        color="accent",
        size="24",
        indeterminate
      )
</template>

<script lang="ts">
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
    color: {
      type: String,
      default: "grey lighten-4",
    },
  },
  data() {
    return {
      clear_icon: "fas fa-eraser",
    };
  },
};
</script>