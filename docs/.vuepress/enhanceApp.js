import  Quasar  from 'quasar'
import Notify from 'quasar'
import VueTyperPlugin from 'vue-typer'
import AOS from 'aos'
import 'aos/dist/aos.css'
import '@quasar/extras/roboto-font/roboto-font.css'
import '@quasar/extras/material-icons/material-icons.css'
export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Quasar)
  Vue.use(VueTyperPlugin)
  AOS.init()
}