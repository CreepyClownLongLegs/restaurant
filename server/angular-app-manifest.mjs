
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/reservation"
  },
  {
    "renderMode": 2,
    "route": "/menu"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11382, hash: '6e7b21165b38dd0c9121d0759fe666a672acdb822f3737ab58f413e203b45219', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4140, hash: '454c721e7d6976e0fd131092f05c4f55dbe7dab2c7365151a1bea1858b492a34', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'reservation/index.html': {size: 61839, hash: '979b957adfe7f6d0830d26d9463319b2b433533d43d912f7469cd7ac2f06475f', text: () => import('./assets-chunks/reservation_index_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66654, hash: 'cabf236e1e3552203701ac0512d72749bb9687b95ef631a6a1fcb5b39b6523bb', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93435, hash: '1b8d3c04ac0f62fbc89eee14573c5874e20e3a441f15feead9072b5ad922ec04', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 61458, hash: '349544aebfd5e3a23691b3880c420307838c6a7276a001aca04d4c57ad335922', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'main-QHROFS4N.css': {size: 4669, hash: '8RPLqGgwDhE', text: () => import('./assets-chunks/main-QHROFS4N_css.mjs').then(m => m.default)},
    'main.server.css': {size: 4669, hash: '8RPLqGgwDhE', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-HLOJMN2X.css': {size: 282577, hash: 'h3nahWHJ/mQ', text: () => import('./assets-chunks/styles-HLOJMN2X_css.mjs').then(m => m.default)}
  },
};
