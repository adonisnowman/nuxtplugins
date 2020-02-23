import Vue from 'vue';

import {
  library
} from '@fortawesome/fontawesome-svg-core'
import {
  faUserSecret,
  faPaw,
  faLifeRing,
  faTimes,
  faPlus,
  faClone,
  faSave,
  faCaretDown,
  faImages,
  faAngleDoubleDown,
  faAngleDown
} from '@fortawesome/free-solid-svg-icons'
import {
  FontAwesomeIcon
} from '@fortawesome/vue-fontawesome'

library.add(faUserSecret)
library.add(faLifeRing)
library.add(faPaw)
library.add(faTimes)
library.add(faPlus)
library.add(faClone)
library.add(faSave)
library.add(faCaretDown)
library.add(faImages)
library.add(faAngleDoubleDown)
library.add(faAngleDown)

Vue.component('font-awesome-icon', FontAwesomeIcon)


import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'

// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'