import { createApp } from 'vue';
import App from '@/App.vue';
import components from '@/components/ui';
import directives from '@/directives';
import UPopupCopy from '@/components/UPopupCopy.vue';

const app = createApp(App);

directives.forEach((directive) => app.directive(directive.name, directive));

[UPopupCopy, ...components].forEach((component) => {
  app.component(component.name, component);
});

app.mount('#app');
