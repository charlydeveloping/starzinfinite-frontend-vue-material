import AdminLayout from '../layouts/admin.vue'

import SistemaList from '../pages/sistemas/list.vue'
// import SistemaStore from '../pages/sistemas/store.vue'
// import SistemaUpdate from '../pages/sistemas/update.vue'

export const sistema = [
  {
    path: '/sistemas',
    name: 'sistemas',
    component: AdminLayout,
    meta: { auth: true },
    children: [
      {
        path: 'list',
        name: 'sistema.list',
        meta: { auth: true, name: 'List' },
        component: SistemaList
        },
    //   {
    //     path: 'store',
    //     name: 'sistema.store',
    //     meta: { auth: true, name: 'Store' },
    //     component: SistemaStore
    //   },
    //   {
    //     path: 'update/:id',
    //     name: 'sistema.update',
    //     meta: { auth: true, name: 'Update' },
    //     component: SistemaUpdate,
    //     props: true
    //   },
    ]
  }
]
