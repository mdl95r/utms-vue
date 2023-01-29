import { createApp } from 'vue';
import App from '@/App.vue';
import components from '@/ui';
import directives from '@/directives';
import uPopupCopyVue from '@/components/PopupCopy/uPopupCopy.vue';

const app = createApp(App);

directives.forEach((directive) => app.directive(directive.name, directive));

[uPopupCopyVue, ...components].forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
