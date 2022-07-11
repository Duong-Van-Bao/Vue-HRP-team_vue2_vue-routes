// define routes to component
// @ts-ignore
import Home from './components/Home'
// @ts-ignore
import PageHeader from './components/layouts/Header.vue'

const User = resolve => {
    // @ts-ignore
    require.ensure(['./components/user/User'], () => {
        // @ts-ignore
        resolve(require('./components/user/User'))
    }, 'user')
}

const UserStart = resolve => {
    // @ts-ignore
    require.ensure(['./components/user/Index'], () => {
        // @ts-ignore
        resolve(require('./components/user/Index'))
    }, 'user')
}

const UserDetails = resolve => {
    // @ts-ignore
    require.ensure(['./components/user/UserDetails'], () => {
        // @ts-ignore
        resolve(require('./components/user/UserDetails'))
    }, 'user')
}

const UserEdit = resolve => {
    // @ts-ignore
    require.ensure(['./components/user/UserEdit'], () => {
        // @ts-ignore
        resolve(require('./components/user/UserEdit'))
    }, 'user')
}

// @ts-ignore
// import User from './components/user/User'
// @ts-ignore
// import UserDetails from './components/user/UserDetails'
// @ts-ignore
// import UserStart from './components/user/Index'
// @ts-ignore
// import UserDetails from './components/user/UserDetails'
// @ts-ignore
// import UserEdit from './components/user/UserEdit'
// @ts-ignore
import Error from './components/404'

export const routes = [{
        path: '/',
        name: 'homepage',
        components: {
            default: Home,
            'page-header': PageHeader
        }
    },
    {
        path: '/user',
        name: 'user',
        component: User,
        children: [{
            path: '',
            name: 'Index',
            component: UserStart
        }, {
            path: ':id',
            name: 'userdetails',
            component: UserDetails,
            beforeEnter: (to, from, next) => {
                console.log('action route guard!')
                next()
            }
        }, {
            path: ':id/edit',
            name: 'useredit',
            component: UserEdit
        }]
    },
    // {
    //     path: '/user/:id',
    //     name: 'userdetails',
    //     component: UserDetails
    // }
    {
        path: '/auth-redirect',
        redirect: { name: 'homepage' }
    },
    {
        path: '/404',
        name: 'error',
        component: Error
    },
    {
        path: '*',
        redirect: { name: 'error' }
    }
]