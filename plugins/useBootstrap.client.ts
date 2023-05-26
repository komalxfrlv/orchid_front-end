import * as twbs from 'bootstrap'
export default defineNuxtPlugin(
    nuxtApp => { 
        nuxtApp.provide('bootstrap', twbs) 
    }
)