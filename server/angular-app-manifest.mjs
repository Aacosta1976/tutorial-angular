
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: 'https://aacosta1976.github.io/tutorial-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/tutorial-angular/justification",
    "route": "/tutorial-angular"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/justification"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/installation"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/first-steps"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/usage"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/functioning"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/conclusions"
  },
  {
    "renderMode": 2,
    "route": "/tutorial-angular/resources"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 679, hash: '57a10dd364fd9cb01715cc17a7ff09b4d71faa2e3cd7f5dba9d57309db6edd8a', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 943, hash: '0a46c3c1144289a470717332641ac3cbda40e61973702b34a8575acda0407b3f', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'installation/index.html': {size: 30627, hash: '1cce14ca5709212b25fdfc17b7c7ce6b3c7b883b107f15637554b9bac29a48c6', text: () => import('./assets-chunks/installation_index_html.mjs').then(m => m.default)},
    'justification/index.html': {size: 30003, hash: '208e05e095e0f7ba5f67c3fa43bfda900fed0dcd5faa0b081ffffbe6fb67c80c', text: () => import('./assets-chunks/justification_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 28526, hash: 'bca4a272bf2324be7f67cfcdb4177f0aacb3bd4ada8ea83db3db1ac62d150c98', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'conclusions/index.html': {size: 24378, hash: 'b858a49dd931761604e3bc7f98ef6a0194730f21028eff60b59cf31b90618360', text: () => import('./assets-chunks/conclusions_index_html.mjs').then(m => m.default)},
    'functioning/index.html': {size: 28509, hash: '4411ea832ba4ee829741d813666b1a5f1c989dbdee5631236c9421426aeac852', text: () => import('./assets-chunks/functioning_index_html.mjs').then(m => m.default)},
    'usage/index.html': {size: 22312, hash: 'a6dd84e6c905724eca7586cc3d1a51d1f11cca70707ece4a64a521dee11a65e1', text: () => import('./assets-chunks/usage_index_html.mjs').then(m => m.default)},
    'first-steps/index.html': {size: 27616, hash: '93eb8f5f68989033d6437acf835b12f48099ca117a5f1e5d8a0467a07a7f83e9', text: () => import('./assets-chunks/first-steps_index_html.mjs').then(m => m.default)},
    'styles-GKJLMNJZ.css': {size: 615, hash: '5CqMj3OTQT0', text: () => import('./assets-chunks/styles-GKJLMNJZ_css.mjs').then(m => m.default)}
  },
};
