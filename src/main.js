import Vue from 'vue'
import App from './App.vue'

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core'

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

/* import specific icons */
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import { faSquareFacebook } from '@fortawesome/free-brands-svg-icons'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { faShapes } from '@fortawesome/free-solid-svg-icons'
import { faCircleInfo } from '@fortawesome/free-solid-svg-icons'
import { faBook } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-regular-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { faSignal } from '@fortawesome/free-solid-svg-icons'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'

/* add icons to the library */
library.add(faTwitter, faFacebookF, faInstagram, faLinkedin, faAngleDown, faSquareFacebook, faArrowRight, faShapes, faCircleInfo, faBook, faCartShopping, faFileLines, faUser, faCheck, faMagnifyingGlass, faHeart, faSignal, faCalendar)

/* add font awesome icon component */
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
