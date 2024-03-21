import i18n from 'i18next'

import { initReactI18next } from 'react-i18next'

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    // Your i18next configuration options...
  })

export default i18n
