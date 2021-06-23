import { boot } from 'quasar/wrappers'

// "async" is optional;
// more info on params: https://quasar.dev/quasar-cli/boot-files
export default boot(({ router, store }) => {
  // something to do
  router.beforeEach((to, from, next) => {
    console.log('before each', store)
    if (to.matched.some(record => record.meta.requiresAuth)) {
      if (store.state.userModule.user) {
        store.commit('userModule/changeStateAuthenticated', true)
        // store.dispatch('userModule/setUserData', { })
        next()
      } else {
        store.commit('userModule/changeStateAuthenticated', false)
        next('/login')
      }
    } else {
      next()
    }
  })
})
