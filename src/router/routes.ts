import { RouteConfig } from 'vue-router'

const routes: RouteConfig[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    meta: {
      requiresAuth: true
    },
    children: [
      {
        path: '',
        component: () => import('pages/Index.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'createpublication',
        component: () => import('pages/CreatePublication.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: 'listmypublications',
        component: () => import('pages/ListMyPublications.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/listallpublications',
        component: () => import('pages/ListAllPublications.vue'),
        meta: {
          requiresAuth: true
        }
      },
      {
        path: '/editpublication/:idPublication',
        component: () => import('pages/EditPublication.vue'),
        meta: {
          requiresAuth: true
        }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('pages/login.vue'),
    meta: {
      requiresAuth: false
    }
  },
  {
    path: '/register',
    component: () => import('pages/register.vue'),
    meta: {
      requiresAuth: false
    }
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
