import VueSilentbox from 'vue-silentbox'
import Photoswipe from "vue-pswipe"


export default ({
    Vue, // the version of Vue being used in the VuePress app
    options, // the options for the root Vue instance
    router, // the router instance for the app
    siteData // site metadata
}) => {
    Vue.use(VueSilentbox)
    Vue.use(Photoswipe)
}