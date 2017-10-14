# nuxtvuetify

Este é um template para vue-cli, usando [NuxtJS](https://nuxtjs.org/) e [Vuetify](https://vuetifyjs.com/). 
É basicamente o frontend do [evolutio](http://evolutio.io/) simplificado ao extremo.

### Setup

``` bash
$ npm install -g vue-cli
$ vue init evolutio/nuxtvuetify my-project
$ cd my-project
$ npm install # ou yarn
$ npm run dev
```

### Informações importantes:

- `apimock.js` é uma implementação "fake" da `api.js`. Permite que vc desenvolva normalmente sem backend.
- Se precisar, customize o código dos plugins `ga.js` (Google Analytics) e `sentry.js` (Sentry). Se não, remova os arquivos e os plugins do seu `nuxt.config.js`
