import Vue from 'vue';
import App from './App';

Vue.config.productionTip = false;


window.vm = new Vue({
  render(h) {
    return h(
      'div',
      [
        h(App), h('hr'), h(App)
      ]
    );
  }
}).$mount('#app');

