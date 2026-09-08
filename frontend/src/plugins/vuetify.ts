    import 'vuetify/styles'
    import '@mdi/font/css/materialdesignicons.css'
    import '@fontsource/roboto/latin.css' 
    

    import { createVuetify } from 'vuetify'
    import * as components from 'vuetify/components'
    import * as directives from 'vuetify/directives'
    import { ru } from 'vuetify/locale'

    export default createVuetify({
      components,
      directives,
      locale: {
        locale: 'ru',     
        fallback: 'en',   
        messages: { ru } 
      },
      theme: {
        defaultTheme: 'light',
        themes: {
          'orange-theme': {
            dark: false,
             colors: {
              background: '#e2ddd4', 
              surface: '#FFE0B2',   
              primary: '#FF9800',    
              secondary: '#F57C00',  
              error: '#D32F2F',
              info: '#1976D2',
              success: '#388E3C',
              warning: '#F57C00',
              mongoBase: '#CDC6B8'
            },
          },
          light: { dark: false, colors: { background: '#FFF', mongoBase: '#E0E0E0' } },
          dark: { dark: true, colors: { background: '#121212', mongoBase: '#1E1E1E' } },
        },
      },
    })