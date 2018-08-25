/* eslint-disable no-undef, new-cap */
i18next
  .use(i18nextXHRBackend)
  .use(i18nextBrowserLanguageDetector)
  .init({
    fallbackLng: 'en',
    backend: {
      loadPath: '../locales/{{lng}}/{{ns}}.json'
    },
    ns: ['translations'],
    defaultNS: 'translations'
  }
);

const i18n = new VueI18next(i18next);

Vue.component('app', {
  template: `
  <div id="root">
    <div class="App">
      <div class="App-header">
        <img src="https://blobscdn.gitbook.com/v0/b/gitbook-28427.appspot.com/o/spaces%2F-L9iS6Wm2hynS5H9Gj7j%2Favatar.png?generation=1523462254548780&alt=media" class="App-logo" alt="logo">
        <h2>{{ $t("title", { "tech": "vue", "lib": "vue-i18next" }) }}</h2>
      </div>
      <button v-on:click="changeLanguage('de')">de</button>
      <button v-on:click="changeLanguage('en')">en</button>
      <div class="App-intro">{{ $t("description") }}</div>
    </div>
  </div>`,
  methods: {
    changeLanguage(lang) {
      this.$i18n.i18next.changeLanguage(lang);
    },
  },
});

new Vue({
  i18n,
}).$mount('#app');
