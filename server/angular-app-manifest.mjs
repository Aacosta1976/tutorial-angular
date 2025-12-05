
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/justification",
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/justification"
  },
  {
    "renderMode": 2,
    "route": "/installation"
  },
  {
    "renderMode": 2,
    "route": "/first-steps"
  },
  {
    "renderMode": 2,
    "route": "/usage"
  },
  {
    "renderMode": 2,
    "route": "/functioning"
  },
  {
    "renderMode": 2,
    "route": "/conclusions"
  },
  {
    "renderMode": 2,
    "route": "/resources"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 633, hash: '4cef1e54a350d3400c4679aec5c4c9f456ea1ae178ffefe7b8f09046c72874aa', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 897, hash: '06598aba2f8e22e73737c0c4e0e55b81ea7565dca0f318d4d6013d9a0a3d6488', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'conclusions/index.html': {size: 24010, hash: '0ea8859d5ff720805d94772941c47163682b45afd64b3e7adac52d0e83636be2', text: () => import('./assets-chunks/conclusions_index_html.mjs').then(m => m.default)},
    'resources/index.html': {size: 28158, hash: '9af509787f94104bb12d1e6b60dc7146ff064b3634609c1de3b7fd16d782ed1e', text: () => import('./assets-chunks/resources_index_html.mjs').then(m => m.default)},
    'justification/index.html': {size: 29635, hash: '6abade44b334757eaa2ed3da9cc46f1d39d8423407a9dfb949229fe34572c692', text: () => import('./assets-chunks/justification_index_html.mjs').then(m => m.default)},
    'installation/index.html': {size: 30259, hash: 'c995cdd1becb9ea4cbd3de499588af85b4cfa5a03a59bc7c9a5d660d032c1394', text: () => import('./assets-chunks/installation_index_html.mjs').then(m => m.default)},
    'usage/index.html': {size: 21944, hash: '092effca2332a7b371df35a2b40f12a4339e71165a0cbee266e2ddf101be8b30', text: () => import('./assets-chunks/usage_index_html.mjs').then(m => m.default)},
    'first-steps/index.html': {size: 27248, hash: 'fb3cae12a610ce87dba5e108ff8ec229b66ac6e0609a314fdf7438b8de7cb3f8', text: () => import('./assets-chunks/first-steps_index_html.mjs').then(m => m.default)},
    'functioning/index.html': {size: 28141, hash: 'a91edbf57bf8faf882c5b391dd115c41f65030ef1e6a02de21d9cc6a201c631a', text: () => import('./assets-chunks/functioning_index_html.mjs').then(m => m.default)},
    'styles-GKJLMNJZ.css': {size: 615, hash: '5CqMj3OTQT0', text: () => import('./assets-chunks/styles-GKJLMNJZ_css.mjs').then(m => m.default)}
  },
};
