
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/restaurant/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/restaurant"
  },
  {
    "renderMode": 2,
    "route": "/restaurant/reservation"
  },
  {
    "renderMode": 2,
    "route": "/restaurant/menu"
  },
  {
    "renderMode": 2,
    "route": "/restaurant/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 11393, hash: 'bb34ffaec86398c168af9915560ec6c2ebd67c3bf98b657d7d2bb8ba1ab731ca', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 4151, hash: '15f5d657944e95366c387545378695dd36d75b7f1ca7ef21855ff1b5ad779f45', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'contact/index.html': {size: 66786, hash: 'd136b1523b8b5f996f8051108cc7ffe8f5429bad21d3abfb0df6c0d99a7fda27', text: () => import('./assets-chunks/contact_index_html.mjs').then(m => m.default)},
    'reservation/index.html': {size: 61960, hash: '549364d1097e949e7c87c58cd1acfe3e4c9845b45e9d3f860988742aeac380ab', text: () => import('./assets-chunks/reservation_index_html.mjs').then(m => m.default)},
    'menu/index.html': {size: 61579, hash: '9dfea1de04f2139f13aab15ff7bf2202bc82f39bf1bef4d67b4ae79ef6a3a107', text: () => import('./assets-chunks/menu_index_html.mjs').then(m => m.default)},
    'index.html': {size: 93600, hash: '88a10f9ecb75cbd4a04114c1b3919e318642284e7dce22c54a089900890eaab6', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'main-QHROFS4N.css': {size: 4669, hash: '8RPLqGgwDhE', text: () => import('./assets-chunks/main-QHROFS4N_css.mjs').then(m => m.default)},
    'main.server.css': {size: 4669, hash: '8RPLqGgwDhE', text: () => import('./assets-chunks/main_server_css.mjs').then(m => m.default)},
    'styles-HLOJMN2X.css': {size: 282577, hash: 'h3nahWHJ/mQ', text: () => import('./assets-chunks/styles-HLOJMN2X_css.mjs').then(m => m.default)}
  },
};
