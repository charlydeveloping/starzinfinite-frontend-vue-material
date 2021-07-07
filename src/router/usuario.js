import AdminLayout from '../layouts/admin.vue'

import UsuarioList from '../pages/usuarios/list.vue'
import UsuarioStore from '../pages/usuarios/store.vue'
import UsuarioUpdate from '../pages/usuarios/update.vue'

export const usuario = [
  {
    path: '/usuarios',
    name: 'usuarios',
    component: AdminLayout,
    meta: { auth: true },
    children: [
      {
        path: 'list',
        name: 'usuario.list',
        meta: { auth: true, name: 'List' },
        component: UsuarioList
        },
      {
        path: 'store',
        name: 'usuario.store',
        meta: { auth: true, name: 'Store' },
        component: UsuarioStore
      },
      {
        path: 'update/:id',
        name: 'usuario.update',
        meta: { auth: true, name: 'Update' },
        component: UsuarioUpdate,
        props: true
      },
    ]
  }
]
