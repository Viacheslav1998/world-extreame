    import 'vuetify/styles'
    import '@mdi/font/css/materialdesignicons.css'
    import '@fontsource/roboto/latin.css' 
 
    import { createVuetify } from 'vuetify'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'

    export default createVuetify({
      components,
      directives,
      // You can add global configuration here, e.g., themes, icons
      // theme: {
      //   defaultTheme: 'light'
      // }
    })