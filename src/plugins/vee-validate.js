import * as rules from 'vee-validate/dist/rules'
import { i18n } from './i18n'
import { extend, ValidationObserver, ValidationProvider } from 'vee-validate'
import Vue from 'vue'
import {
  max,
  email,
  image,
  required,
  numeric,
} from "vee-validate/dist/rules";
Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule])
})
Vue.component('ValidationObserver', ValidationObserver)
Vue.component('ValidationProvider', ValidationProvider)
extend('password', {
  params: ['confirm_password'],
  validate (value, { confirm_password }) {
      return value === confirm_password
  },
  message: 'Los passwords no coiniciden'
})
// extend('max', {
//   ...max,
//   message: (field, values) => i18n.t('validations.max', values)
// })
extend('max', {
  ...max
})
extend('email', {
  ...email,
  message: (field, values) => i18n.t('validations.email', values)
})
extend('image', {
  ...image,
  message: (field, values) => i18n.t('validations.image', values)
})
extend('required', {
  ...required,
  message: (field, values) => `El campo ${field.toLowerCase()} es requerido`
})
extend('numeric', {
  ...numeric,
  message: (field, values) =>
      i18n.$t('validations.numeric', values)
})