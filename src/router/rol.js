import AdminLayout from '../layouts/admin.vue'

import RolList from '../pages/roles/list.vue'
import RolStore from '../pages/roles/store.vue'
import RolUpdate from '../pages/roles/update.vue'

export const rol = [
  {
    path: '/roles',
    name: 'roles',
    component: AdminLayout,
    meta: { auth: true },
    children: [
      {
        path: 'list',
        name: 'rol.list',
        meta: { auth: true, name: 'List' },
        component: RolList
        },
      {
        path: 'store',
        name: 'rol.store',
        meta: { auth: true, name: 'Rol' },
        component: RolStore
      },
      {
        path: 'update/:id',
        name: 'rol.update',
        meta: { auth: true, name: 'Update' },
        component: RolUpdate,
        props: true
      },
    ]
  }
]
