import Index from './module/app.jsx'
import Detail from '../detail/app.jsx'

export default [
    { path: '/', component: Index, exact: true },
    { path: '/detail/:id', component: Detail }
]
